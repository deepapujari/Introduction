import * as math from 'mathjs';

var sigmoid = (n: number): number => 1 / (1 + Math.exp(-n));
var multiSigmoid = (numbers: number[]): number[] => numbers.map(sigmoid);

let datasetLength = 5; // TODO: import dataset


let inputs: number[] = new Array(datasetLength).fill(0).map(() => Math.random());
class NeuralNetwork {
    activations: math.Matrix;
    weights: math.Matrix[];
    biases: number[][]; 
    layer: number[];
    constructor(activations:math.Matrix, layer: number[]) {
        this.layer = layer;
        this.activations = activations; 
        this.biases = 
        this.weights = 
    }
    feedforward(weights: math.Matrix[], activations: number[], biases : number[][]){
        
    }
}

