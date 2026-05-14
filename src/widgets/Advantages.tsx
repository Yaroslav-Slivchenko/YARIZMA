import { Box, Button, Container, Flex, Grid, Group, Heading, Image, Mark, Text } from "@chakra-ui/react"

import shirt from '../assets/shirt.png'
import disk from '../assets/disk.png'
import dance from '../assets/dance.png'
import moneyHand from '../assets/money-hand.svg'
import arrow from '../assets/arrowInCricle.png'
import champagne from '../assets/champagne.svg'
import checkbox from '../assets/chekbox.svg'
import microphone from '../assets/microphone.png'

export const Advantages = () => {

  return (
    <Container position="relative" py={{base: '55px', md: '100px'}}>
      <Heading 
        fontWeight='black' fontSize='clamp(2.25rem, 1.6875rem + 2.5vw, 4.6875rem)' color='myLigth' lineHeight='1' letterSpacing='3%' textTransform='uppercase' as='h2'
        mb='64px'
      >
        Наши Преимущества
      </Heading>
      <Text 
        fontSize='clamp(1.125rem, 1.0385rem + 0.3846vw, 1.5rem)' lineHeight='1' color='myLigth' letterSpacing='3%' textTransform='uppercase'
        mb='66px'
      >
        Почему гости выбирают нас
      </Text>

      <Flex display={{base: 'contents', xl: 'flex'}} justifyContent='space-between' gap='100px'>
         <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', '2xl': 'repeat(3, 1fr)'}} gap={{base: '15px', xl: '30px'}} mb={{xlDown: '55px'}}>
          <Flex display={{base: 'flex', xl: 'contents'}} gap='15px' flexDirection='column'>
            <Box pt='50px' pb='10px' px='50px' background='#282B32'>
              <Image src={shirt} width='86px' mb='30px' />
              <Text fontWeight='extrabold' fontSize='18px' letterSpacing='3%' color='myLigth'>Никакого дресс-контроля</Text>
            </Box>
            <Box pt='50px' pb='10px' px='50px' background='#202124'>
              <Image src={disk} width='86px' mb='30px' />
              <Text fontWeight='extrabold' fontSize='18px' letterSpacing='3%' color='white' mb='16px'>~ 40.000 песен в сет листе</Text>
              <Group gapX='10px'>
                <Image src={checkbox} />
                <Text fontSize='16px' letterSpacing='3%' color='#C4C4C4' mb='16px'>Более 50,000 студийных фонограмм</Text>
              </Group>
              <Group gapX='10px'>
                <Image src={checkbox} />
                <Text fontSize='16px' letterSpacing='3%' color='#C4C4C4'>Ежемесячное обновления репертуара</Text>
              </Group>
            </Box>
            <Box pt='50px' pb='10px' px='50px' background='#282B32'>
              <Image src={dance} width='86px' mb='30px' />
              <Text fontWeight='extrabold' fontSize='18px' letterSpacing='3%' color='white' mb='16px'>Индивидуальные залы</Text>
              <Group gapX='10px'>
                <Image src={checkbox} />
                <Text fontSize='16px' letterSpacing='3%' color='#C4C4C4'>Ежемесячное обновления репертуара</Text>
              </Group>
            </Box>
          </Flex>
          <Flex display={{base: 'flex', xl: 'contents'}} gap='15px' flexDirection='column'>
            <Box pt='50px' pb='10px' px='50px' background='#202124'>
              <Image src={moneyHand} width='86px' mb='30px' />
              <Text fontWeight='extrabold' fontSize='18px' letterSpacing='3%' color='white' mb='16px'>Без депозита</Text>
              <Group gapX='10px'>
                <Image src={checkbox} />
                <Text fontSize='16px' letterSpacing='3%' color='#F69020'>Только Ваша компания</Text>
              </Group>
              <Group display='flex' gapX='10px'>
                <Image src={checkbox} />
                <Text fontSize='16px' letterSpacing='3%' color='#C4C4C4'>Только Ваша компания</Text>
              </Group>
            </Box>
            <Box pt='50px' pb='10px' px='50px' background='#282B32'>
              <Image src={arrow} width='86px' mb='30px' />
              <Text fontWeight='extrabold' fontSize='18px' letterSpacing='3%' color='white' mb='16px'>В самом центре Москвы</Text>
              <Group display='flex' gapX='10px'>
                <Image src={checkbox} />
                <Text fontSize='16px' letterSpacing='3%' color='#C4C4C4'>Только Ваша компания</Text>
              </Group>
            </Box>
            <Box pt='50px' pb='10px' px='50px' background='#202124'>
              <Image src={champagne} width='86px' mb='30px' />
              <Text fontWeight='extrabold' fontSize='18px' letterSpacing='3%' color='white' mb='16px'>Нет пробкового сбора</Text>
              <Group display='flex' gapX='10px'>
                <Image src={checkbox} />
                <Text fontSize='16px' letterSpacing='3%' color='#C4C4C4'>Можно приносить с собой еду, напитки и алкоголь <Mark color='#F69020'>без пробкового сбора</Mark> </Text>
              </Group>
            </Box>
          </Flex>
        </Grid>

        <Box display={{base: 'contents', xl: 'block'}} position='relative' alignContent='end' isolation='isolate'>
          <Image display={{xlDown: 'none'}} src={microphone} width='500px' position='absolute' zIndex='-1' bottom='100px' />
          <Button width={{base: '100%', xl: '277px'}}>Забронировать зал</Button>
        </Box>
      </Flex>

      <Image display={{xl: 'none'}} src={microphone} width='280px' position='absolute' zIndex={-1} bottom='80px' left='0' />
    </Container>
  )
}