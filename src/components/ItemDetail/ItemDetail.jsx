import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2> {nombre} </h2>
        <h3>Precio: $ {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus non ullam quae, aliquid dolore impedit assumenda deserunt esse omnis reprehenderit aspernatur itaque? Enim sit autem, dolorem cumque ut ipsam inventore?</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail