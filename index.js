const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats, name]; // Returns a new array, does not modify original
}

function prependCat(name) {
    return [name, ...cats]; // Returns a new array, does not modify original
}

function removeLastCat() {
    return cats.slice(0, -1); // Returns a new array, removes last cat
}

function removeFirstCat() {
    return cats.slice(1); // Returns a new array, removes first cat
}

