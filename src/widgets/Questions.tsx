import { Accordion, Button, Container, Flex, Grid, Heading, Icon, Image, Span, Text } from "@chakra-ui/react"
import slippers from '../assets/slippers.png'

const data = {
  headings: [
    'Какое у вас караоке?', 
    'Есть ли у вас английские песни?', 
    'Можно ли подключить телефон?', 
    'Сколько микрофонов в каждом зале?', 
    'Есть ли оплата картой?', 
    'Можно приность с собой алкоголь и еду?', 
    'Как расчитывается стоимость?'
  ], 
  text: [
    'Более 50,000 студийных фонограмм. Из них 80% - оригинальные минусовки в качестве PRO (mp3 - WAV).', 
    'Ежемесячное обновления репертуара.', 
    'Более 10,000 специальных фонограмм в сопровождении оригинальных видеоклипов'
  ]
}

export const Questions = () => {

  return (
    <Container py={{base: '50px', lg: '120px'}} >
      <Heading 
         fontWeight='black' fontSize='clamp(2.25rem, 1.6875rem + 2.5vw, 4.6875rem)' lineHeight='1' letterSpacing='3%' textTransform='uppercase' color='myLigth' as='h2'  mb={{base: '40px', xl: '60px'}}
      >
        Вопросы и ответы
      </Heading>
      <Text
        fontSize='clamp(1.125rem, 1.0385rem + 0.3846vw, 1.5rem)' lineHeight='1.3' letterSpacing='3%' textTransform='uppercase' color='myLigth'
        mb={{base: '30px', xl: '55px'}} 
      >
        Мы подготовили ответы на часто задаваемые вопросы
      </Text>
      <Grid gap='65px' templateColumns={{base: 'none', lg: '2fr 1fr'}} templateRows={{base: 'auto auto', lg: 'none'}} >
        <Accordion.Root display='flex' flexDir='column' gap='20px'>
          {data.headings.map(heading => (
            <Accordion.Item key={heading} value={heading}
              cursor='pointer' borderBottom='none'
            >
              
                <Accordion.ItemTrigger 
                  position='relative' bg='#282B32'  mb='20px'
                  fontSize={{base: '14px', lg: '18px'}} color='myLigth' letterSpacing='3%' cursor='pointer' padding={0}
                >
                  <Span padding='25px'>{heading}</Span>
                  <Accordion.ItemIndicator unstyled
                    display='flex' justifyContent='center' alignItems='center'
                    w='43px' h='43px' bg='#34373F' shadow='0 0 16px rgb(0 0 0 / 25%)'
                    position='absolute' right='20px' top='50%' 
                    transitionDuration='myDuration' transform='translateY(-50%)' _open={{'& > svg': {transform: 'rotate(180deg)', stroke: '#606571'}}}
                  >
                    <Icon rotate='270deg' transitionDuration='myDuration' stroke='#FFC619'>
                      <svg width="12" height="19" viewBox="0 0 12 19" stroke="#606571" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4314 1.39679L1.4314 10.6196M10.4314 17.3968L1.4314 8.17401" strokeWidth="4"/>
                      </svg>
                    </Icon>
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                
              
              <Accordion.ItemContent 
                paddingX='25px' cursor='default'
                fontSize={{base: '14px', lg: '16px'}} color='#C4C4C4' letterSpacing='3%' 
              >
                {data.text.map(text => (
                  <Text key={text}>{text}</Text>
                ))}
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <Flex 
          flexDir='column' justifyContent='space-between' position='relative' height={{base: '685px', lg: 'auto'}}
        >
          <Text 
            fontWeight='black' fontSize={{base: '24px', lg: '32px'}} letterSpacing='3%' lineHeight={{base: '1.3', lg: '1.4'}} color='myLigth'
          >
            В нашем заведении Бельгийский ковролин. На входе выдают <Span color='#F69020'>индивидуально запакованные тапочки,</Span> в которые необходимо переобуться.
          </Text>
          <Image src={slippers} width='clamp(462px, 39.8vw, 787px)' height='auto'
            position='absolute' bottom='70px' right='50%' zIndex='-1' transform='translateX(50%)'
          />
          <Button>Забронировать зал</Button>
        </Flex>
      </Grid>
    </Container>
  )
}