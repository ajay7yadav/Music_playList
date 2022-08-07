let arr = [1,'a','b',['c',['d',2]],'e',[[['f']]]];

var outer = [];
var count = 0;

function logic(arr){
    for(let i=0; i<arr.length; i++){
        if((typeof arr[i] != "object")){
            outer.push(arr[i]);
            continue;
        }
        logic(arr[i]);    
    }
}
logic(arr);

console.log(arr);

console.log(outer);