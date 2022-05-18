// async and await

// async function always return promise

// async function
const getTodos = async () => {
    const response = await fetch('/todos/luigi.json');
    /*  
        fetch function return promise 
        and await function halt and get resolved data and give repsonse variable
     */
    // console.log(response.json()); // return promise rejected
    /* 
        here response is also promise
        use await to get json 
     */
    const data = await response.json();     // return resolved data
    // console.log(data);  // json data
    return data;    // retur promise state: pending
};

// const test = getTodos(); // return promise state: pending
// console.log(test);

console.log(1);
console.log(2);

// non blocking function
getTodos()
    .then(data => console.log('resolved: ', data));

console.log(3);
console.log(4);




// const test = getTodos();     // promise
// console.log(test); // promise