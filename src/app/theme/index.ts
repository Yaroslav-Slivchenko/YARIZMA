import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { button } from "./recipes/button"
import { container } from "./recipes/container"
import { link } from "./recipes/link"

const config = defineConfig({
  theme: {
    recipes: {
      button,
      container,
      link,
    },
    tokens: {
      colors: {
        myDark: { value: '#252121' },
        myLigth: { value: '#FFFFFF' }
      },
       fonts: {
        body: { value: "Muller, sans-serif" },
        heading: { value: "Muller, sans-serif" },
      },
      lineHeights: {
        normal: { value: '1.5' } 
      },
      opacity: {
        myOpacity: { value: '0.8' }
      },
      durations: {
        myDuration: { value: '0.2s' }
      }
    },
  },

})

export const system = createSystem(defaultConfig, config)