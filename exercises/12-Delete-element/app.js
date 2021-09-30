var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];

function deletePerson(name) {
    let nameDelete = []
    for (let i = 0; i < people.length; i++) {
        if (people[i] !== name) {
            nameDelete.push(people[i])
        } else { }
    }
    return nameDelete
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
