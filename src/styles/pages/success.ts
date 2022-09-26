import { relative } from "path";
import { Translate } from "phosphor-react";
import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: '0 auto',
  height: 656,

  
  section:{
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    width: 450,
    height: '8.75rem',
    
    div:{
      marginLeft: '-3rem',
      boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
      '&:first-child':{
        marginLeft: 0,
      }
    }
    // 'div ~ div':{
    //     transform: 'translateX(-25%)',
    //     boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)'

    // }
  },

  h1:{
    marginTop: '4rem',
    fontSize: '2xl',
    color: '$gray100',
  },

  p:{
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: "center",
    marginTop: '2rem',
    lineHeight: '1.4rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: 'lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  }

})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '10rem',
  height: '10rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '.25rem',
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
})