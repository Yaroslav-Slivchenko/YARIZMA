import { defineRecipe } from "@chakra-ui/react";

export const link = defineRecipe({
  variants: {
    variant: {
      primary: {
        opacity: 'myOpacity',
        transitionDuration: 'myDuration',
        textWrap: 'nowrap',
      }
    },
  },
  defaultVariants: { variant: 'primary', }
})