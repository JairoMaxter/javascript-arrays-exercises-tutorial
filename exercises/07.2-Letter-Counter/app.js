let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

let newpar = par.toLowerCase();
let array = Array.from(newpar);


/*for (let i = 0; i < array.length; i++) {
    for (i in array) {
        if (counts.hasOwnProperty(i)) {
            counts{ i } ++;
        } else {
            counts{ i }=1;
        }
    }
}*/

console.log(counts)