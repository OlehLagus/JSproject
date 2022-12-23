import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './Main.css';
// import images from '../../../public/images'
// import iphone14_blue from'../../../images/iphone14_blue.png';
// import iphone14_red from '../../../images/iphone14_red.png';
// import iphone14_black from'../../../images/iphone14_black.png';
// import iphone13_green from '../../../images/iphone13_green.png';
// import iphone13_blue from '../../../images/iphone13_blue.png';
// import iphone13_white from '../../../images/iphone13_white.png';
import Product from "./Product";
import Orders from './Order'


const product = [
  {
    id: 1,
    name: 'Iphone 14 Blue',
    price: 499,
    image: '/images/iphone14_blue.png'
  },
  {
    id: 2,
    name: 'Iphone 14 Red',
    price: 599,
    image: '/images/iphone14_red.png'
  },
  {
    id: 3,
    name: 'Iphone 14 Black',
    price: 699,
    image: '/images/iphone14_black.png'
  },
  {
    id: 4,
    name: 'Iphone 13 Green',
    price: 399,
    image: '/images/iphone13_green.png'
  },
  {
    id: 5,
    name: 'Iphone 13 Blue',
    price: 450,
    image: '/images/iphone13_blue.png'
  },
  {
    id: 6,
    name: 'Iphone 13 White',
    price: 520,
    image: '/images/iphone13_white.png'
  }
]



function Main() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('price');
  useEffect(() => {
    const sortArray = type => {
      const types = {
        name: 'name',
        price: 'price'
      };
      const sortProperty = types[type];
      if (sortProperty === 'name') {
        const sortedName = [...product].sort((a, b) => a[sortProperty] > b[sortProperty] ? 1 : -1);
        setData(sortedName);
      } else if (sortProperty === 'price') {
        const sorted = [...product].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
      }
    };
    sortArray(sortType);
  }, [sortType]);



  const [listOrder, setOrder] = useState([]);
  function addItem(elem) {
    setOrder([...listOrder, elem])
  }
  return (
    <div className="container">
      <div className="productCheck">
        <select className='mainSelect' onChange={(e) => setSortType(e.target.value)}>
          <option value="price">Цена</option>
          <option value="name">Имя</option>
        </select>
      </div>
      <Orders orders={listOrder} />
      <div className="productList">
        <div className="productListItem" >
          {data.map(elem => {
            return (
              <Product
                addItem={() => addItem(elem)}
                id={elem.id}
                name={elem.name}
                price={elem.price + '$'}
                image={elem.image}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Main;
