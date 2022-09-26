import { NextApiRequest, NextApiResponse } from "next";
import { ItemCard } from "../../components/ShopModal/styles";
import { stripe } from "../../lib/stripe";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cart } = req.body


  let lineItems = []


  cart.forEach(element => {
    lineItems.push(
      {
        price: element.defaultPriceId,
        quantity: 1,
      }
    )
  });

  if (req.method != 'POST'){
    return res.status(405).json({ error: 'Method not Allowed'})
  }

  // if(!priceId) {
  //   return res.status(400).json({ error: 'Price not found.'})
  // }


  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems 
  })

  console.log(checkoutSession.id)

  return res.status(201).json({
    checkoutSessionUrl: checkoutSession.url
  })
}