import './App.css';
import BillInformation from './Component/BillInformation';
import ProductList from './Component/ProductList';
import { useState } from 'react';

function App() {
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
  const [data, setData] = useState(productList)
  return (
    <div>
      <div className="shopping-cart-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4">
                <h2>Shopping Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row shopping-cart">
        <ProductList setData={setData}/>
        <BillInformation data={data}/>
      </div>
    </div>
  );
}

export default App;
