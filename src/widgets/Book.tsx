import { useEffect, useRef, useState } from "react"
import { Button, Container, Flex, Group, Heading, Image, Mark, Text, VStack } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"
import type {Swiper as SwiperType} from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'


import first from '../assets/screenshot/1.png'
import second from '../assets/screenshot/2.png'
import third from '../assets/screenshot/3.png'
import fourd from '../assets/screenshot/4.png'
import fifth from '../assets/screenshot/5.png'

import frame from '../assets/screenshot/frame.svg'

import exit from '../assets/screenshot/icon/exit.svg'
import people from '../assets/screenshot/icon/people.svg'
import time from '../assets/screenshot/icon/time.svg'
import date from '../assets/screenshot/icon/date.svg'
import seconder from '../assets/screenshot/icon/seconder.svg'

import arrow from '../assets/arrow.svg'



const screenshots = [
  [first, exit, 'Перейти в чат-бот fh_harizma_bot'],
  [second, people, 'Выбрать колличество человек'],
  [third, time, 'Выбрать колличество часов посещения'],
  [fourd, date, 'Выбрать дату'],
  [fifth, seconder, 'Выбрать время старта брони'],
  [first, exit, 'Перейти в чат-бот fh_harizma_bot'],
  [second, people, 'Выбрать колличество человек'],
  [third, time, 'Выбрать колличество часов посещения'],
  [fourd, date, 'Выбрать дату'],
  [fifth, seconder, 'Выбрать время старта брони'],
]

export const Book = () => {
  const [stepSlide, setStepSlide] = useState(1)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    swiperRef.current?.slideTo(stepSlide)
  }, [stepSlide])

  return (
    <Container >
      <Flex flexDirection='column' py={{base: '55px', md: '100px'}} height='1000px'>
        <Heading 
          fontWeight='black' fontSize='clamp(2.25rem, 1.6875rem + 2.5vw, 4.6875rem)' lineHeight='1' letterSpacing='3%' textTransform='uppercase' color='myLigth' as='h2' 
          mb={{base: '40px', xl: '60px'}}
          >
          Как забронировать зал?
        </Heading>
        <Text 
          fontSize='clamp(1.125rem, 1.0385rem + 0.3846vw, 1.5rem)' lineHeight='1' letterSpacing='3%' textTransform='uppercase' color='myLigth'
          mb={{base: '30px', xl: '55px'}} 
        >
          бронирование по шагам в чат-боте
        </Text>

        <Swiper 
          modules={[EffectCoverflow]} centeredSlides 
          effect="coverflow" initialSlide={4}
          onSwiper={swiper => swiperRef.current = swiper}
          onSlideChange={swiper => setStepSlide(swiper.activeIndex)}
          breakpoints={{ 
            0: {
              slidesPerView: 2
            },
            827: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5 + .3
            }
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -50,
            depth: 0, 
            modifier: 1,
            scale: 0.90,
            slideShadows: false,
          }}
          style={{height: '600px', position: 'absolute', left: '0', right: '0', bottom: '100px'}}
        >
          {screenshots.map(([screenshots, icon, text]) => (
            <SwiperSlide>
              <VStack userSelect='none'>
                <Flex position='relative' alignContent='center' mb='23px'>
                  <Image src={frame} position='absolute' width='100%' height='100%' overflow='visible' />
                  <Image src={screenshots} height='500px' />
                </Flex>
                <Group gap='16px'>
                  <Image src={icon} width='41px' />
                  <Text fontWeight='medium' fontSize='15px' color='myLigth' letterSpacing='3%'>{text}</Text>
                </Group>
              </VStack>
            </SwiperSlide>
          ))}
          
        </Swiper>
        
       <Group position='absolute' top={{base: '925px', lg: '200px'}} right={{base: '', lg: '50px'}} gap='25px' mb='60px'>
          <Button 
            variant='circle' pointerEvents='auto' w={{base: '50px', lg: '70px'}}  h={{base: '50px', lg: '70px'}}
            onClick={() => setStepSlide(stepSlide => (stepSlide - 1 +  screenshots.length) % screenshots.length)}
          >
            <Image src={arrow} w='9px' />
          </Button>            
          <Text fontSize='16px' color='#606571'>
            <Mark display='inline' fontWeight='bold' fontSize='20px' color='myLigth'>{stepSlide+1}</Mark>
            {` из ${screenshots.length}`}
          </Text>
          <Button 
            variant='circle' rotate='180deg' pointerEvents='auto' w={{base: '50px', lg: '70px'}} h={{base: '50px', lg: '70px'}}
            onClick={() => setStepSlide(stepSlide => (stepSlide + 1) % screenshots.length)}
          >
            <Image src={arrow} w='9px' />
          </Button>      
        </Group>

      </Flex>
    </Container>
  )
}