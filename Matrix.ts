class Matrix {
    rows: number;
    cols: number;
    matrix: number[][];
    constructor(rows:number, cols:number) {
        this.rows = rows
        this.cols = cols
        this.matrix = [];
        for (let i = 0; i< this.rows; i++) {
            this.matrix[i] = [];
            for (let j =0; j<this.cols; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }
    scale(num: number){
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; i< this.cols; i++) {
                this.matrix[i][j] *= num;
            }
        }
    }
    add(num: number){
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; i< this.cols; i++) {
                this.matrix[i][j] += num;
            }
        }
    }
    div(num: number){
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; i< this.cols; i++) {
                this.matrix[i][j] /= num;
            }
        }
    }
    subtract(num: number){
        for (let i = 0; i< this.rows; i++) {
            for (let j = 0; i< this.cols; i++) {
                this.matrix[i][j] -= num;
            }
        }
    }
    dot(B: Matrix) {
        if (this.cols !== B.rows) {
            console.log('Please enter a defined matrix multiplication.')
        } else {
            let ans = Array(this.rows);
            ans.fill(Array(B.cols));
            for (let i = 0; i< ans.length; i++) {
                for (let j = 0; j< ans[i].length; i++) {
                    ans[i][j] 
                }
            }
        }
    }
}