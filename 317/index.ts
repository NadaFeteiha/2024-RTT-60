// A simple demonstration of TypeScript.
// @ts-check

// Regular JavaScript
function addJS(a: number, b: number) {
    return a + b;
}

const JSresult = addJS(1, 2);
console.log(JSresult);

// TypeScript makes it clear that both
// parameters should be a number, and
// the return value should be a number.
// These are called "Type Annotations."
function addTS(a: number, b: number): number {
    return a + b;
}

const TSresult = addTS(3, 4);
console.log(TSresult);
