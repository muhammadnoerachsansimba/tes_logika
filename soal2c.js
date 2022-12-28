
var a = " Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";
a = a.split(" ");

var result  = [];
for(var i = 0; i < a.length; i ++) {
    if(/^[A-Z a-z.,-]+$/.test(a[i])){
        result[i]   = a[i];
    }
    
}
result.push(null);
result = result.filter(function(el) {
    if(el != null)
    return el; 
});
console.log(result);