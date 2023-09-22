
export default function Cart() {
  let 장바구니 =['tomatoes', 'pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      {장바구니.map((item) => {
        return <CartItem item={item} />
      })}
      <Button color='red'/>
    </div>
  )
} 

function Button({color}) {
  return (
    <button style={{backgroundColor: `${color}`}}>버튼</button>
  )
}

function CartItem({item}) {
  return (
    <div className="cart-item">
    <p>{item}</p>
    <p>$40</p>
    <p>1개</p>
  </div>
  )
}