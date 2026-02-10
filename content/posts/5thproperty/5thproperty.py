import numpy as np
import matplotlib.pyplot as plt


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


if __name__ == "__main__":
    D3 = np.array([
        [0, 1, 5],
        [1, 0, 4],
        [5, 4, 0]
    ])
    valid, eigs = is_euclidean_matrix(D3)
    print(f"Triangle valid? {valid}") 

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


