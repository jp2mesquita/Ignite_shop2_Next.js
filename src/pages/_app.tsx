import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import Image from 'next/future/image'

import { CartButton, Container, Header } from "../styles/pages/app";
import { Handbag } from "phosphor-react";
import { useState } from "react";

globalStyles();


export default function App({ Component, pageProps }: AppProps) {

  let isSaleCompleted = true
  const customer = pageProps.customerName

  if(customer){
    isSaleCompleted = false
  }

  return (
    <Container>
      <Header success={isSaleCompleted}>
        <Image src={logoImg} alt="" />

        <CartButton showCart={isSaleCompleted}>
          <Handbag size={24} weight='bold'/>  
        </CartButton>
      </Header>

      <Component {...pageProps} />

    </Container>
  )
}
