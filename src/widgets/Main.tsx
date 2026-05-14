import { Container, Group, Box, Heading, Text, VStack, Image, Button, Stack } from "@chakra-ui/react"
import Checkbox from '../assets/CheckCircle.svg'
import girl from '../assets/girl.png'
import telegramText from '../assets/telegramText.svg'
import oclock from '../assets/oclock.png'
import mainBackdrop from '../assets/mainBackdrop.png'

export const Main = () => {

  return (
    <Container backgroundImage={`url('${mainBackdrop}') no-repeat right`} position='relative' overflow='hidden'>
      <VStack align='start' pt={{base: '35px', md: '70px'}} pb={{base: '35px', md: '125px'}}  >
        <Text fontSize='clamp(1.125rem, 0.7788rem + 1.5385vw, 2.625rem)' letterSpacing='3%' color='myLigth' mb='10px'>Арендуй Караоке-Зал до 10 человек</Text>
        <Heading 
          maxWidth='1048px' as='h1' mb={{base: '0', md: '60px'}}
          fontWeight='bold' fontSize='clamp(2.25rem, 1.6875rem + 2.5vw, 4.6875rem)' letterSpacing='3%' lineHeight={{base: '1.1', md: '1.2'}} color='myLigth' 
          textTransform='uppercase'  
        >
          возьми алкоголь и еду с собой
          <Box
            display="inline-flex" alignItems="center" ml='12px' px='12px' py='6px'        
            background='#343A3E' borderRadius='60px' as="span"
            fontWeight='normal' fontSize='13px' verticalAlign="middle"
            hideBelow='md'      
          >
            м. Лубянка
          </Box>
        </Heading>
          <Box
            px='12px' py='6px' mb='24px' 
            background='#343A3E'  borderRadius='60px' as="span"
            fontWeight='normal' fontSize='13px' verticalAlign="middle" color='myLigth'
            hideFrom='md'      
          >
            м. Лубянка
          </Box>
        <Stack direction={{base: 'column', md: 'row'}} gap='21px' mb='73px'>
          <Group gap='11px'>
            <Image src={Checkbox} />
            <Text width='200px' fontSize='clamp(0.8125rem, 0.7404rem + 0.3205vw, 1.125rem)' color='myLigth' lineHeight='1.2' >Если хочешь попеть и оторваться</Text>
          </Group>
          <Group gap='11px'>
            <Image src={Checkbox} />
            <Text width='200px' fontSize='clamp(0.8125rem, 0.7404rem + 0.3205vw, 1.125rem)' color='myLigth' lineHeight='1.2' >Отдохнуть после работы</Text>
          </Group>
          <Group gap='11px'>
            <Image src={Checkbox} />
            <Text width='200px' fontSize='clamp(0.8125rem, 0.7404rem + 0.3205vw, 1.125rem)' color='myLigth' lineHeight='1.2' >Хорошо провести время</Text>
          </Group>
        </Stack>
        <Button width='277px'>Забронировать онлайн</Button>
        
      
        
        <Image src={girl} width={{base: '330px', 'md': '700px'}} position='absolute' zIndex='-1' bottom={{base: '-120px', md: '-380px'}} right={{base: '-120px', md: '-200px', '2xl': '200px'}} userSelect='none'  />
        <Image src={oclock} width={{base: '160px', md: '379px'}} position='absolute' zIndex='-1' bottom={{base: '50px', md: '-10px'}} right={{base: '20px', md: '120px', '2xl': '620px'}} userSelect='none' />
        <Image src={telegramText} position='absolute' zIndex='-1' bottom='50px' right='135px' hideBelow='2xl' userSelect='none' />
        
      </VStack>
    </Container>
  )
}