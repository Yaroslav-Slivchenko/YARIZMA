import { Grid, Group, Image, Separator, Text } from "@chakra-ui/react"

import microphone from '../assets/microphone.svg'
import champagne from '../assets/champagne.svg'
import moneyHand from '../assets/money-hand.svg'
import surprise from '../assets/surprise.svg'

export const MainBottom = () => {

  return (
    <Grid templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)'}}>
      <Group display={{base: 'block', md: 'flex'}} gap='37px' background='#282B32' px={{ base: '20px', '2xl': '60px' }} py='30px'>
        <Group gap='18px'>
          <Image src={microphone} />
          <Separator width='34px' borderColor='#7B6F45'  />
        </Group>
        <Text maxWidth='195px' fontSize='16px' letterSpacing='3%' color='myLigth'>Профессиональное караоке AST-50</Text>
      </Group>
      <Group display={{base: 'block', md: 'flex'}} gap='37px' background='#202124' px={{ base: '20px', '2xl': '60px' }} py='30px'>
         <Group gap='18px'>
          <Image src={champagne} />
          <Separator width='34px' borderColor='#7B6F45'  />
        </Group>
        <Text maxWidth='195px' fontSize='16px' letterSpacing='3%' color='myLigth'>Без пробкового сбора</Text>
      </Group>
      <Group display={{base: 'block', md: 'flex'}} gap='37px' background={{base: '#202124', xl: '#282B32'}} px={{ base: '20px', '2xl': '60px' }} py='30px'>
         <Group gap='18px'>
          <Image src={moneyHand} />
          <Separator width='34px' borderColor='#7B6F45'  />
        </Group>
        <br />
        <Text maxWidth='195px' fontSize='16px' letterSpacing='3%' color='myLigth'>Без депозита</Text>
      </Group>
      <Group display={{base: 'block', md: 'flex'}} gap='37px' background={{base: '#282B32', xl: '#202124'}} px={{ base: '20px', '2xl': '60px' }} py='30px'>
        <Group gap='18px'>
          <Image src={surprise} />
          <Separator width='34px' borderColor='#7B6F45'  />
        </Group>
        <Text maxWidth='195px' fontSize='16px' letterSpacing='3%' color='myLigth'>Скидка в День Рождения</Text>
      </Group>
    </Grid>
  )
}