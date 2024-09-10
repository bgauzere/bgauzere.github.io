---
title: Participation to S+SSPR 2024 in Venice
format: hugo-md
jupyter: python3
math: true
date: 2024-09-10
type: blog
---

# S+SSPR 2024

For this edition of S+SSPR 2024, I had the pleasure to present our work entitled
[A Differentiable Approximation of the Graph Edit Distance](./Evaluation_of_a_Continuous_Approximation_of_GED.pdf). This paper, not
in its camera ready version yet, consists in an adaptation of the well known
Sinkhorn algorithm to replace the Hungarian algorithm to solve the LSAPE problem
related to the approximation of the graph edit distance. The main advantage of
this approach is to be differentiable, which opens a path to compute the graph
edit distance, and edit costs, in an end to end manner. 

All source code is available
[here](https://github.com/juliawal/continuous_ged_approximation) if you want to
play with it and reproduce the experiments.
