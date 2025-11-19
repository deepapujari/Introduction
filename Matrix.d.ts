declare class Matrix {
    rows: number;
    cols: number;
    data: number[][];
    constructor(rows: number, cols: number);
    map(fn: Function): void;
    multiply(n: any): void;
    randomize(): void;
    numAdd(n: number): void;
    add(n: Matrix): this;
    div(num: number): this;
    subtract(num: number): this;
    static dot(A: Matrix, B: Matrix): Matrix;
    transpose(): Matrix;
    sigmoid(): this;
}
export { Matrix };
//# sourceMappingURL=Matrix.d.ts.map