// Syntax: condition ? <expression if true> : <expression if false>

// vd:
let x = 10;
let y = 20;
let show ='';
// old
if (x > y) {
    console.log("x lon hon y");
} else {
    console.log("x nho hon y");
}

// new
show = x > y ? "x lon hon y" : "x nho hon y";
// nếu x lớn hơn y thì show = "x lon hon y" nếu x nho hon y thi show =" x nho hon y"
console.log(show);