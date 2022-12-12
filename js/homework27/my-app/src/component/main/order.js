import OrderCard from './orderCard'

function Orders ({orders}) {
  return (
    <div className="choiceProduct">
          {orders.map(el => {return (
            <div className='card'>
              <OrderCard 
              key={el.id}
              name={el.name}
              price={el.price}
              /> 
            </div>
          )}
          )}
    </div>
  )
}

export default Orders