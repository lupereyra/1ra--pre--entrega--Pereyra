import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIw6R0f5Gr64YeG1METn_2ymFDCxIS1IRvdQ&usqp=CAU";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        <strong> 2 </strong>
    </div>
  )
}

export default CartWidget