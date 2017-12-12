/**
 * File created by suenlue on 12.12.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */



// let production: boolean = true;

let testVar: number = 123;

function innerFunction (): number {
    return 123;
}

export function outer (): number {
    return innerFunction() * 2;
}

export let production: boolean = true;

