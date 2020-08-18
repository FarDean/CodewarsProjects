// MY SOLUTION
function digital_root(n) {
    let ex = n.toString().split("").map(s=> parseFloat(s)).reduce((total,num)=>{return total+num},0)
    while(ex>9){
        ex = ex.toString().split("").map(s=> parseFloat(s)).reduce((total,num)=>{return total+num},0)
    }
     return ex
}

// 
function digital_root(n) {
    return (n - 1) % 9 + 1;
}
