var a       = [10, 20, 20, 10, 10, 30, 50, 10, 20];
var b       = [];
var result  = [];
for(var i = 0; i < a.length; i++) {
    for(var j = i+1; j < a.length; j++) {
        if(a[i] == a[j]) {
            b[i] = a[i];
        }
    }
}
for(var i = 0; i < b.length; i++) {
    for(var j = i+1; j < b.length; j++) {
        if(b[i] == b[j]) {
            result[i] = b[i];
        }
    }
}
result.push(null);
result = result.filter(function(el) {
    if(el != null)
    return el; 
});
console.log(result.sort());