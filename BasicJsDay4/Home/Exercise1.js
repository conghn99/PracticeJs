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
function addProduct(name, price, brand, count) {
    products.push({
        name: name,
        price: price,
        brand: brand,
        count: count,
    });
    console.log(products);
}

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
function removeSamsungProduct(arr) {
    arr = arr.filter(x => x.brand !== "Samsung");
    console.log(arr);
}

// 8. Sắp xếp giỏ hàng theo price tăng dần
function sortAscendPrice(arr) {
    arr.sort((a, b) => a.price - b.price);
    console.log(arr);
}

// 9. Sắp xếp giỏ hàng theo count giảm dần
function sortDescendCount(arr) {
    arr.sort((a, b) => b.count- a.count);
    console.log(arr);
}

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function getTwoRandomProducts(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    console.log(arr.slice(0, 2));
}