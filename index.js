"use strict";

function HashStorage() {
        this.storage = {};
    }
    this.addValue = function(key, value) {
        this.storage[key] = value;
    }
    this.getValue = function(key) {
        return this.storage[key];
    }
    this.deleteValue = function(key) {
        return delete this.storage[key];
    }
    this.getKeys = function() {
        return Object.keys(this.storage)
    }

// class HashStorage {
//     constructor() {
//         this.storage = {};
//     }
//     addValue(key, value) {
//         this.storage[key] = value;
//     }
//     getValue(key) {
//         return this.storage[key];
//     }
//     deleteValue(key) {
//         return delete this.storage[key];
//     }
//     getKeys() {
//         return Object.keys(this.storage)
//     }
// }


const coctailsStorage = new HashStorage();
coctailsStorage.addValue('maxito', 'green');

console.log(coctailsStorage.getValue('maxito'));