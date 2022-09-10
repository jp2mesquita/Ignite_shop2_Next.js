import { styled } from "..";

export  const HomeContainer = styled('main', {
  display: "flex",
  // gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: "hidden",

  display: 'flex',
  alignItems: "center",
  justifyContent: "center",

  img:{
    objectFit: "cover",
  },

  footer:{
   
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    color: '$gray100',

    borderRadius: 6,

    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div:{
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',
      strong:{
        fontSize: '$lg',
      },
  
      span:{
        fontSize: 'xl',
        fontWeight: 'bold',
        color: '$green300',
      },

      button:{
        backgroundColor: '$green500',
        color: '$gray100',
        border: 'none',
        borderRadius: 8,
        padding: '.75rem',

        transition: 'all 0.2s',

        '&:hover':{
          backgroundColor: '$green300',
        },
      },
    },

    
  },

  '&:hover': {
    footer:{
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})