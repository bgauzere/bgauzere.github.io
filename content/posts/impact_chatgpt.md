---
title: "Impact Énergétique de ChatGPT"
date: 2025-06-17
draft: false
description: "Analyse de l'impact de ChatGPT sur la consommation énergétique."
tags: ["numérique", "écologie", "ChatGPT", ""]
toc: true
---


## 1. Énergie et CO₂ par requête

| Scénario                             | Modèle / Contexte                             | Énergie (Wh) | CO₂ (g)\*  | Ratio vs Google |   |
| ------------------------------------ | --------------------------------------------- | ------------ | ---------- | --------------- | - |
| **Google Search** (chiffre officiel) | Datacenters Google (2009–encore valable)      | **0,28 Wh**  | **0,11 g** | 1×              |   |
| **ChatGPT basse**                    | GPT-4o + GPU H100, prompt court (2025)        | **0,3 Wh**   | **0,12 g** | 1 – 1,1×        |   |
| **ChatGPT médiane**                  | GPT-4 normal, « requête moyenne » (EPRI 2024) | **2,9 Wh**   | **1,16 g** | \~10×           |   |
| **ChatGPT haute**                    | Hypothèses grand-public (2024)                | 4 – 5 Wh     | 1,6 – 2 g  | 14 – 18×        |   |
\*Conversion avec une intensité carbone mondiale moyenne de 0,4 kg CO₂/kWh.

Autre source : 
![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F22f72acd-bf02-4b85-92bc-262902012108_759x447.png)


* *Parité* possible seulement avec le **plus petit modèle** (GPT-4o) exécuté sur **matériel de pointe** et avec un **prompt bref**.
* Dans l’usage courant (GPT-4 complet), **ChatGPT émet ≈ 10 fois plus de CO₂** qu’une recherche Google.

## Conso globale de chatGPT 
 
[9] Hannah Ritchie sur Sustainability by numbers   :  https://www.sustainabilitybynumbers.com/p/ai-energy-demand
 
* Pas d'augmentation substantielle de la demande
> First, the International Energy Agency (IEA) recently published its landmark World Energy Outlook 2024 report. It suggests that energy demand for data centres and AI will still be pretty small for the next five years at least. 

### Estimation de la conso de l'IA via les ventes de NVIDIA
**Ref** : Alex de Vries, The growing energy footprint of artificial intelligence, Joule, Volume 7, Issue 10, 2023, Pages 2191-2194, ISSN 2542-4351, https://doi.org/10.1016/j.joule.2023.09.004. (https://www.sciencedirect.com/science/article/pii/S2542435123003653)

* Estimation : max 10 TWh sur les 460 TWh au total du numérique
> De Vries estimated how much energy would be used if all of the servers delivered in 2023 were running at full capacity. It came to around 5 to 10 TWh; a tiny fraction of the 460 TWh that is used for all data centres, transmission networks and cryptocurrency.

* Si google passait en full LLM, sa part de conso dans le numérique passerait de 4% a 6,3 %
> De Vries estimated that if every Google search became an LLM search, the company’s annual electricity demand would increase from 18 to 29 TWh. Not insignificant, but not huge compared to the total energy demand of data centres globally

* Disparité géographique de la demande. Possibilité de concentrer et de choisir la localisation (et donc l'impact carbone) des datacenters

## References sur l'impact de chatGPT au regard de la conso perso

*  https://www.sustainabilitybynumbers.com/p/carbon-footprint-chatgpt
*  https://andymasley.substack.com/p/individual-ai-use-is-not-bad-for
*  https://andymasley.substack.com/p/a-cheat-sheet-for-conversations-about

Une requête ChatGPT est en estimation haute 3 Wh. C'est trés trés peu au regard de tout le reste.

---

## 6. Références résumées

| #  | Source (lien)                                                         | Contenu clé                                                                                                             | Lien                                                     |
|----|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| 1  | **Google Blog 2009** — *Googles ökologischer Fußabdruck*              | Chiffre officiel : 1 kJ (0,28 Wh) et 0,2 g CO₂ par recherche.                                                           |                                                          |
| 2  | **Epoch AI 2025** — *How much energy does ChatGPT use?*               | Estime 0,3 Wh pour GPT-4o grâce au matériel H100 et à la quantisation.                                                  |                                                          |
| 3  | **Tom’s Guide 2024** — *ChatGPT energy emergency*                     | Basé sur un rapport EPRI : 0,3 Wh Google vs 2,9 Wh ChatGPT ; met aussi en avant la consommation d’eau.                  |                                                          |
| 4  | **Tom’s Hardware 2024** — *AI GPU power*                              | Un GPU datacenter = 3,7 MWh/an ; 3,85 M GPU IA vendus en 2023 → 14 TWh/an.                                              |                                                          |
| 5  | **de Vries 2023** — *The growing energy footprint of AI* (Joule)      | Projection : 85–134 TWh/an d’électricité IA d’ici 2027.                                                                 |                                                          |
| 6  | **Jiang et al. 2024** — *Engineering*                                 | Analyse cycle-de-vie (8 phases) des chatbots ; souligne l’impact de la fabrication des GPU.                             |                                                          |
| 7  | **MIT News 2025** — *Explained: generative AI’s environmental impact* | Article grand public détaillant pourquoi les modèles génératifs sont énergivores et les pistes de réduction.            |                                                          |
| 8  | **Hugging Face Blog 2022** — *CO₂ Emissions and the Hub*              | Guide pratique pour mesurer et réduire l’empreinte des modèles via quantisation, reporting et sélection de datacenters. |                                                          |
| 9  | **Blog d'Hannah Ritchie** — *Sustainability by Numbers*               | Blog intéressant qui touche au numérique en général                                                                     | https://www.sustainabilitybynumbers.com/                 |
| 10 | **Blog d'Andy Masley** — *AI & the Environment*                       | A series on why you shouldn't worry about the environmental impact of your individual chatbot or image generator use    | https://andymasley.substack.com/s/ai-and-the-environment |
|    |                                                                       |                                                                                                                         |                                                          |
	

---

> **Synthèse :** L’empreinte d’une requête ChatGPT varie d’« équivalente » à **≈ ×10** celle d’une recherche Google selon le modèle, le matériel et le datacenter. À grande échelle, l’accumulation de GPU IA et la demande d’inférence n'ont pas d'impact majeur sur la consommation globale. Également, au niveau personnel, l'impact d'une utilisation même massive  de ChatGPT n'a pas d'impact significatif.
