import * as THREE from 'three';

/**
 * Configuration for the visualization
 * @typedef {Object} Config
 */

/**
 * Dimensions of the neural network visualization
 * @type {Object}
 */
export const dimensions = {
    layer: 12,    // Number of transformer layers
    neuron: 16,   // Number of neurons per layer
    token: 6      // Number of tokens in the sequence
};

/**
 * Size of each cube in the visualization
 * @type {number}
 */
export const cubeSize = 0.64;

/**
 * Spacing between elements in the visualization
 * @type {Object}
 */
export const spacing = {
    layer: 2,     // Vertical spacing between layers
    neuron: 1,    // Horizontal spacing between neurons
    token: 1.2    // Depth spacing between tokens
};

/**
 * Offset to center the visualization
 * @type {THREE.Vector3}
 */
export const cubeOffset = new THREE.Vector3(
	dimensions.neuron * -0.5, 
	dimensions.layer * -0.4, 
	dimensions.token * -0.5
);

/**
 * Labels for the visualization axes
 * @type {Object}
 */
export const labels = {
    layer: Array.from({ length: dimensions.layer }, (_, index) => `L${index}`),
    neuron: Array.from({ length: dimensions.neuron }, (_, index) => `N${index}`),
    token: ["This", "movie", "   is", " the", " best", "   !"]    
};

/**
 * Offset for sprite labels
 * @type {Object}
 */
export const spriteOffset = {
    layer: new THREE.Vector3(-1.5*spacing.neuron, 0.25, -1.5*spacing.token),
    neuron: new THREE.Vector3(0, -0.5*spacing.layer, 0.5*spacing.token),
    token: new THREE.Vector3(-3*spacing.neuron, -0.5*spacing.layer, -0.25)
};

/**
 * Animation configuration
 * @type {Object}
 */
export const animation = {
    driftSpeed: 0.02,
    rotationSpeed: 0.5,
    bloomStrength: {
        min: 0.56,
        max: 0.64,
        speed: 0.01
    }
};