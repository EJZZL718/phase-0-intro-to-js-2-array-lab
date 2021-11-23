// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}

function appendCat() {
    const copyCats = [...cats, "Broom"];
    return copyCats;
}

function prependCat() {
    const copyCats = ["Arnold", ...cats];
    return copyCats;
}

function removeLastCat() {
    const copyCats = [...cats.slice(0, 2)
    ]
    return copyCats;
}

function removeFirstCat() {
    const copyCats = [...cats.slice(cats.length - 2)];
    return copyCats;
}