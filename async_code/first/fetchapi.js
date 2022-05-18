// fetch api
/*
    in fetch its only rejected only when network error
    or we cant reach api then we get REJECT
    If miss type url endpoints then we dont get any error
        here response status is 404 not found



*/
fetch('/todos/luigi.json').then( response => {
    console.log('resolved', response);
    return response.json();    // return promise
}).then( data => {
    console.log(data);  // now get all data from promise response.json
}).catch(err => {
    console.log('rejected', err);
})

