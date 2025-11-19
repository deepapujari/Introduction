"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("./Matrix");
let datasetLength = 5; // TODO: import dataset
var sigmoid = (n) => 1 / (1 + Math.exp(-n));
let inputs = Matrix_1.Matrix.fromArray(Array(datasetLength));
inputs.randomize();
class NeuralNetwork {
    activations;
    weights;
    biases;
    middleLayer;
    outputLayer;
    constructor(activations, middleLayer, outputLayer) {
        this.middleLayer = middleLayer;
        this.outputLayer = outputLayer;
        this.activations = activations;
        this.biases = Array(2);
        this.biases[0] = new Matrix_1.Matrix(this.middleLayer, 1);
        this.biases[1] = new Matrix_1.Matrix(this.outputLayer, 1);
        for (let i = 0; i < this.biases.length; i++) {
            this.biases[i].randomize();
        }
        this.weights = Array(2);
        this.weights[0] = new Matrix_1.Matrix(this.middleLayer, this.activations.rows);
        this.weights[1] = new Matrix_1.Matrix(this.outputLayer, this.middleLayer);
        for (let j = 0; j < this.weights.length; j++) {
            this.weights[j].randomize();
        }
    }
    feedforward() {
        // MATRIX STUFF INCOMING
        for (let i = 0; i < this.weights.length; i++) {
            this.activations = (Matrix_1.Matrix.dot(this.weights[i], this.activations).add(this.biases[i])).map(sigmoid);
        }
        return this.activations;
    }
}
//# sourceMappingURL=Perceptron.js.map