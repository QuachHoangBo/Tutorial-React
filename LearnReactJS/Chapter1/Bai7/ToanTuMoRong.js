// toán tử mở rộng là chuyển từng phần tử cho 1 đối tượng trong mảng ( ...Array )

const MyArray = ["John", "Doe", "Switching"];
const NewArray = [...MyArray];
console.log(NewArray)

const Person1 = {
    firstname: "John",
    lastname: "Doe",
    age: 30
}
const UpdatePerson1 = {
    firstname: "Doe",
    lastname: "John",
    age: 33
}

const NewPerson = {...Person1, ...UpdatePerson1}
console.log(NewPerson)

// khi sử dụng toán tử mở rộng với đôi tượng thì thuộc tính trùng nhau sẽ bị ghi đè

const MoneythisYear = [1200, 2000, 3000, 4000, 5000];
const Sum = (a,b,c,d,e) =>{
    return console.log (a + b + c + d + e)
}
Sum(...MoneythisYear)