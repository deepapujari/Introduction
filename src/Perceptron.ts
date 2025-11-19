import {Matrix} from './Matrix.ts';

let datasetLength = 5; // TODO: import dataset
var sigmoid = (n: number): number => 1 / (1 + Math.exp(-n));

let inputs: Matrix = Matrix.fromArray(Array(datasetLength));
inputs.randomize();
class NeuralNetwork {
    activations: Matrix;
    weights: Matrix[];
    biases: Matrix[]; 
    middleLayer: number; 
    outputLayer: number;
    constructor(activations:Matrix, middleLayer: number, outputLayer: number) {
        this.middleLayer = middleLayer;
        this.outputLayer = outputLayer;
        this.activations = activations; 
        this.biases = Array(2);
        this.biases[0] = new Matrix(this.middleLayer, 1)
        this.biases[1] = new Matrix(this.outputLayer, 1)
        for (let i = 0; i< this.biases.length; i++) {
            this.biases[i].randomize();
        }
        this.weights = Array(2)
        this.weights[0] = new Matrix(this.middleLayer,this.activations.rows);
        this.weights[1] = new Matrix(this.outputLayer, this.middleLayer);
        for (let j = 0; j< this.weights.length; j++) {
            this.weights[j].randomize();
        }
    }
    feedforward(){ 
        // MATRIX STUFF INCOMING
        for (let i = 0; i< this.weights.length; i++) {
            this.activations = (Matrix.dot(this.weights[i],this.activations).add(this.biases[i])).map(sigmoid);
        }
        return this.activations;
    }
}

