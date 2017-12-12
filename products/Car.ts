/**
 * File created by suenlue on 12.12.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { ICars } from './icars';

export class Car implements ICars{

    brand: string;
    // type: string;

    constructor ( public type: string ) {
        // this.type = type;
    }
    
    sayYourType ( parma1: boolean = true, ...rest: any[] ) {
        console.log ( this.type, rest );
    }

}