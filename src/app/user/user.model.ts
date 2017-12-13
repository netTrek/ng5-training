/**
 * File created by suenlue on 13.12.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { User } from './user';

const userList: User[] = [];

for ( let i = 0; i < 10; i ++ ) {
  userList.push ( <User>{
    firstname: `vorname ${i}`,
    lastname : `nachname ${i}`,
    age      : i + 20
  } );
}

export default userList;

