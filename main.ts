/**
 * File created by suenlue on 12.12.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */

import { outer, production } from './env/vars';
import { ICars } from './products/icars';
import { Car } from './products/Car';

let list1: number[] = [ 1,
                        2,
                        3
];
let list2: number[] = [ 7,
                        8,
                        9
];
let list3: number[] = [ ...list1,
                        4,
                        5,
                        6,
                        ...list2
];


let user: { name: string, age: number } = {
    name: 'saban',
    age: 44
};

let clone = { ...user, age: 22 };

let { age, ...d} = user;

console.log ( 'ddd', d );

// function Car ( type ) {
//     this.brand = undefined;
//     this.type = type;
// }
// Car.prototype.sayYourType = function () {
//   console.log ( this.type );
// };
//
// function BMW ( type ) {
//     Car.call( this, type );
//     this.brand = 'bmw';
// }
//
// BMW.prototype = Object.create( Car.prototype );
// BMW.prototype.constructor = BMW;
//
// BMW.prototype.sayYourType = function () {
//     console.log ( 'override' );
//     this.__proto__.__proto__.sayYourType.call(this);
// };
//
// var b = new BMW( '118d');
// b.sayYourType();
// console.log ( b );

// let c = new Car( '118d');
// console.log ( c );
// c.sayYourType();

// function addListener () {
//
//
//     document.getElementById('btn').addEventListener( 'click',
//          ( ) => {
//             console.log ( this );
//         })
// }

// () => {
//     console.log ( 'ddd' );
// }

// let car: any = {
//         brand: 'bmw',
//         type: '118d'
//     };
//
// let bmw: ICars= car as ICars;

// let bmw: ICars = <ICars>{
//     brand: 'bmw',
//     type: '118d'
// };
//
// let user: { name: string, age: number } = {
//     name: 'saban',
//     age: 44
// }

/**
 * js bleibt js
 */
// function helloWorld () {
//     console.log ('hello', production, outer() );
// }

// let Variable
// let saban = 'saban';
// console.log ( saban );
//
// let username: string = 'saban'; // String
// const author: string = 'Saban Ünlü';
/*

for ( let i:number = 0; i<10; i++) {
    console.log ( i );
    for ( let i:number = 0; i<10; i++) {
        console.log ( i );
    }
}
*/

// helloWorld();