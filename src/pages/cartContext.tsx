import {  useState } from 'react'
import { CartProvider } from 'use-shopping-cart'



export default function AppWrapper ({children} ) {

  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY

  return(
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
      loading={<p aria-live="polite">Loading redux-persist...</p>}
    >
      {children}
    </CartProvider>
  )
}

