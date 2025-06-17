---
title: "🌍💻 Synthèse Perso – Impact écologique du numérique"
date: 2025-04-21
lastmod: 2025-06-02
draft: false
description: "Résumé chiffré, leviers et ressources pour comprendre l’empreinte environnementale du numérique."
tags: ["numérique", "écologie", "ACV", "sobriété"]
toc: true
---

# 🌍💻 Synthèse – Impact écologique du numérique

## 1. Constat global 📊

- Le numérique représentait **4,4 %** de l’empreinte carbone française en 2022 (ADEME/ARCEP, révision 2024).
- Répartition : 50 % terminaux, 46 % centres de données, 4 % réseaux (*ADEME/ARCEP – Évaluation 2024*).
- Règle empirique « 80 / 20 » : le matériel concentre \~80 % de l’impact, le logiciel \~20 % (*ADEME Magazine « Numérique : quel impact environnemental ? », avril 2022 – 65‑90 % des impacts attribués aux terminaux, selon l’indicateur*).
- Les impacts dépassent le CO₂ : pression sur ressources minières, eau douce 💧, biodiversité 🌿, pollutions locales et génération de déchets électroniques 🗑️.

## 2. Analyse par phase du cycle de vie 🔄

| Phase                                      | Impacts dominants                                                                   | Tendances                                         | Points de vigilance                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------- |
| **Extraction & fabrication des terminaux** | Émissions grises, épuisement des métaux critiques, déchets miniers                  | Croissance du parc, miniaturisation énergivore    | Durée de vie courte, obsolescence perçue                |
| **Infrastructures (centres de données)**   | Électricité (11 % de la conso française), eau pour le refroidissement, construction | IA générative ↗ : +GPU, +énergie                  | Externalisation hors frontières rend le suivi difficile |
| **Réseaux**                                | Électricité ⚡, cuivre/fibres, antennes                                              | Efficacité énergétique par octet ↘ mais volumes ↗ | Déploiement 5G et IoT multiplicateurs                   |
| **Usage**                                  | Consommation des appareils & serveurs                                               | Streaming, IA, cloud gaming                       | Effet rebond, qualité vidéo ↗                           |
| **Fin de vie**                             | E-déchets, extraction secondaire                                                    | e‑waste ↑ (53 Mt en 2023)                         | Recyclage incomplet, export hors UE                     |

## 3. Focus thématiques 🎯

### 3.1 Streaming vidéo

- Empreinte moyenne : **≈ 55 g CO₂e / h** de VOD en Europe (*Carbon Trust et al., 2023*).
- Le type de terminal domine le bilan ; passer de HD à SD a un effet marginal.

### 3.2 IA générative & grands modèles

- Servir un prompt ChatGPT : **≈ 4 g CO₂e** (*Zhang X. et al., 2024*).
- Le **serving** dépasse le **training** pour certains modèles.
- Refroidissement par eau : jusqu’à **≈ 4 × 0,5 L** par requête (*Zhang X. et al., 2024*).
- [Impact ChatGPT]({{< ref "impact_chatgpt" >}}  "Impact ChatGPT")

### 3.3 Trafic vs infrastructures

- Réduire le trafic ne baisse pas directement les impacts, mais peut freiner la construction d’infrastructures si la demande se stabilise.

## 4. Leviers d’action collectifs & réglementaires 🛠️

- **Allongement de la durée de vie** : Directive UE 2024/1799 (« Right to Repair »), indices de réparabilité, pièces détachées.
- **Réduction du nombre d’appareils** : sobriété & mutualisation (réemploi, location, partage).
- **Stabilisation des infrastructures** : moratoires locaux sur data centers (ex. Irlande), cloud régionalisé bas‑carbone.
- **Écoconception logicielle & web** : poids des pages, architecture frugale, monitoring.
- **Transparence & reporting** : métriques normalisées, obligation de divulgation des intensités carbone & hydriques.

### 4.1 Écoconception logicielle & web ♻️

L’optimisation logicielle agit principalement sur la phase **Usage** mais présente un **levier indirect majeur** : allonger la durée de vie des terminaux en évitant l’obsolescence logicielle.

| Échelle                          | Ordre de grandeur                         | Gains obtenus                                            |
| -------------------------------- | ----------------------------------------- | -------------------------------------------------------- |
| **Page web « lourde »**          | 2,4 g CO₂e/visite (*WebsiteCarbon, 2023*) | Optimisation → 0,44 g CO₂e/visite (‑82 %)                |
| **Site à 100 k visites/mois**    | 288 kg CO₂e/an                            | Après écoconception ≈ 52 kg CO₂e/an → **‑2,3 t CO₂e/an** |
| **Cas réel (Aalto Univ., 2022)** | 50 % de données en moins                  | Temps de chargement ÷ 2, coûts serveur ÷ 1,6             |
| **Smartphone fabriqué**          | ≈ 55 kg CO₂e (incl. scope 3)              | Repousser le remplacement d’un an évite 55 kg CO₂e       |
| **Laptop fabriqué**              | 300‑600 kg CO₂e                           | Code léger + mises à jour longues = +2‑3 ans de service  |

**Bénéfices clés ✅**

1. Réduction immédiate du trafic et de l’électricité réseau/serveurs ⚡.
2. Allongement du cycle de vie matériel (économie d’impacts « embarqués » > 80 %).
3. Amélioration UX : chargement plus rapide 🚀, accessibilité sur réseaux lents.

**Limites & précautions ⚠️**

- **Effet rebond** : pages plus légères peuvent encourager davantage de navigation.
- **Outils d’estimation** : Ecograder, WebsiteCarbon → ordres de grandeur, pas ACV complètes.
- **Pas de prise directe sur l’extraction minière** : à combiner avec la réparabilité matérielle.

### 4.2 🌱 Mesure de l'impact des calculs
Le projet Green Algorithms aide à définir des mesures de l'impact carbone des algorithmes en proposant un calculateur. De manière intéressante, ils utilisent une mesure sous forme de "arbres mois" pour quantifier la quantité de CO_2. Associé au groupe de recherche de Loïc Lannelongue (https://www.lannelongue-group.org/). Ils proposent une équation précise de la mesure de l'impact.

## Green Algorithms: Quantifying the Carbon Footprint of Computation
https://www.green-algorithms.org/assets/publications/2021_Green%20Algorithms_AdvScience.pdf 
> In this work, a methodological framework to estimate the
> carbon footprint of any computational task in a standardized and reliable way
> is presented and metrics to contextualize GHG emissions are defined

Section 5 sur le detail en équation du calcul


## 5. Outils & méthodologies 🧰

- **Websitecarbon.com** : estimation page web.
- **Sustainablewebdesign.org** : formule d’estimation applicative.
- **ACV complète d'un service numérique :  Treebal** [🌲](https://gauthierroussilhe.com/book/treebal/)
- **AI Energy Star** (initiative ouverte) : comparatif d’efficacité des modèles.
- 🌱 **Green Algorithm** - outil de calcul de l'empreinte carbone des algorithmes (<https://green-algorithm.org/>).

## 6. Lacunes & pistes de recherche 🔍

1. **Données ouvertes** : peu d’accès aux facteurs d’émission réels des clouds, GPU, LLM.
2. **Eau & métaux critiques** : indicateurs rarement publiés 💧.
3. **Effets rebond** : quantification hétérogène, manque de consensus.
5. **Fin de vie hors UE** : filières d’export peu traçables.
6. **Impacts sociaux** : conditions d’extraction, travail en centres de modération.
7. **Émissions évitées** : méthodologies immatures, risque de greenwashing.
8. **Standardisation des métriques IA** : besoin d’ACV granulaires par token/paramètre.

---

## 7. Références & Ressources 📚

### 7.1 Sources originales

- **Dossier ARCEP – Empreinte environnementale du numérique** : [https://www.arcep.fr/la-regulation/grands-dossiers-thematiques-transverses/lempreinte-environnementale-du-numerique.html](https://www.arcep.fr/la-regulation/grands-dossiers-thematiques-transverses/lempreinte-environnementale-du-numerique.html)
- **Chiffres ADEME (2022, révisé 2024)** : [https://infos.ademe.fr/magazine-avril-2022/faits-et-chiffres/numerique-quel-impact-environnemental/](https://infos.ademe.fr/magazine-avril-2022/faits-et-chiffres/numerique-quel-impact-environnemental/)
- **Actions pour un numérique éco‑responsable** : [https://www.entreprises.gouv.fr/fr/numerique/enjeux/transition-ecologique-numerique](https://www.entreprises.gouv.fr/fr/numerique/enjeux/transition-ecologique-numerique)
- **Analyse de GreenIT de l'impact du numérique** : [https://www.greenit.fr/impacts-environnementaux-du-numerique-en-france/](https://www.greenit.fr/impacts-environnementaux-du-numerique-en-france/)
- **Propositions de GreenIT pour un numérique éco responsable** : [https://www.greenit.fr/2018/03/19/26-actions-concretes-faire-converger-numerique-ecologie/](https://www.greenit.fr/2018/03/19/26-actions-concretes-faire-converger-numerique-ecologie/)
- **Avis du Parti Pirate** : [https://partipirate.org/blog/sobriete\_numerique?words=num%C3%A9rique+climat](https://partipirate.org/blog/sobriete_numerique?words=num%C3%A9rique+climat)
  - Différences entre opinions et faits scientifiques avérés.
  - "Internet avait été déployé, à l'origine, pour permettre à des universités la mutualisation des grands centres informatiques à travers le continent américain, permettant des économies sensibles de matériel."
- **"How Bad Are Bananas? The Carbon Footprint of Everything" par Mike Berners-Lee**.

  Ce livre, bien que centré sur les empreintes carbone de divers produits et services, contient des sections pertinentes concernant l'impact du numérique sur le climat. Il est écrit dans un style accessible et vise à fournir  une perspective factuelle sur la manière dont divers aspects de notre vie  quotidienne contribuent au réchauffement climatique. Bien que le livre ne se concentre pas exclusivement sur le numérique, il offre une approche équilibrée et non partisane pour comprendre l'impact environnemental de nos choix technologiques.

* **Analyse du rapport du GIEC sur le numérique** : [https://www.ictjournal.ch/articles/2022-07-01/que-dit-le-dernier-rapport-du-giec-a-propos-du-numerique](https://www.ictjournal.ch/articles/2022-07-01/que-dit-le-dernier-rapport-du-giec-a-propos-du-numerique)
 Les technologies numériques et les modèles de consommation qu’elles soutiennent y sont présentées comme des outils pour réduire les émissions de CO2, à condition de veiller à neutraliser leurs effets négatifs directs et indirects, de l’énergie aux déchets en passant par les effets rebond.
  - utile pour la numérisation du systeme énergétique, deplacer des bits au lieu  des atomes, support pour l'économie et le partage des ressources
  - danger : consommation (6 à 12% d'électricité ), déchets électroniques, effets  rebond
* **Explications sur l’empreinte environnementale du numérique – Gauthier Roussilhe (2021)** : [https://gauthierroussilhe.com/articles/explications-sur-l-empreinte-environnementale-du-numerique](https://gauthierroussilhe.com/articles/explications-sur-l-empreinte-environnementale-du-numerique)

- **Outil Website Carbon** : [https://www.websitecarbon.com/how-does-it-work/](https://www.websitecarbon.com/how-does-it-work/)
- **Méthodo Sustainable Web Design** : [https://sustainablewebdesign.org/estimating-digital-emissions/](https://sustainablewebdesign.org/estimating-digital-emissions/)
- **ACV Treebal (2023)** : [https://gauthierroussilhe.com/book/treebal/](https://gauthierroussilhe.com/book/treebal/)
- **GREENER principles for environmentally sustainable computational science**, L. Lannelongue, H.-E. G. Aronson, A. Bateman, E. Birney, T. Caplan, M. Juckes, J. McEntyre, A. D. Morris, G. Reilly and M. Inouye, Nat Comput Sci, vol. 3, no. 6, pp. 514–521, Jun. 2023, doi: 10.1038/s43588-023-00461-y. [pdf](https://www.green-algorithms.org/assets/publications/2023_GREENER_NatCompSci.pdf)

### 7.2 Références additionnelles 📖 (2023‑2025)

- **Directive UE 2024/1799 – “Right to Repair”**
- **Carbon Trust et al. – White Paper: The Carbon Impact of Video Streaming (2023)**
- **ADEME/ARCEP – Évaluation 2024 de l’empreinte carbone du numérique en France**
- **Zhang X. et al. – Energy and Water Footprint of Large Language Models (Nature Sustainability, 2024)**
- **Initiative “AI Energy Star” – Indice d’efficacité énergétique des modèles IA (brouillon 2025)**

---

**Disclaimer** La synthèse et le rendu ont été assistés par IA, la collecte et le choix des informations a été fait et est assumé par moi. Si une erreur factuelle est présente ou une ressource pertinente est manquante, merci de me le signaler par mail.
