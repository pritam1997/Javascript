const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
        if(request.readyState === 4 && request.status === 200){
            const data= JSON.parse(request.responseText)
            callback(undefined, data);
        } 
        else if (request.readyState === 4){            
            callback('could not fetch data', undefined);
        }
    });

    request.open("GET", 'todos.json');
    request.send();
};


// promise example

const getSomething = () => {

    return new Promise((resolve, reject) => {
        // fetch something
        // if success
        resolve('some data');
        // if there is an error
        reject('some error')
    });
};

// return promise
// getSomething().then((data) => {
//     console.log(data);
// },
// (err)=> {
//     console.log(err);
// }
// );


getSomething().then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});
