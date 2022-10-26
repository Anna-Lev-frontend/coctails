// "use strict";

// function HashStorage() {
//         storage = {};
//     }
//     this.addValue = function(key, value) {
//         this.storage[key] = value;
//     }
//     this.getValue = function(key) {
//         return this.storage[key];
//     }
//     this.deleteValue = function(key) {
//         return delete this.storage[key];
//     }
//     this.getKeys = function() {
//         return Object.keys(this.storage)
//     }

class HashStorage {
    constructor(coctail, proparty, ingredients, recipe) {
        //storage = {}
        this.coctail = coctail;
        this.proparty = proparty;
        this.ingredients = ingredients;
        this.recipe = recipe;
    }
    addValue(key, value) {
        this.coctail[key] = value;
    }
    getValue(key) {
        return this.coctail[key];
    }
    deleteValue(key) {
        return delete this.coctail[key];
    }
    getKeys() {
        return Object.keys(this.coctail)
    }
}


const coctailsStorage = new HashStorage('maxito');
coctailsStorage.addValue('alcohol', 'yes');

console.log(coctailsStorage);