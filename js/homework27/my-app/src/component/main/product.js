

function Product ({ id, name, price, image, addItem}) {

  return (
    <div className="productItem" key={id} onClick={addItem}>
          <img src={image} alt="" className="productItemImage" />
          <h3>{name}</h3>
          <h3>{price}</h3>
    </div>
  )
}

export default Product