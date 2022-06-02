const ProductService = require('./product.service');


let ps = new ProductService();

//ps.findAllSync().forEach((e) => console.log(`${e.code}.${e.name}`))
// ps.findAllASync().then( (arr) => {
//     arr.forEach( (e) => {
//         console.log(`${e.code}.${e.name}`);
//     })
// })


let s = ps.findAllASyncObs().subscribe({
    next: (res) => {
        res.forEach( (e) => {
            console.log(`${e.code}.${e.name}`);
        })
    },
    complete: () => {
        console.log('Prods done printing')
    }
})