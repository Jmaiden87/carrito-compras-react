import { useState, useContext, useEffect } from "react"
import "../styles/CardComponent.css"
import { CartContext } from "../context/CartContext"

export const CardComponent = ({id,image, title, description, price, handlerAdd, handlerRemove}) => {

  const {shoppingList} = useContext(CartContext)
    
  const [added, setAdded] = useState(false)

    const addProduct = () => {
      handlerAdd()
      setAdded(true)
    }

    const removeProduct = () => {
      handlerRemove()
      setAdded(false)
    }

    const checkAdded =()=>{
      const boolean = shoppingList.some(product => product.id ==id)
      setAdded(boolean)
    }

    useEffect(() => {
      checkAdded()
    }, [])
    
  return (
    
    <div className="card">
      <img src={image} className="card-img" alt={title}/>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className= "card-price">{price}</p>
        {
            added
                ?<button
                    type= "button"
                    className="remove-button"
                    onClick={removeProduct}
                
                >
                    Quitar del carrito
                </button>
                :<button
                    type= "button"
                    className="add-button"
                    onClick={addProduct}
                
                >
                    Agregar al carrito
                </button>
        }
      </div>
    </div>    
  
  )
}
