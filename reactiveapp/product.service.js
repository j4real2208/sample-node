const rxjs = require('rxjs');
class ProductService {
    prods = [
        { code: "1", name: 'Mouse', price: 400 },
        { code: "2", name: 'Keyboard', price: 400 },
    ]
    findAllSync() {
        setTimeout(()=> {
            console.log('Sending the products ..')
        },3000)
        return this.prods;
    }
    findAllASync()  {
        //Lab Exercise
        var p = new Promise((resolve,reject) => {
            resolve(this.prods)
        })
        return p
    }
    findAllASyncObs() {
        console.log('reached the inverntory catalog !!')
        let o = new rxjs.Observable((s) => {
            setTimeout(() => {                
                s.next([this.prods[0]]);
            },4000)

            setTimeout(() => {                
                s.next([this.prods[1]]);
            },4000)
            
            setTimeout(() => {                
                s.complete();
            },6000)
            
        })
        return o;
    }
}

module.exports = ProductService;