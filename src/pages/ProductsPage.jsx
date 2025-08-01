import { useContext } from "react";
import { CardComponent } from "../Component/CardComponent";
import {ProductContext} from '../context/ProductContext'
import { CartContext } from "../context/CartContext";


import "../index.css"


export const ProductsPage = () => {

  const {products} = useContext(ProductContext)
  const {addProduct,removeProduct} = useContext (CartContext)

  return (
   <>
      <h1>Lista de Prodcutos</h1>
      <hr />
      {products.map(product =>(
        <CardComponent
        key= {product.id}
        id={product.id}
        image = {product.image}
        title= {product.title}
        description={product.description}
        price={product.price} 
        handlerAdd={() => addProduct(product)}
        handlerRemove ={() => removeProduct(product.id)}
        />
        

      ))}
   
   </>
  )
}
