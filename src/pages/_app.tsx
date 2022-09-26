import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import Image from 'next/future/image'

import { CartButton, CartUnitsAmount, CloseCartButton, Container, Header } from "../styles/pages/app";
import { Handbag, X } from "phosphor-react";


import AppWrapper  from './cartContext'
import { useState } from "react";
import { CartButtonContainer } from "../components/CartButtonContainer";
import { ShopModal } from "../components/ShopModal";
import Link from "next/link";


globalStyles();


export default function App({ Component, pageProps }: AppProps) {

  

  const customer = pageProps.customerName

  
  let isSaleCompleted = (customer != null)
  

  console.log(isSaleCompleted)

  const [showCartModal, setShowCartModal] = useState<boolean>(false)

 
  function handleOpenCart(){
    setShowCartModal(true)
  }

  function handleCloseCart(){
    setShowCartModal(false)
  }

  return (
    <AppWrapper>
      { showCartModal && <ShopModal closeCart={handleCloseCart}/>} 
      { showCartModal && 
        <CloseCartButton onClick={ () => handleCloseCart()}>
          <X size={24} weight={'bold'} color={'#fff'}/>
        </CloseCartButton>
   
      }

      <Container>
        <Header success={isSaleCompleted}>
          <Link href={'/'}>
            <Image src={logoImg} alt="" />
          </Link>
          <CartButton success={isSaleCompleted}
            onClick={() => handleOpenCart()}
          >
            <CartButtonContainer />
          </CartButton>
        </Header>

        <Component {...pageProps}/>

      </Container>
    </AppWrapper>
  )
}
