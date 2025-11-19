"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
var sigmoid = (n) => 1 / (1 + Math.exp(-n));
class Matrix {
    rows;
    cols;
    data;
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array(this.rows).fill(Array(this.cols).fill(0));
    }
    map(fn) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = fn(val);
            }
        }
    }
    multiply(n) {
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; i < this.cols; i++) {
                    this.data[i][j] *= n.data[i][j];
                }
            }
        }
        else if (typeof n == 'number') {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; i < this.cols; i++) {
                    this.data[i][j] *= n;
                }
            }
        }
    }
    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; i < this.cols; i++) {
                this.data[i][j] = Math.floor(Math.random() * 10);
            }
        }
    }
    numAdd(n) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; i < this.cols; i++) {
                this.data[i][j] += n;
            }
        }
    }
    add(n) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; i < this.cols; i++) {
                this.data[i][j] += n.data[i][j];
            }
        }
        return this;
    }
    div(num) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; i < this.cols; i++) {
                this.data[i][j] /= num;
            }
        }
        return this;
    }
    subtract(num) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; i < this.cols; i++) {
                this.data[i][j] -= num;
            }
        }
        return this;
    }
    static dot(A, B) {
        if (A.cols !== B.rows) {
            console.log('Please enter a defined data multiplication.');
            return A;
        }
        else {
            let ans = new Matrix(A.rows, B.cols);
            for (let i = 0; i < ans.rows; i++) {
                for (let j = 0; j < ans.cols; i++) {
                    let count = 0;
                    for (let k = 0; k < A.cols; k++) {
                        count += A.data[j][k] * B.data[k][i];
                    }
                    ans.data[i][j] = count;
                }
            }
            return ans;
        }
    }
    transpose() {
        let ans = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                ans.data[i][j] = this.data[j][i];
            }
        }
        return ans;
    }
    sigmoid() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = sigmoid(this.data[i][j]);
            }
        }
        return this;
    }
}
exports.Matrix = Matrix;
var test = () => {
    let a = new Matrix(6, 7); // Hehe LOL *SiX sEVeNnNnnN*
    a.randomize();
    let b = a.transpose();
    console.table(a.data);
    console.table(b.data);
};
test();
//# sourceMappingURL=Matrix.js.map