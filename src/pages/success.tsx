
import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";


interface SucessProps {
  customerName: string,
  purchasedProducts: {
    name: string,
    images: string[],
  }[]
}



export default function Success( { customerName, purchasedProducts  }: SucessProps ){

  return (
    <>
    <Head>
      <title>Compra efetuada | Ignite Shop</title>

      <meta name="robots" content="noindex"/>
    </Head>
      <SuccessContainer>

        
          <section >
            {purchasedProducts.map(item =>{
              return(
                <ImageContainer key={item.name} >
                  <Image src={item.images[0]} width={120} height={110} alt=''/>
                </ImageContainer>
              )
            })}
          </section>


        <h1>Compra efetuada!</h1>

        
        <p>
          Uhull! <strong>{customerName}</strong>, sua compra de {purchasedProducts.length} camisetas já está a caminho da sua casa.
        </p>

        <Link href='/'>

          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ( { query, params }) => {
  
  if(!query.session_id){
    return{
      redirect:{
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name

  let purchasedProducts = []

  session.line_items.data.forEach(item => {
    purchasedProducts.push(item.price.product as Stripe.Product)
  })

  return{
    props:{
      customerName,
      purchasedProducts
    }
  }
}