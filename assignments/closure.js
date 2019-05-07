// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closure = () => {
    var b = 1;
    return () => {
        var a = 2;
        b += a;
        console.log(b);
    };
};

c = closure();
c();
c();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
    let val = 0;

    return () => {
        console.log(++val);
    };
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

    let val = 0;

    return {
        increment: function() {
            console.log(++val);
        },
        decrement: function() {
            console.log(--val);
        }
    };
};

const veryNewCounter = counterFactory();
veryNewCounter.increment();
veryNewCounter.increment();
veryNewCounter.decrement();
