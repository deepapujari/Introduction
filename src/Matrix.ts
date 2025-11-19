class Matrix {
    rows: number;
    cols: number;
    data: number[][];
    constructor(rows:number, cols:number) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array.from({ length: this.rows }, () => new Array(this.cols).fill(0));
    }
    map (fn: Function) {
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = fn(val);
            }
        }
        return this;
    }
    multiply(n: any){
        if (n instanceof Matrix) {
            for (let i = 0; i< this.rows; i++) {
                for (let j = 0; j< this.cols; j++) {
                    this.data[i][j] *= n.data[i][j];
                }
            }
        } else if (typeof n == 'number') {    
            for (let i = 0; i< this.rows; i++) {
                for (let j = 0; j< this.cols; j++) {
                    this.data[i][j] *= n;
                }
            }
        }
    }
    static fromArray (arr: number[]) {
        let m = new Matrix(arr.length,1);
        for (let i = 0; i <arr.length; i++) {
            m.data[i][0] = arr[i];
        }
        return m;
    }
    randomize() {
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; j< this.cols; j++) {
                this.data[i][j] = Math.random()*2 - 1;
            }
        }
    }
    numAdd(n: number) {
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; j< this.cols; j++) {
               this.data[i][j] += n;
            }
        }
    }
    add(n: Matrix) {
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; j< this.cols; j++) {
               this.data[i][j] += n.data[i][j];
            }
        }
        return this;
    }
    div(num: number){
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; j< this.cols; j++) {
                this.data[i][j] /= num;
            }
        }
        return this;
    }
    subtract(num: number){
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; j< this.cols; j++) {
                this.data[i][j] -= num;
            }
        }
        return this;
    }
    static dot(A: Matrix, B: Matrix): Matrix {
        if (A.cols !== B.rows) {
            console.log('Please enter a defined data multiplication.')
            return A;
        } else {
            let ans = new Matrix(A.rows, B.cols);
            for (let i = 0; i< ans.rows; i++) {
                for (let j = 0; j< ans.cols; j++) {
                    let count: number = 0;
                    for (let k = 0; k < A.cols; k++) {
                        count+= A.data[i][k]*B.data[k][j];
                    }
                    ans.data[i][j] = count;
                }
            }
            return ans;
        }
    }
    transpose() {
        let ans = new Matrix(this.cols, this.rows);

        for(let i = 0; i< this.rows; i++) {
            for (let j = 0; j< this.cols; j++) {
                ans.data[j][i] = this.data[i][j];
            }
        }
        return ans;
    }
}
var test = () => {
    let a = new Matrix(6,7); // Hehe LOL *SiX sEVeNnNnnN*
    a.randomize();
    let b = a.transpose();
    console.table(a.data);
    console.table(b.data);
}
test();
export {Matrix};