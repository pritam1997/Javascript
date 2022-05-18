const getTodos = (resource, callback) => {

    return new Promise( (resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',() => {
            if(request.readyState === 4 && request.status === 200){
                const data= JSON.parse(request.responseText)
                resolve(data);
            } 
            else if (request.readyState === 4){            
                reject('error getting resource ');
            }
        });
        request.open("GET", resource);
        request.send();    
    });
};

getTodos('/todos/luigi.json').then( data => {
    console.log('promise 1 resolved: ', data);
    return getTodos('/todos/mario.json');
}).then( data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('/todos/shaun.json');
}).then( data => {
    console.log('promise 3 resolved: ', data);
}).catch( err => {
    console.log('promise rejected: ', err);
});


// promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something
//         // if success
//         resolve('some data');
//         // if there is an error
//         reject('some error')
//     });
// };

// return promise
// getSomething().then((data) => {
//     console.log(data);
// },
// (err)=> {
//     console.log(err);
// }
// );


// getSomething().then(data =>{
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });
