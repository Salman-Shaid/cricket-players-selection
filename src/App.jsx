import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Mail from "./Components/Mail/Mail";
import Main from "./Components/Main/Main";
import Nav from "./Components/Navbar/Nav";
import AllCart from "./Components/AllCart/AllCart.jsx";
import toast from "react-hot-toast";

function App() {
  const [coin, setCoin] = useState(0);

 const [tab,setTab]=useState("available")

  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleDelete = (id) => {
    const deleteProduct = selectedProduct.find((p) => p.id == id);
    setCoin(coin+deleteProduct.price)
    // console.log(deleteProduct);
    const remainingProduct = selectedProduct.filter((p) => p.id != id);
    setSelectedProduct(remainingProduct);
  };

  const handleSelectedProduct = (product) => {
    const isExist = selectedProduct.find((p) => p.id == product.id);
    if (isExist) {
      return toast.error("Already exist");
    } else {
      if (product.price > coin) {
        return toast.error("Insufficient balance");
      } else {
        setCoin(coin-product.price)
        const newProduct = [...selectedProduct, product];

        setSelectedProduct(newProduct);
      }
    }
  };

  return (
    <>
      <div className="relative">
        <h1 className=" backdrop-blur-lg sticky top-0">
          <Header coin={coin}></Header>
        </h1>
        <Nav setCoin={setCoin} coin={coin} />

        <div>
          <Main tab={tab}
          setTab={setTab}
          handleSelectedProduct={handleSelectedProduct}
            handleDelete={handleDelete}
            selectedProduct={selectedProduct}
            
          >

          </Main>
          
        </div>
        <div>
          <Footer></Footer>
          <div>
            <Mail></Mail>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
