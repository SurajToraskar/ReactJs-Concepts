import React from 'react';

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    let c = a / b;
    return c.toFixed(2);
}

function mul(a, b) {
    return a * b;
}

export default add;
export { sub, div, mul };