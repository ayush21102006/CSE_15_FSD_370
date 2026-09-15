const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Found Data");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

promise
.then((result) => {
    console.log(result);
})

.catch((error) => {
    console.log(error);
})