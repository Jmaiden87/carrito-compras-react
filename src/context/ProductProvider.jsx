import { ProductContext } from "./ProductContext";
import{useState, useEffect} from "react"
import Swal from "sweetalert2";

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  const fecthProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Ocurrio un problema al cargar los productos",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
