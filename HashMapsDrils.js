'use strict';

const { HashMap } = require('./HashMaps');
const { HashMapSepChain } = require('./HashMapsSepChain');

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
    const lor = new HashMap();
    const data = [{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
    {"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
    {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
    {"Ent": "Treebeard"}];
    
    data.forEach(obj => {
        const key = Object.keys(obj)[0];
        lor.set(key, obj[key])
    });
    console.log(lor);
    console.log('Maiar =', lor.get('Maiar'));
    console.log('Hobbit =', lor.get('Hobbit'));
    console.log(lor._capacity);
}

main();

const WhatDoesThisDo = function () {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);
    console.log('map1 =', map1.get(str1));
    console.log('map2 =', map2.get(str3));
}

WhatDoesThisDo();

function removeDuplicates(string) {
    const map = new Map();
    let newStr = '';
    string.split('').forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, '');
            newStr += letter;
        }
    });
    return newStr;
}

console.log(removeDuplicates('google'));
console.log(removeDuplicates('google anything that comes to mind'));

function palindrome(string) {
    const result = new Map();
    for (let i = 0; i < string.length; i++) {
        console.log(result);
        if (!result.delete(string[i])) {
            result.set(string[i], 1);
        }
    }
    console.log(result.size, result);
    if (result.size <= 1) {
        return true;
    } return false;
}

console.log(palindrome('acecarr'));
console.log(palindrome('north'));

HashMapSepChain.MAX_LOAD_RATIO = 0.5;
HashMapSepChain.SIZE_RATIO = 3;

function sepMain() {
    const lor = new HashMapSepChain;
    const data = [{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
    {"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
    {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
    {"Ent": "Treebeard"}];

    data.forEach(obj => {
        const key = Object.keys(obj)[0];
        lor.set(key, obj[key]);
    });
    console.log(lor);
}

sepMain();