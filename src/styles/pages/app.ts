import { styled } from "..";

export const Container = styled('div',  {
  display: 'flex',
  flexDirection: 'column',
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: "flex",
  alignItems: "center",

  variants:{
    success:{
      false:{
        justifyContent: 'center',
      },
      true:{
        justifyContent: 'space-between',
      }

    },
    

  }
  

  
})

export const CartButton = styled('button', {
  
  backgroundColor: '$gray800',
  border: 'none',
  borderRadius: 8,
  padding: '.75rem',
  color: '$gray300',
  
  variants:{
    showCart:{
      true:{
        display: 'block',
      },
      false:{
        display: 'none',
      },
    },
  },

})