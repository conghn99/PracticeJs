let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng
for (const key in products) {
    console.log(`${products[key].name} - ${products[key].price} - ${products[key].brand} - ${products[key].count}`);
}

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
var total = 0;
for (const key in products) {
    totalPerProduct = products[key].price * products[key].count;
    total += totalPerProduct;
}
console.log(total);

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
console.log(products.filter(x => x.brand === "Apple"));

// 4. Tìm các sản phẩm có giá > 20000000
console.log(products.filter(x => x.price > 20000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
console.log(products.filter(x => x.name.toLowerCase().includes("pro")));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
products.push({
    name: "Xiaomi 13 Pro",
    price: 45000000,
    brand: "Xiaomi",
    count: 2,
});
console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
products = products.filter(x => x.brand !== "Samsung");
console.log(products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => a.price - b.price);
console.log(products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => b.count- a.count);
console.log(products);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const shuffled = products.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0, 2);
console.log(selected);