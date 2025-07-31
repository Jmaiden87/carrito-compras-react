import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import Swal from "sweetalert2"
import "../styles/CartPage.css"


export const CartPage = () => {

  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handlerPurchase = () => {
    const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'La compra se ha realizado con éxito',
      html: `<p> Has comprado: </p> <pre>${productsPurchased}</pre>`
    })
  }


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>


          {shoppingList.map(product => (

            <tr key={product.id}>
              <th scope="row">{product.title}</th>
              <td>{product.price}</td>
              <td>

                <button
                  className="add-button"
                  onClick={() => decrementQuantity(product.id)}
                >-</button>
                <button
                  className="quantity-button"
                >{product.quantity}</button>
                <button
                  className="remove-button"
                  onClick={() => incrementQuantity(product.id)}
                >+</button>

              </td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => removeProduct(product.id)}
                >Eliminar</button>
              </td>
            </tr>

          ))}

          <tr>
            <th><b>TOTAL: </b></th>
            <td></td>
            <td></td>
            <td>${calculateTotal()}</td>
          </tr>


        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button
          className="purchase-button "
          type="button"
          onClick={handlerPurchase}
        >Comprar</button>

      </div>

    </>
  )
}
