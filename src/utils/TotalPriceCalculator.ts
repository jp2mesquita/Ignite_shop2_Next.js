import { CartEntry } from "use-shopping-cart/core"

export function TotalPriceCalculator(cart : CartEntry[]){
  let totalPrice = 0

  // cart.forEach( (item => {
  //   totalPrice += Number(item.price.replace(/[^0-9.-]+/g,""))
  // })

  cart.forEach( (item => {
    totalPrice += item.price
  }))

  const cartPrice = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice/100)
  
  return cartPrice
}