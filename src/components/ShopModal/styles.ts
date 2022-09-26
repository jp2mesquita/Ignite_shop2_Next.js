import { Columns, FileX } from "phosphor-react";
import { styled } from "../../styles";

export const ShopModalContainer = styled('div', {
  
  backgroundColor: '$gray800',
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  width: '30rem',
  right: 0,
  height: '100vh',
  zIndex: 99,

  padding: '4rem 3rem',


  footer:{
    marginTop: 'auto',

    div:{
      display: 'flex',
      
      span:{
        marginLeft: 'auto',
        marginBottom: '.5rem',
      }
    },

    display: 'flex',
    flexDirection: 'column',

    button:{
      marginTop: "3.5rem",
      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,
      padding: '1.25rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '$md',
      

      transition: 'background .2s',
  
      '&:disabled': {
        opacity: .6,
        cursor: 'not-allowed',
      },
  
      '&:not(:disabled):hover': {
        backgroundColor: '$green300'
      }
    },
  }

})

export const ItemCard = styled('div',{
  display: "flex",
  gap: '1.25rem',
  marginTop: '2rem',
  div:{
    width: '6.25rem',
    height: '5.8125rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },
  section:{
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
  },

  button:{
    background: 'none',
    border: 'none',
    display: "flex",
    lineHeight: '160%',
    color: '$green500',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: "bold",

    '&:hover':{
      color: '$green300',
    }
  }
})