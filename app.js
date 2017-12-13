import * as R from 'ramda';

import soma, { sub, multiplicacao, div as dividir } from './utils'

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1]

const arr3 = R.union(arr1, arr2);

console.log(arr3);

console.log(soma(3, 4));

console.log(sub(3, 4));

console.log(multiplicacao(3, 4));

console.log(dividir(3, 4));
