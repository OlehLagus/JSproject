function OrderCard ({name, price}) {

  return(
    <div className='orderCard' >
          <h3>{name}</h3>
          <h3>{price} $</h3>
    </div>
  )
}

export default OrderCard