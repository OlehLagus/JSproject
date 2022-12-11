

function Product ({ id, name, price, image, addItem}) {
  // function addItem () {
  //   let inputList = document.querySelector(".choiceProduct");
  //   inputList.innerHTML += `${' ' + name}`;
  // }
  return (
    <div className="productItem" key={id} onClick={addItem}>
          <img src={image} alt="" className="productItemImage" />
          <h3>{name}</h3>
          <h3>{price}</h3>
    </div>
  )
}

export default Product