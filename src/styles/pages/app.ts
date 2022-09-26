
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
      true:{
        justifyContent: 'center',
      },
      false:{
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
  position: 'relative',

  variants:{
    success:{
      true:{
        display: 'none',
      },
      false:{
        display: 'block',
      },
    },
    // svg:{
    //   isEmpty:{
        
    //   }
    // }
  },
})

export const CloseCartButton = styled('button',{
  background: '$gray800',
  width: '1.5rem',
  height: '1.5rem',
  position: "absolute",
  border: 'none',

  top: 40,
  right: 40,
  zIndex: 999,
})

export const CartUnitsAmount = styled('div',{
  position: "absolute",
  zIndex: 3,
  right: 0,
  top: 0,
  transform: "translateY(-50%) translatex(50%)",
  width: '1.5rem',
  height: '1.5rem',
  backgroundColor: '$green500',
  color: '$white',
  border: "3px solid $gray900",
  borderRadius: '50%',

  variants:{
    isEmpty:{
      true: {
        display: 'none',
      },
      false:{
        display: "flex"
      }
    }
  },

  alignItems: "center",
  justifyContent: "center",

  padding: 14,

  fontSize: '.875rem',
  fontFamily: 'Roboto',
  fontWeight: 'bold',

})