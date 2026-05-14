import { defineRecipe } from "@chakra-ui/react";

export const container = defineRecipe({
  base: {
    width: '100%',
    maxWidth: '1830px',
    marginInline: 'auto',
    px: { base: '20px', lg: '45px' }
  }
})