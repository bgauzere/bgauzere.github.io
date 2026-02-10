---
title: "The “Fifth Property” of Euclidean Distances: Beyond the Metric Axioms"
date: 2026-02-06
draft: false
math: true
tags: ["Graph Edit Distance", "Euclidean Geometry", "Schoenberg Criterion", "Machine Learning", "Kernel Methods"]
description: "Why satisfying the four metric axioms does not guarantee that a distance matrix comes from a Euclidean embedding—and how to test it with the Schoenberg criterion."
---

*This post is heavily adapted from Chapter 5 of the book **Convex Optimization & Euclidean Distance Geometry** by Jon Dattorro.*

## Metrics

If you work with distances, you probably already know the four classical axioms:
1.  **Non-negativity**: $d(x, y) \ge 0$ 
2.  **Identity of Indiscernibles**: $d(x, y) = 0 \iff x = y$ 
3.  **Symmetry**: $d(x, y) = d(y, x)$ 
4.  **Triangle Inequality**: $d(x, z) \le d(x, y) + d(y, z)$ 

But here is the catch: **being a metric is not enough to be an Euclidean distance.**

In many machine learning applications, specifically those relying on kernel
methods like SVMs, we implicitly assume that our data points can be embedded
into a Euclidean space, and then we compute a distance, or a scalar product,
between these points to run a machine learning algorithm. 

However, defining a metric between points is not sufficient to ensure that these points lie in an Euclidean space.

##  Why a "Fifth Property" at all?

The four metric axioms characterize *metrics*. However, *Euclidean* distances satisfy additional geometric consistency constraints: not every abstract metric can be realized as inter-point distances of some point configuration in $\mathbb{R}^d$.

Dattorro’s Euclidean distance geometry viewpoint makes this very concrete: 
* For **three points**, the triangle inequality is essentially the “ultimate” realizability test.
* But for **four or more points**, triangle inequalities are no longer sufficient to certify a Euclidean realization. 

This motivates a **fifth Euclidean metric requirement**, formulated as a **relative-angle inequality** that must hold at each vertex of any tetrahedron defined by four points. Intuitively, the faces of the tetrahedron must fit together in a globally consistent way.

In Dattorro’s notation, for any four distinct points $\{x_i,x_j,x_\ell,x_k\}$, the angles at vertex $x_k$ must satisfy constraints of the form:
$$
|\theta_{ik\ell}-\theta_{\ell kj}|\le \theta_{ikj}\le \theta_{ik\ell}+\theta_{\ell kj}
$$
If this condition is violated, the distances cannot coexist in a flat Euclidean space, even if they satisfy the triangle inequality.


## 2. The Schoenberg Criterion: The Practical "Fifth Property"

Checking complex angle inequalities for thousands of graphs is impractical. Fortunately, there is a matrix-algebra equivalent known as the **Schoenberg Criterion**.

### The Matrix Formulation

First, let’s formalize our distances. Given $N$ points $\{x_1, \dots, x_N\}$, we define the **squared** distance matrix $D \in \mathbb{R}^{N \times N}$ by:

$$
D_{ij} = \||x_i - x_j\||^2
$$

Such a matrix is called a **Euclidean Distance Matrix (EDM)**.

Isaac Schoenberg (1935) proved that a matrix $D$ represents a valid EDM (i.e., the points actually exist in $\mathbb{R}^d$) **if and only if** the transformed matrix $B$:

$$
B = -\frac{1}{2} J D J, \quad \text{where } J = I - \frac{1}{N}\mathbf{1}\mathbf{1}^T
$$

is **positive semidefinite** (PSD). Here, $J$ is simply the geometric centering matrix.

### Python Implementation

We can easily implement this check in Python using NumPy:

```python
import numpy as np

def is_euclidean_matrix(D_squared):
    """
    Checks if a squared distance matrix represents a valid Euclidean embedding
    using the Schoenberg criterion.
    """
    N = D_squared.shape[0]
    # Geometric centering matrix
    J = np.eye(N) - np.ones((N, N)) / N
    
    # Compute the Gram matrix
    B = -0.5 * J @ D_squared @ J
    
    # Check eigenvalues
    eigenvalues = np.linalg.eigvalsh(B)
    
    # Allow for minor floating point errors (e.g., -1e-10 is considered 0)
    is_psd = np.all(eigenvalues > -1e-9)
    
    return is_psd, eigenvalues

```

### The Intuition: It’s just a Kernel Matrix

Why does this obscure formula work? If you are familiar with kernel methods, this transformation should ring a bell.

We know that Euclidean distances and inner products are linked by the cosine law (or polarization identity):

$$
\||x_i - x_j\||^2 = \||x_i\||^2 + \||x_j\||^2 - 2\langle x_i, x_j \rangle
$$

The operation $B = -\frac{1}{2} J D J$ essentially inverts this relationship for the entire dataset centered at the origin. The resulting matrix $B$ is exactly the **Gram matrix** of the points (the matrix of inner products where $B_{ij} = \langle x_i, x_j \rangle$).

This gives us the most intuitive interpretation of the "fifth property":

> **A distance matrix is Euclidean if and only if it can be converted into a valid Kernel matrix.**

### What happens if it fails?

If the condition fails (i.e., $B$ has **negative eigenvalues**), the "fifth property" is violated.

Geometrically, this implies that the implicit "vectors" $x_i$ would require a non-Euclidean geometry to satisfy the observed distances. In the context of Machine Learning, it means your "kernel" is not valid, potentially breaking algorithms like SVMs that rely on the PSD property. The kernel deduced from a non Euclidean Distance Matrix is thus not valid. 




## 3. Illustration: The "Impossible" Tetrahedron


Let's verify this behavior with a concrete example.

### Step 1: Three points (Always Euclidean)

Let's define 3 points with distances corresponding to a right-angled triangle: sides 1, 2, and hypotenuse.

```python
D3 = np.array([
    [0, 1, 5],
    [1, 0, 4],
    [5, 4, 0]
])
valid, eigs = is_euclidean_matrix(D3)
print(f"Triangle valid? {valid}") 
# Output: Triangle valid? True

```

For three points, triangle inequality is sufficient. So this triangle, as Pythagore said, is valid. 


### Step 2: Adding the 4th point (The Metric Trap)

We add a 4th point. We fix most distances, but leave  $d_{14}$ variable. 
We have 4 points with fixed distances:

* $d_{12}=1, d_{24}=1, d_{43}=1$
* $d_{13}=\sqrt{5}$

{{< figure src="polyhedron.svg" title="The 'Impossible' Tetrahedron" caption="Four-point example showing that metric axioms do not guarantee Euclidean embedding. While the interval $[\sqrt{5}-1, 2]$ is valid for a metric, only specific values form a valid Euclidean shape." >}}


We want to find the missing distance $d_{14}$.

### The Metric Interval vs. The Euclidean Point

The triangle inequality constrains $d_{14}$ to lie in the interval $[\sqrt{5}-1, 2]$. Any value in this range makes $d$ a valid metric.

However, Euclidean geometry is rigid. The Schoenberg criterion will show that
only **one** specific value in this interval allows for a Euclidean embedding.

Let's pick a value inside this interval, say **1.8**. This creates a valid metric space.
Squared, this gives $1.8^2 = 3.24$.

Let's check if this is Euclidean using our Python function:

```python
# Distances for the 4-point example
# We choose d(1,4) = 1.8, which satisfies triangle inequality
d14_squared = 1.8**2 

D4 = np.array([
    [0, 1, 5, d14_squared],
    [1, 0, 4, 1],
    [5, 4, 0, 1],
    [d14_squared, 1, 1, 0]
])

valid, eigs = is_euclidean_matrix(D4)

print(f"Tetrahedron valid? {valid}")
print(f"Eigenvalues: {np.round(eigs, 2)}")

```

**Output:**

```text
Tetrahedron valid? False
Eigenvalues: [-0.15 -0.    0.8   3.16]

```

The negative eigenvalue ($\simeq -0.15$) proves that this configuration is **impossible** in Euclidean space, despite satisfying all metric axioms.

## 4. Visualizing the "Fifth Property"

To visualize exactly how restrictive the Euclidean condition is compared to the metric condition, we can plot the smallest eigenvalue of $B$  as a function of the distance $d_{14}$.

```python
import matplotlib.pyplot as plt

d_vals = np.linspace(1.2, 2.1, 100)
min_eigs = []

for d in d_vals:
    # Reconstruct matrix for each d
    D_temp = np.array([
        [0, 1, 5, d**2],
        [1, 0, 4, 1],
        [5, 4, 0, 1],
        [d**2, 1, 1, 0]
    ])
    _, eigs = is_euclidean_matrix(D_temp)
    min_eigs.append(np.min(eigs))

# Plotting
plt.figure(figsize=(10, 5))
plt.plot(d_vals, min_eigs, label='Smallest Eigenvalue of Gram Matrix', linewidth=2)
plt.axhline(0, color='black', linestyle='--')
plt.axvline(np.sqrt(2), color='red', linestyle='--', label='Euclidean Solution ($\sqrt{2}$)')

# Highlight the valid metric interval (Green zone)
plt.axvspan(np.sqrt(5)-1, 2, color='green', alpha=0.1, label='Valid Metric Interval')

plt.title('Metric Validity vs. Euclidean Validity')
plt.xlabel('Distance $d_{14}$')
plt.legend()
plt.grid(True, alpha=0.3)
plt.savefig("fifth_property.svg")

```

{{< figure src="fifth_property.svg" title="The gap between Metric and Euclidean" caption="The green zone shows where the triangle inequality holds. However, the matrix is only Euclidean where the curve is non-negative. This happens at exactly one point: $d_{14} = \sqrt{2}$." >}}

## An so what ? 

Not all distances imply that a corresponding embedding in Euclidean space exists. This has consequences on the way you define kernels from your distances. If your distance matrix is not an EDM, your kernel will not be positive semidefinite (PSD).

Considering graphs, the Graph Edit Distance (GED) generally fails to satisfy these additional Euclidean properties. Consequently, the pairwise GED matrix is not guaranteed to correspond to squared Euclidean distances. As a consequence, kernels derived from GED values should be regularized, which induces bias in the kernel matrix.

*Note: Methods using the GED for empirical maps are not directly affected by this point, as they treat distances as features rather than inner products.*

**Takeaway**: GED should be interpreted as a generic dissimilarity measure. If you feed GED into a kernel machine (SVM, Gaussian Process), be aware that your kernel matrix might not be PSD. You may need to apply corrections—such as spectrum clipping (setting negative eigenvalues to zero)—to enforce the "fifth property" artificially.

---

[Download the full Python script](5thproperty.py)

---

## References

* **Dattorro, J.** (2011). *Convex Optimization & Euclidean Distance Geometry*. Meboo Publishing. (Chapter 5: Euclidean Distance Matrix).
* **Riesen, K., & Bunke, H.** (2010). *Graph Classification and Clustering Based on Vector Space Embedding*. World Scientific.
* **Schölkopf, B., & Smola, A. J.** (2002). *Learning with Kernels: Support Vector Machines, Regularization, Optimization, and Beyond*. MIT Press.

---

*Disclaimer: The synthesis and drafting of this post were assisted by AI, while the information collection and curation were performed and are assumed by me. If a factual error is present or a relevant resource is missing, please notify me by email.*
