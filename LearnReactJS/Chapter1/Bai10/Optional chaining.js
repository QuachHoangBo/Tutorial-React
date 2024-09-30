// (Toán tử ?. là một cách an toàn để truy cập thuộc tính của một object có nhiều lớp, kể
//     cả khi thuộc tính đấy không tồn tại)
// hay còn có thể hiểu là kiểm tra xem nó có tồn tại hay nếu ko thì trả về undefind

// nếu để check 1 thuộc tính trong 1 đối tượng thì sử dụng ?.

const person = {
    name: "Eric",
}
console.log(person?.name) //Eric
console.log(person?.age) //undefined
// giải thích ? ở đây có nghĩa là kiểm tra xem trong person có thuộc tính này hay ko
// nếu để check 1 phương thức trong 1 class thì sử dụng ?.()

class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    getage() {  
        return this.age
    }
}


const person1 = new Person("Eric")
console.log(person1.getName?.()) //Eric
console.log(person1.getage?.()) //undefined
// giải thích ?.() ở đây có nghĩa là kiểm tra xem trong person có phương thức này hay ko