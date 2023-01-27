var arr= [2, 'deepak' , undefined, true,  'B42WEENG'] ;
// for-->
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}


var arr= [2, 'deepak' , undefined, true,  'B42WEENG'] ;
//for in-->
for( var i in arr) {
    console.log(arr[i]);
}



var arr= [2, 'deepak' , undefined, true,  'B42WEENG'] ;
//for of-->
for (var element of arr) {
    console.log(element);
}

var arr= [2, 'deepak' , undefined, true,  'B42WEENG'] ;
//for each-->
arr.forEach((element)=> {
    console.log(element);
})