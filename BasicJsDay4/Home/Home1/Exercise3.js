// Câu 1
document.querySelector("#text").innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

// Câu 2
var list = document.querySelectorAll("li");
for (var i = 0; i < list.length; i++) {
    list[i].style.color = "blue";
}

// Câu 3
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
for (var i = 8; i < 11; i++) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(`Item ${i}`);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
var tagList = document.getElementById("list").children;
tagList[0].style.color = "red";

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
tagList[2].style.backgroundColor = "green";

//Remove thẻ <li> 4
tagList[3].remove();

//Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let newNode = document.createElement("li");
let textNode = document.createTextNode("Item random");
newNode.appendChild(textNode);
document.getElementById("list").insertBefore(newNode, tagList[3]);