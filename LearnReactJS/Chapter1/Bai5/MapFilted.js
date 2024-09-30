const MyArray = ["John", "Doe", "Switching"];
const NewArray = MyArray.map((item,index) =>{
    return console.log(item+" "+index);
})

// cả 2 đều dùng để tạo 1 mãng mới dựa điều kiện đã cho mà ko gây ảnh hưởng đến mãng cũ
// nhưng Map thì sẽ chạy 1 lần toàn bộ đối tượng trên mảng
// còn Filter thì tìm đối tượng trong mãng dựa theo điều kiện đã cho

const FindPerson = MyArray.filter((item,index)=>{
    return item.charAt(1) === "o";
})

console.log(FindPerson)
