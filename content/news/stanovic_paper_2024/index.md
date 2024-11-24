---
title: New Paper on Graph Pooling !
format: hugo-md
jupyter: python3
math: true
date: 2024-11-24
type: blog
---

# Graph Neural Networks with Maximal Independent Set-Based Pooling: Mitigating Over-Smoothing and Over-Squashing

I am excited to announce our latest work entitled
[Graph Neural Networks with Maximal Independent Set-Based Pooling: Mitigating Over-Smoothing and Over-Squashing](https://www.sciencedirect.com/science/article/abs/pii/S0167865524003106). 

This paper introduces a novel pooling method for graph neural networks (GNNs) based on maximal independent sets (MIS). By leveraging MIS-based pooling, we address two fundamental issues in GNNs: **over-smoothing** (where node features become indistinguishable across layers) and **over-squashing** (where information from distant nodes becomes bottlenecked). Our approach offers a principled way to enhance the representational capacity of GNNs while improving scalability and robustness.

Key highlights of our approach include:
- The use of maximal independent sets to efficiently coarsen graphs.
- Improved performance on benchmarks prone to over-smoothing and over-squashing issues.
- A framework that integrates seamlessly with existing GNN architectures.

If you are interested in the details, feel free to download the paper for free
until 10th of january  
[here](https://authors.elsevier.com/c/1k8I8cAmyxQ4Y).

All the source code for this project is open-source and available 
[here](https://scm.univ-tours.fr/projetspublics/lifat/codegnn) for those who want to explore, reproduce experiments, or adapt the method to their own datasets.
