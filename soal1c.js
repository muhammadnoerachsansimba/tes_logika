var a       = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
var b       = [];
var c       = [];
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
            c[i] = b[i];
        }
    }
}
for(var i = 0; i < c.length; i++) {
    for(var j = i+1; j < c.length; j++) {
        result[i] = c[i];
    }
}
result.push(null);
result = result.filter(function(el) {
    if(el != null)
    return el; 
});
console.log(result.sort());
