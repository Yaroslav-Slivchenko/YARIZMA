import { Box, Button, Center, Circle, Container, Flex, Group, HStack, Image, Link, Span, Text, VStack } from "@chakra-ui/react"
import logo from '../assets/logo.svg'
import phone from '../assets/phone.svg'
import address from '../assets/address.svg'
import calendar from '../assets/calendar.svg'
import arrow from '../assets/arrow.svg'

export const Footer = () => {

  return (
    <Container>
      <Box paddingY={{base: '45px', xl: '95px'}} position='relative'>
        <Flex flexDir={{base: 'column', xl: 'row'}} justifyContent='space-between' gapY='30px'>
          <Image src={logo} width={{base: '162px', xl: '293px'}} />

          <Group gap='17px'>
            <Circle background='#292B30' width='60px' height='60px'>
              <Image src={phone} />
            </Circle>
            <Link href="tel:+38(097)970-90-90" fontSize='15px' color={{ base: 'myLigth', _hover: '#F69020' }}>+38 (097) 970-90-90</Link>
          </Group>
          <Group gap='17px' hideBelow='xl'>
            <Circle background='#292B30' width='60px' height='60px'>
              <Image src={calendar} />
            </Circle>
            <Link fontSize='15px' color={{ base: 'myLigth', _hover: '#F69020' }} >Пн — Вс круглосуточно</Link>
          </Group>
          <Group gap='17px'>
            <Circle background='#292B30' width='60px' height='60px'>
              <Image src={address} />
            </Circle>
            <Link fontSize='15px' color={{ base: 'myLigth', _hover: '#F69020' }}>м. Лубянка</Link>
          </Group>
          
          <Button padding='1px' height='60px' hideBelow='xl' mr='100px'>
            <Center
              color='white'
              height='100%' paddingX='25px' bg='#131517' rounded='60px' 
            >Построить маршрут</Center>
          </Button>
          <Flex flexDir='column' width='200px' gap='16px' hideFrom='xl'>
            <Button variant='transparent'>Наши залы</Button>
            <Button variant='light'>Забронировать</Button>
          </Flex>
        </Flex>

        <VStack position='absolute' top={{base: '35px', xl: '-35px'}} right='0' gap='25px'>
          <Button 
            width={{base: '45px', xl: '70px'}} height={{base: '45px', xl: '70px'}}
            variant='circle' rotate='180deg' pointerEvents='auto' 
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
          >
            <Image src={arrow} rotate='270deg' />
          </Button>
          <Text fontWeight='bold' fontSize='9px' letterSpacing='20%' lineHeight='1' color='#606571' writingMode='vertical-lr' rotate='180deg'>Подняться вверх</Text>
        </VStack>
      </Box>
    </Container>
  )
}