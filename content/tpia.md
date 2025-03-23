# 🧠 TP - Découverte de l’Intelligence Artificielle : entraînez un modèle pour reconnaître des images

Bienvenue dans ce TP où tu vas découvrir comment fonctionne **l’apprentissage automatique (machine learning)** en créant **un modèle qui reconnaît des images**, sans avoir besoin d’écrire de code au départ !

Nous allons :
- créer un modèle pour reconnaître **des chiens et des chats**,
- **le tester automatiquement en Python** avec Google Colab,
- et même essayer de créer **ton propre modèle avec d’autres images** !

---

## 🔍 Partie 1 – Créer un premier modèle avec Teachable Machine

👉 Lien : [Teachable Machine - Image Project](https://teachablemachine.withgoogle.com/train/image)

### 📌 Qu’est-ce qu’un modèle ?
Un **modèle d’intelligence artificielle** est un programme qui apprend à reconnaître des motifs dans des données (ici des images). Pour qu’il apprenne, il faut lui montrer **beaucoup d’exemples**.

### 1️⃣ Créer un projet
- Clique sur **"Get Started"**, puis **"Image Project"**, et **"Standard image model"**.
- Tu vois maintenant deux classes par défaut : **"Class 1"** et **"Class 2"**.

### 2️⃣ Importer des images
- Renomme les classes : `Chiens` et `Chats`.
- Clique sur `Upload` pour ajouter des **images de chiens** dans la classe "Chiens", puis fais pareil pour "Chats".
- Tu pourras trouver des images de chiens et de chats [ici](https://filesender.normandie-univ.fr/?s=download&token=1cd783dd-4a08-468d-901f-4173d1c4aea3) 

> 💡 Astuce : Essayez d’avoir **au moins 20 images par classe**. Tu peux en télécharger sur Internet (ou utiliser celles fournies par ton enseignant).

### ⚠️ Attention : ne mets pas **toutes les images** !  
Garde **quelques images de côté pour les tests**, sinon tu n’auras rien à tester ensuite.

### 3️⃣ Entraîner le modèle
- Clique sur **"Train Model"**.
- Teachable Machine va apprendre à reconnaître les différences entre les chiens et les chats.

### 4️⃣ Tester manuellement
- Clique sur **"Upload"** dans la section `Test your model` et essaie avec des images de test : ton modèle est-il bon ?

---

## 💾 Partie 2 – Récupérer le modèle pour l’utiliser dans un vrai programme

### 1️⃣ Exporter le modèle
- Clique sur **"Export Model"**
- Sélectionne **"Tensorflow"**, puis **"Keras"**, et clique sur **"Download my model"**

Tu obtiens un fichier `.zip` contenant le modèle entraîné (fichier h5) et un fichier labels.txt

---

## 🐍 Partie 3 – Tester ton modèle automatiquement avec Python (Google Colab)

👉 Lien du notebook de base : [Notebook Google Colab](https://colab.research.google.com/drive/1HQ_VIzOhnO7B6Z0dxh88CORpihTHe_2B?usp=sharing)

### 📥 Préparation
1. **Ajoute les fichiers dans ton Colab** :
   - Téléverse les fichiers .h5 et labels.txt
   - Ajoute aussi **quelques images de test**.

> Si tu n'as pas de compte Google, je t'aiderai à configurer python. Il faut installer tensorflow et pillow

### 🔎 Le code Python
Ce notebook contient déjà du code pour :
- **charger le modèle Tensorflow**,
- **tester automatiquement une image**,

### ➕ Améliore le test :
- Ajoute plusieurs images de test.
- Utilise la fonction `prediction_image` pour chaque image à tester
- Calcule le pourcentage de bonne classification.
- Essaie avec **plus ou moins d’images pour l’apprentissage**, puis refais les tests.

> ✨ Tu découvres ici un des principes de base : **plus le modèle a d’exemples pour apprendre, meilleur il devient !**

---

## 🚀 Partie 4 – Crée ton propre projet !

Maintenant que tu as compris les étapes :
1. Choisis **un autre sujet** (par exemple : pommes 🍎 vs bananes 🍌, ou baskets 👟 vs sandales 🩴).
2. Répète les étapes :
   - Trouve des données étiquetées (tu peux les créer toi même)
   - Crée un nouveau projet sur Teachable Machine.
   - Entraîne un nouveau modèle.
   - Télécharge-le.
   - Teste-le automatiquement dans Colab.
3. **Compare les performances** :
   - Est-ce plus difficile ou plus facile à distinguer ?
   - Est-ce que ton modèle fonctionne bien ?
   - Est-ce que plus d’images améliorent les résultats ?

---

## 📚 À retenir
- Un **modèle de machine learning apprend à partir d’exemples**.
- Il est important de **tester avec des images qu’il ne connaît pas**.
- On peut **mesurer la performance** d’un modèle (ex : taux de réussite).
- Même sans coder, on peut **créer un vrai modèle d’IA** !

---

## 💡 Pour aller plus loin
- Essaie des images plus complexes.
- Compare différents modèles.
- Essaie de **tromper ton modèle** avec des images difficiles !

---

Amuse-toi bien à entraîner des IA 🐶🐱🤖 !
