import React from 'react'
import { useState } from 'react';

function ProductItem({setData}) {
    const productList = [
        {
          id: 1,
          name: "Sản phẩm 1",
          image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          price: 300000,
          count: 1,
          size: "M"
        },
        {
          id: 2,
          name: "Sản phẩm 2",
          image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          price: 400000,
          count: 1,
          size: "L"
        },
        {
          id: 3,
          name: "Sản phẩm 3",
          image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          price: 500000,
          count: 1,
          size: "XL"
        }
    ]
    const [quantity, setQuantity] = useState(productList);
    const removeProduct = (id) => {
        const res = window.confirm("Bạn có muốn xóa sản phẩm này không")
        if (res) {
            setQuantity(quantity.filter(p => p.id !== id));
            setData(quantity.filter(p => p.id !== id))
        }
    }
    const plusQuantity = (id) => {
        quantity.forEach(p => {
            if (p.id === id) {
                p.count++
            }
        })
        setQuantity(quantity.map(p => p))
        setData(quantity.map(p => p))
    }
    const minusQuantity = (id) => {
        quantity.forEach(p => {
            if (p.id === id) {
                if (p.count > 1) {
                    p.count--
                }
            }
        })
        setQuantity(quantity.map(p => p))
        setData(quantity.map(p => p))
    }
    return (
        <React.Fragment>
            {quantity.length === 0 && (
                <p className="fst-italic message">Không có sản phẩm trong giỏ hàng</p>
            )}
            {quantity.length > 0 && quantity.map((product) => (
                <div className="product-item d-flex border mb-4" key={product.id}>
                    <div className="image">
                        <img src={product.image} alt={"sản phẩm " + product.id} />
                    </div>
                    <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="text-dark fs-5 fw-normal">
                                    {product.name} ({product.size})
                                </h2>
                                <h2 className="text-danger fs-5 fw-normal">
                                    {product.price} VND
                                </h2>
                            </div>
                            <div className="text-black-50">
                                <div className="d-inline-block me-3">
                                    <button className="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={() => minusQuantity(product.id)}>-</button>
                                    <span className="py-2 px-3 d-inline-block fw-bold">{product.count}</span>
                                    <button className="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={() => plusQuantity(product.id)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="text-primary border-0 bg-transparent fw-light" onClick={() => removeProduct(product.id)}>
                                <span><i className="fa-solid fa-trash-can"></i></span>
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default ProductItem