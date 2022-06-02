async function mult(a ,b ) {
    return a*b;
}



async function test(){
    let res = await mult(10,20)
    console.log(res)
}

test();
console.log('------------------')