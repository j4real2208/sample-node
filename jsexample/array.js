function ucase(str ,  callback ) {
    setTimeout(() => {
        callback(str.toUpperCase());
    } , 3000 )
}

function mult(a ,b ) {
    var p = new Promise((resolve,reject) => {
        if (a < 0 || b < 0 ) reject('Not valid arguments');
        else{
            setTimeout(() => {
                resolve(a*b);
            },3000);            
        }        
    })
    return p;
}
var smp = (res) => {
    console.log(res)
}
ucase("ibm" , smp )

console.log('----------------')

console.log('----------------')

console.log('----------------')

mult(-10,20).then((res) => {
    console.log(res)
},(err) => {
    console.log(err)
})

console.log('----------------')

console.log('----------------')

console.log('----------------')