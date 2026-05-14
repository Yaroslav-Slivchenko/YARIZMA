import { defineRecipe } from "@chakra-ui/react";

export const button = defineRecipe({
  variants: {
    variant: {
      primary: {
        height: '70px',
        px: '75px',
        backgroundImage: 'linear-gradient(-45deg, #EA422A, #F69020, #FFC619)',
        border: 'none',
        borderRadius: '60px',
        textTransform: 'uppercase',
        letterSpacing: '5%',
        fontWeight: 'bold',
        fontSize: '13px',
        color: 'myDark',
        opacity: { _hover: 'myOpacity' },
        transitionDuration: 'myDuration',
      },
      transparent: {
        height: '60px',
        px: '45px',
        background: 'transparent',
        border: '1px solid #393C43',
        borderRadius: '60px',
        textTransform: 'uppercase',
        letterSpacing: '5%',
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#FFFFFF',
        opacity: { _hover: 'myOpacity' },
        transitionDuration: 'myDuration',
      },
      light: {
        height: '60px',
        px: '45px',
        background: '#FFFFFF',
        border: 'none',
        borderRadius: '60px',
        textTransform: 'uppercase',
        letterSpacing: '5%',
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#000000',
        opacity: { _hover: 'myOpacity' },
        transitionDuration: 'myDuration',
      },
      circle: {
        background: {base: 'transparent', _hover: '#2E3441'},
        border: '1px solid #282B32',
        borderRadius: '50%',
        aspectRatio: '1',
        opacity: { _hover: 'myOpacity' },
        transitionDuration: 'myDuration',
      }
    }
  },
  defaultVariants: { variant: 'primary' }
})