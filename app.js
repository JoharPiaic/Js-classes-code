// Chapter 20-21-22-23 Nested Loop

// for (var i = 0; i < 5; i++){
//     for (var j = 0; j < 3; j++){
//         document.write("PAKISTAN ZINDABAD" + "<br>")
//     }
// }


// var fname = ["johar", "Shaan", "Israr"]
// var lname = ["ali", "haider", "babu"]

// for(var i = 0; i < fname.length; i++){
//     for(var x = 0; x < lname.length; x++){
//         console.log(fname[i] + " " + lname[x])
 
//     }
// }

//  Print Shapes

// for (var i = 0; i < 10; i++){
//     for (var j = 0; j < i; j++){
//         document.write("_*_")
//     }
//     document.write("<br>")
// }

//    Palindrome Word > read same left and right both  like civic, madam, refer

// var word = prompt("Enter your word")
// var check = "";
// for (var i = word.length - 1; i >=0; i--){
//     check += word[i]
// }

// if(word === check){
//     console.log(word + " is a palindrome word")
// }


// var name = "Johar";
// name = name.toUpperCase();
// console.log(name);


// // // // // //   =<= CALCULATORS =>=   // // // // // // 


// var val1 = prompt('Enter Your First Value')
// var sign = prompt('Enter Your Operator')
// var val2 = prompt('Enter Your 2nd Value')

// console.log(val1+sign+val2)
// if(sign === '+'){
//     alert((+val1)+(+val2))
// }
// else if (sign === "-"){
//     alert(val1-val2)
// }
// else if (sign === "/"){
//     alert(val1/val2)
// }
// else if (sign === "*"){
//     alert(val1*val2)
// }

// else if (sign === "%"){
//     alert(val1/val2*100 + '% ')
// }



// var eq = prompt('Enter Your Equation');
// var num = eq.length

// for (var i = 0; i<num; i++){
//     if(eq.slice (i, i+1) === '+' || eq.slice (i, i+1) === '-' || eq.slice (i, i+1) === '*' || eq.slice (i, i+1) === '/'){
//         alert('sign has found');
//     }
// }


for (var a = 1; a <= 100; a = a+10){
    document.write(a + "<br>")
}