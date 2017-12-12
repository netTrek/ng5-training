/**
 * File created by suenlue on 12.12.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { Car } from './Car';

export class BMW extends Car {

    constructor ( type: string ) {
        super ( type );
        this.brand = 'BMW';
    }

    sayYourType () {
        console.log ( 'override' );
        super.sayYourType();
    }
}