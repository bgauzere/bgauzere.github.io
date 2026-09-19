const speakerIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm12.5 3a3.5 3.5 0 0 0-1.5-2.87v5.74A3.5 3.5 0 0 0 16.5 12Zm-1.5-8v2.06a7 7 0 0 1 0 11.88V20a9 9 0 0 0 0-16Z"/></svg>`;

let gallery = [];
let galleryIndex = 0;
let activeAudio = null;
let activeSoundButton = null;
let quizBirds = [];
let quizAnswer = null;
let lastQuizBirdId = null;
let quizScore = 0;
let quizCount = 0;

const app = document.querySelector('#app');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const lightboxCaption = document.querySelector('#lightboxCaption');

function birdCard(bird) {
  const count = bird.photos.length;
  return `<article class="bird-card">
    <button class="photo-button" type="button" data-gallery='${JSON.stringify(bird.photos)}' data-title="${bird.name}" aria-label="Agrandir les photos de ${bird.name}">
      <img src="${bird.photos[0]}" alt="${bird.name}" loading="lazy">
      ${count > 1 ? `<span class="photo-count">${count} photos</span>` : ''}
    </button>
    <div class="card-body">
      <div><h3>${bird.name}</h3><p class="scientific">${bird.scientific}</p><p class="fact">${bird.fact}</p></div>
      <button class="sound-button" type="button" data-audio="${bird.audio}" aria-label="Écouter ${bird.name}" title="Écouter le chant de ${bird.name}">${speakerIcon}</button>
    </div>
  </article>`;
}

function sectionTemplate(section) {
  return `<section class="section" id="${section.id}" aria-labelledby="${section.id}-title">
    <div class="section-heading"><p class="section-kicker">${section.label}</p><h2 id="${section.id}-title">${section.title}</h2><p class="section-description">${section.description}</p></div>
    <div class="bird-grid">${section.birds.map(birdCard).join('')}</div>
  </section>`;
}

function storyTemplate(story) {
  const frames = story.photos.map((photo, index) => `<figure class="story-frame">
    <button type="button" data-story-index="${index}" aria-label="Agrandir : ${photo.caption}"><img src="${photo.src}" alt="${photo.caption}" loading="lazy"></button>
    <figcaption>${index + 1}. ${photo.caption}</figcaption>
  </figure>`).join('');
  return `<section class="section story-section" id="${story.id}" aria-labelledby="${story.id}-title">
    <div class="story-hero">
      <div class="story-cover"><img src="${story.cover}" alt="Pic noir accroché à un tronc" loading="lazy"></div>
      <div class="story-copy"><p class="section-kicker">${story.label}</p><h2 id="${story.id}-title">${story.title}</h2><p class="section-description">${story.description}</p><p class="scientific">${story.scientific}</p><button class="sound-button" type="button" data-audio="${story.audio}" aria-label="Écouter le pic noir" title="Écouter le pic noir">${speakerIcon}</button></div>
    </div>
    <div class="story-strip" aria-label="Histoire du nourrissage du pic noir">${frames}</div>
  </section>`;
}

function quizTemplate() {
  return `<section class="section quiz-section" id="quiz" aria-labelledby="quiz-title">
    <div class="section-heading"><p class="section-kicker">À toi de jouer</p><h2 id="quiz-title">Quel est cet oiseau ?</h2><p class="section-description">Observe la photo, puis choisis son espèce parmi les quatre propositions.</p></div>
    <div class="quiz-card">
      <div class="quiz-photo"><img id="quizImage" src="" alt="Un oiseau à reconnaître"></div>
      <div class="quiz-panel">
        <p class="quiz-progress" id="quizProgress"></p>
        <div class="quiz-options" id="quizOptions" aria-label="Réponses possibles"></div>
        <p class="quiz-feedback" id="quizFeedback" aria-live="polite"></p>
        <button class="quiz-next" id="nextQuestion" type="button" hidden>Question suivante →</button>
      </div>
    </div>
  </section>`;
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function newQuizQuestion() {
  const choices = quizBirds.filter((bird) => bird.id !== lastQuizBirdId);
  quizAnswer = choices[Math.floor(Math.random() * choices.length)] || quizBirds[0];
  lastQuizBirdId = quizAnswer.id;
  const photo = quizAnswer.photos[Math.floor(Math.random() * quizAnswer.photos.length)];
  const wrongAnswers = shuffle(quizBirds.filter((bird) => bird.id !== quizAnswer.id)).slice(0, 3);
  const proposals = shuffle([quizAnswer, ...wrongAnswers]);

  document.querySelector('#quizImage').src = photo;
  document.querySelector('#quizImage').alt = 'Un oiseau à reconnaître';
  document.querySelector('#quizProgress').textContent = quizCount ? `${quizScore} bonne${quizScore > 1 ? 's' : ''} réponse${quizScore > 1 ? 's' : ''} sur ${quizCount}` : 'Première question';
  document.querySelector('#quizFeedback').textContent = '';
  document.querySelector('#nextQuestion').hidden = true;
  document.querySelector('#quizOptions').innerHTML = proposals.map((bird) => `<button type="button" data-quiz-id="${bird.id}">${bird.name}</button>`).join('');
  document.querySelectorAll('[data-quiz-id]').forEach((button) => button.addEventListener('click', () => checkQuizAnswer(button)));
}

function checkQuizAnswer(selectedButton) {
  if (!quizAnswer || selectedButton.disabled) return;
  const isCorrect = selectedButton.dataset.quizId === quizAnswer.id;
  quizCount += 1;
  if (isCorrect) quizScore += 1;

  document.querySelectorAll('[data-quiz-id]').forEach((button) => {
    button.disabled = true;
    if (button.dataset.quizId === quizAnswer.id) button.classList.add('is-correct');
  });
  if (!isCorrect) selectedButton.classList.add('is-wrong');
  document.querySelector('#quizImage').alt = quizAnswer.name;
  document.querySelector('#quizFeedback').textContent = isCorrect ? `Bravo ! C’est bien ${quizAnswer.name}.` : `Presque ! C’était ${quizAnswer.name}.`;
  document.querySelector('#quizProgress').textContent = `${quizScore} bonne${quizScore > 1 ? 's' : ''} réponse${quizScore > 1 ? 's' : ''} sur ${quizCount}`;
  document.querySelector('#nextQuestion').hidden = false;
  document.querySelector('#nextQuestion').focus();
}

function initQuiz(birds) {
  quizBirds = birds.filter((bird) => bird.photos.length);
  document.querySelector('#nextQuestion').addEventListener('click', newQuizQuestion);
  newQuizQuestion();
}

function stopAudio() {
  if (activeAudio) { activeAudio.pause(); activeAudio.currentTime = 0; }
  if (activeSoundButton) { activeSoundButton.classList.remove('is-playing'); activeSoundButton.setAttribute('aria-pressed', 'false'); }
  activeAudio = null;
  activeSoundButton = null;
}

function playSound(button) {
  if (button === activeSoundButton && activeAudio && !activeAudio.paused) { stopAudio(); return; }
  stopAudio();
  const audio = new Audio(button.dataset.audio);
  activeAudio = audio;
  activeSoundButton = button;
  button.classList.add('is-playing');
  button.setAttribute('aria-pressed', 'true');
  audio.addEventListener('ended', stopAudio, { once: true });
  audio.addEventListener('error', () => { stopAudio(); button.title = 'Le chant n’est pas disponible'; });
  audio.play().catch(stopAudio);
}

function openGallery(items, title, start = 0) {
  gallery = items.map((item) => typeof item === 'string' ? { src: item, caption: title } : item);
  galleryIndex = start;
  updateLightbox();
  lightbox.showModal();
}

function updateLightbox() {
  const item = gallery[galleryIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.caption;
  lightboxCaption.textContent = `${item.caption} · ${galleryIndex + 1} / ${gallery.length}`;
  document.querySelector('.previous-button').hidden = gallery.length < 2;
  document.querySelector('.next-button').hidden = gallery.length < 2;
}

function stepGallery(direction) {
  galleryIndex = (galleryIndex + direction + gallery.length) % gallery.length;
  updateLightbox();
}

async function init() {
  try {
    const response = await fetch('data/oiseaux.json');
    if (!response.ok) throw new Error('Impossible de lire les données.');
    const data = await response.json();
    const [mainSection, ...otherSections] = data.sections;
    app.innerHTML = sectionTemplate(mainSection) + storyTemplate(data.story) + otherSections.map(sectionTemplate).join('') + quizTemplate();
    initQuiz(data.sections.flatMap((section) => section.birds));

    document.querySelectorAll('.photo-button').forEach((button) => button.addEventListener('click', () => openGallery(JSON.parse(button.dataset.gallery), button.dataset.title)));
    document.querySelectorAll('[data-story-index]').forEach((button) => button.addEventListener('click', () => openGallery(data.story.photos, 'Pic noir', Number(button.dataset.storyIndex))));
    document.querySelectorAll('.sound-button').forEach((button) => button.addEventListener('click', () => playSound(button)));

    const photoCredits = data.credits.photos.map((credit) => `<li><a href="${credit.url}" target="_blank" rel="noreferrer">${credit.label}</a></li>`).join('');
    const audioCredits = data.credits.audio.map((credit) => `<li><a href="${credit.url}" target="_blank" rel="noreferrer">${credit.label}</a></li>`).join('');
    document.querySelector('#creditsContent').innerHTML = `<p><strong>${data.credits.photoAuthor}</strong></p><p>${data.credits.note}</p><div class="credit-group"><h3>Photographies libres ajoutées</h3><ul>${photoCredits}</ul></div><div class="credit-group"><h3>Chants et cris</h3><ul>${audioCredits}</ul></div>`;
  } catch (error) {
    app.innerHTML = `<p class="error"><strong>Petit contretemps :</strong> le portfolio ne peut pas se charger. Recharge la page pour réessayer.</p>`;
  }
}

document.querySelector('.close-button').addEventListener('click', () => lightbox.close());
document.querySelector('.previous-button').addEventListener('click', () => stepGallery(-1));
document.querySelector('.next-button').addEventListener('click', () => stepGallery(1));
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') stepGallery(-1);
  if (event.key === 'ArrowRight') stepGallery(1);
});

const creditsDialog = document.querySelector('#creditsDialog');
document.querySelector('#creditsButton').addEventListener('click', () => creditsDialog.showModal());
document.querySelector('.credits-close').addEventListener('click', () => creditsDialog.close());
creditsDialog.addEventListener('click', (event) => { if (event.target === creditsDialog) creditsDialog.close(); });

init();
