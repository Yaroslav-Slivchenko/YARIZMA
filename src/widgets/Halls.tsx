import { useEffect, useRef, useState } from "react"
import { Button, Container, Flex, Group, Heading, Image, Mark, Presence, Tabs, Text, VStack } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs } from 'swiper/modules'

import type {Swiper as SwiperType} from 'swiper'

// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/thumbs'


import first from '../assets/carousel/1.png'
import second from '../assets/carousel/2.png'
import third from '../assets/carousel/3.png'
import fourd from '../assets/carousel/4.png'
import fifth from '../assets/carousel/5.png'

import cube from '../assets/carousel/cube.svg'
import fourArrow from '../assets/carousel/fourArrow.svg'
import nation from '../assets/carousel/nation.svg'
import eye from '../assets/carousel/eye.svg'

import arrow from '../assets/arrow.svg'

const halls = {
  "Hall №1": [first, second, third, fourd, fifth],
  "Hall №2": [first, second, third, fourd, fifth],
  "Hall №3": [first, second, third, fourd, fifth],
  "Hall №4": [first, second, third, fourd, fifth],
  "Hall №5": [first, second, third, fourd, fifth],
}

export const Halls = () => {
  const [valueTabs, setValueTabs] = useState('Hall №1')
  const [stepSlide, setStepSlide] = useState(0)
  
  const currentHall = halls[valueTabs as keyof typeof halls]
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    swiperRef.current?.slideTo(stepSlide)
  }, [stepSlide])

  useEffect(() => {
    setStepSlide(0)
  }, [valueTabs])

 

  return (
    <Container position='relative' isolation="isolate">
      <Flex flexDirection='column' align='start' py={{base: '55px', md: '110px'}} pointerEvents="none">

        <Heading fontWeight='black' fontSize='clamp(2.25rem, 1.6875rem + 2.5vw, 4.6875rem)' lineHeight='1.2' letterSpacing='3%' color='myLigth' mb='35px' as='h2' textTransform='uppercase' textWrap='nowrap'>Наши залы</Heading>
        <Text maxWidth='435px' fontSize='clamp(1.125rem, 1.0385rem + 0.3846vw, 1.5rem)' letterSpacing='3%' color='myLigth' mb={{base: '40px', md: '75px'}}>Ознакомтесь с атмосферой праздника</Text>

        <Tabs.Root 
          defaultValue="Hall №1" variant='plain' pointerEvents="auto"
          onValueChange={data => setValueTabs(data.value)}
          mb={{base: '550px', 'xl': '35px'}} unstyled
        >
          <Tabs.List 
            display='flex' flexWrap='wrap' gapX='40px' gapY='10px' maxWidth='400px'
            fontWeight='bold' fontSize='15px' letterSpacing='0.5%' textWrap='nowrap'
          >
            <Tabs.Trigger value="Hall №1" cursor='pointer' opacity={{_hover: 'myOpacity'}} color={{base: '#606571', _selected: '#FFC619'}} transitionDuration='myDuration'>Hall №1</Tabs.Trigger>
            <Tabs.Trigger value="Hall №2" cursor='pointer' opacity={{_hover: 'myOpacity'}} color={{base: '#606571', _selected: '#FFC619'}} transitionDuration='myDuration'>Hall №2</Tabs.Trigger> 
            <Tabs.Trigger value="Hall №3" cursor='pointer' opacity={{_hover: 'myOpacity'}} color={{base: '#606571', _selected: '#FFC619'}} transitionDuration='myDuration'>Hall №3</Tabs.Trigger>
            <Tabs.Trigger value="Hall №4" cursor='pointer' opacity={{_hover: 'myOpacity'}} color={{base: '#606571', _selected: '#FFC619'}} transitionDuration='myDuration'>Hall №4</Tabs.Trigger>
            <Tabs.Trigger value="Hall №5" cursor='pointer' opacity={{_hover: 'myOpacity'}} color={{base: '#606571', _selected: '#FFC619'}} transitionDuration='myDuration'>Hall №5</Tabs.Trigger>
            <Tabs.Indicator />
          </Tabs.List>
        </Tabs.Root>
       
        <Presence
          position='absolute' zIndex={-1} top={{base: '290px', md: '390px', 'xl': '0'}} left={{'xlDown': '0'}} right='0'
          maxWidth={{'xl': '75%'}} maxHeight={{'xlDown': '500px'}} mb={{base: '27px', '2xl': '0'}} 
          key={valueTabs}
          present={true}
          animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
          animationDuration="moderate"
          height='100%'
        >
          <Swiper 
            modules={[Thumbs]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              setStepSlide(swiper.activeIndex)
            }}
            thumbs={{swiper: '.my-thumbs-swiper' }}
            style={{width: '100%', height: '80%', pointerEvents: 'auto'}}
          >
            {currentHall.map(slide => (
              <SwiperSlide style={{width: '100%', height: '100%'}}>
                <Image src={slide} width='100%' height='100%' objectFit='cover' />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper 
            modules={[Thumbs]}
            watchSlidesProgress
            className="my-thumbs-swiper"
            slidesPerView={currentHall.length}
            style={{pointerEvents: 'auto', width: '100%', height: '20%'}}
          >
            {currentHall.map(slide => (
              <SwiperSlide style={{position: 'relative', cursor: 'pointer', width: '100%', height: '100%' }}>
                <Image src={slide} width='100%' height='100%' objectFit='cover' />
                <Flex
                  opacity={{base: '0', _hover: '0.5'}} transitionDuration="myDuration"
                  justifyContent='center' align='center' position='absolute' 
                  inset='0' background='#FFC619' width='100%' height='100%'
                >
                  <Image src={eye} />
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Presence>
   
            {/* Carousel из ChakraUI тупо не подерживает планый свайп слайдов для внешнего управления и багуется при внутренем управлении Thumbnail Indicators */}

            {/* <Carousel.Root gap={0} slideCount={currentHall.length} onPageChange={data => setStepSlide(data.page)} page={stepSlide} maxWidth='1400px' height='100%' pointerEvents="auto">
              <Carousel.ItemGroup>
                {currentHall.map((image, index) => (
                  <Carousel.Item index={index} key={image}>
                    <Image src={image} w='100%' h='100%' objectFit='cover' />
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>
              <Carousel.Control>
                  <Carousel.PrevTrigger />  
                  <Carousel.IndicatorGroup width='100%' gap={0}>
                    {currentHall.map((image, index) => (
                      <Carousel.Indicator 
                        display={{_current: 'none'}} w={`1/${currentHall.length - 1}`} unstyled 
                        index={index} key={image} position='relative' css={{
                          '&:hover > div': {              
                            opacity: '0.5',
                          }
                        }}  
                      >
                        <Image src={image} w='100%' h='180px' objectFit='cover' />
                        <Flex
                          opacity='0' transitionDuration="myDuration"
                          justifyContent='center' align='center' position='absolute' 
                          inset='0' background='#FFC619' 
                        >
                          <Image src={eye} />
                        </Flex>
                      </Carousel.Indicator>
                    ))}
                  </Carousel.IndicatorGroup>
              </Carousel.Control>
            </Carousel.Root> */}

        <VStack align='start' gap='11px' mb='88px'>
          <Group gap='11px' width='325px' padding='10px 12px' background='linear-gradient(to right, #493219, transparent 35%)'>
            <Image src={cube} />
            <Text fontSize={{base: '14px', lg: '18px'}} letterSpacing='0.5%' color='myLigth'>№ 1</Text>              
          </Group>
          <Group gap='11px' width='325px' padding='10px 12px' background='linear-gradient(to right, #493219, transparent 55%)'>
            <Image src={fourArrow} />
            <Text fontSize={{base: '14px', lg: '18px'}} letterSpacing='0.5%' color='myLigth'>40 м2</Text>              
          </Group>    
          <Group gap='11px' width='325px' padding='10px 12px' background='linear-gradient(to right, #493219, transparent 85%)'>
            <Image src={nation} />
            <Text fontSize={{base: '14px', lg: '18px'}} letterSpacing='0.5%' color='myLigth'>до 20-ти человек</Text>              
          </Group>            
        </VStack>         

        <Group gap='25px' mb='60px'>
          <Button 
            variant='circle' pointerEvents='auto' 
            onClick={() => setStepSlide(stepSlide => (stepSlide - 1 +  currentHall.length) % currentHall.length)}
          >
            <Image src={arrow} w='70px' />
          </Button>            
          <Text fontSize='16px' color='#606571'>
            <Mark display='inline' fontWeight='bold' fontSize='20px' color='myLigth'>{stepSlide+1}</Mark>
            {` из ${currentHall.length}`}
          </Text>
          <Button 
            variant='circle' rotate='180deg' pointerEvents='auto' 
            onClick={() => setStepSlide(stepSlide => (stepSlide + 1) % currentHall.length)}
          >
            <Image src={arrow} w='70px' />
          </Button>      
        </Group>

        <Button pointerEvents='auto'>Забронировать</Button>

      </Flex>
              

    </Container>
  )
}