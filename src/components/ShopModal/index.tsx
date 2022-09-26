
import Image from "next/future/image";
import { useShoppingCart } from "use-shopping-cart";
import { ItemCard, ShopModalContainer } from "./styles";
import { TotalPriceCalculator } from "../../utils/TotalPriceCalculator";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

interface Cart{
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  currency: string,
  priceInCurrency: string,
  defaultPriceId: string,
  quantity: number,
  price_data: object
}

interface CloseCartProps{
  closeCart: () => void
}
export function ShopModal(  { closeCart } : CloseCartProps){

  const { cartDetails, removeItem, clearCart } = useShoppingCart()


  const cart = (Object.values(cartDetails))


  const totalCartPrice = TotalPriceCalculator(cart)


  // const { isFallback } = useRouter()

  // if( isFallback ){
  //   return <p>Loadding...</p>
  // }

  const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession ] = useState(false)


  async function handleBuyProduct(){

    
    closeCart()

    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        cart: cart
      })


      const { checkoutSessionUrl } = response.data

      clearCart()
      window.location.href = checkoutSessionUrl

    } catch (error) {
      //conectar com uma ferramenta de observabilidade (Datalog / Sentry)

      setIsCreatingCheckoutSession(false)

      alert('falha ao redirecitonar ao checkout!')
    }
  }


  function handleRemoveItem(itemToRemove : string){
    removeItem(itemToRemove)
  }

  return(
    <ShopModalContainer>
      <h1>Sacolda de compras</h1>

      {
        cart.map(item=>{

          return(
            <ItemCard key={item.id}>
              <div>
                <Image src={item.imageUrl} width={94} height={94} alt='' />
              </div>
              <section>
                <p>{item.name}</p>
                <strong>{item.priceInCurrency}</strong>
                <button onClick={ () => handleRemoveItem(item.id)}>
                  Remover
                </button>
              </section>
            </ItemCard>
          )
        })
      }

      <footer>
        <div>
          <p>Quantidade</p>
          <span>{cart.length}</span>
        </div>
        <div>
          <p>Valor Total</p>
          <span>{totalCartPrice}</span>
        </div>

        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
          Finalizar Compra
        </button>
      </footer>

    </ShopModalContainer>
  )
}