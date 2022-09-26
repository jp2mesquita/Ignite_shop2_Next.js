import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import { CartUnitsAmount } from "../../styles/pages/app";


export function CartButtonContainer(){

  const { cartCount, cartDetails } = useShoppingCart()

  const isEmpty = cartCount == 0

  const cart = (Object.values(cartDetails))
  

  return(
    <div>
      <Handbag size={24} weight='bold' color={isEmpty ? "#8D8D99" : "#c4c4cc"}/>  

      <CartUnitsAmount isEmpty={isEmpty}>
        {cart.length}
      </CartUnitsAmount>  
      

    </div>
  )
}