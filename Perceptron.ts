import * as math from 'mathjs';
import { Matrix, Vector } from './Matrix';
var sigmoid = (n: number): number => 1 / (1 + Math.exp(-n));
var multiSigmoid = (numbers: number[]): number[] => numbers.map(sigmoid);

let datasetLength = 5; // TODO: import dataset


let inputs: number[] = new Array(datasetLength).fill(0).map(() => Math.random());
class NeuralNetwork {
    activations: Vector;
    weights: Matrix[];
    biases: Vector[]; 
    layer: number[];
    constructor(activations:Vector, layer: number[]) {
        this.layer = layer;
        this.activations = activations; 
        this.biases = Array(3)
        this.weights = Array(3)
    }
    feedforward(weights: Matrix[], activations: Vector[], biases : Vector[]){
        
    }
}

