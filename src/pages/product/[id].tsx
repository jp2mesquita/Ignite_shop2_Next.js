
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps{
  product:{
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    priceInCurrency: string,
    currency: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product( { product } : ProductProps){


  const { addItem, cartDetails } = useShoppingCart()

 

 

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' priority/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceInCurrency}</span>

          <p>{product.description}</p>

          {/* <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
            Comprar Agora
          </button> */}

          <button onClick={ () =>{ 
            addItem(product, {count: 1}) 
          }}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [
      {params: {id : 'prod_MOFfxgFLjElTCZ'}}
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ( { params } ) =>{
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })


  const price = product.default_price as Stripe.Price

  
  return{
    props: {
      product:{
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        priceInCurrency: new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount/100),
        currency: price.currency,
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}