import './App.css'
import { Box, Flex, Separator as ChakraSeparator } from '@chakra-ui/react';

import { Header } from "../widgets/Header";
import { Main } from '../widgets/Main';
import { MainBottom } from '../widgets/MainBottom';
import { Halls } from '../widgets/Halls';
import { Advantages } from '../widgets/Advantages';
import { Book } from '../widgets/Book';
import { Questions } from '../widgets/Questions';
import { Footer } from '../widgets/Footer';

import type { SeparatorProps } from '@chakra-ui/react';


const Separator = ({...others}: SeparatorProps) => (
  <ChakraSeparator borderColor='rgb(48, 50, 55)' height='100%' orientation='vertical' {...others} />
)

const DarkGrid = () => (
  <Flex  position='absolute' inset='0' zIndex='-100'>
    <Box background="linear-gradient(to bottom, #191B20, #1C1F24)" width='20%' />
    <Separator  />
    <Box background="linear-gradient(to bottom, #191B20, #1C1F24)" width='100%' hideBelow='lg' />
    <Separator />
    <Box background="linear-gradient(to bottom, #191B20, #1C1E23)" width='100%' />
    <Separator  />
    <Box background="linear-gradient(to bottom, #191B20, #1C1F24)" width='100%' hideBelow='lg' />
    <Separator />
    <Box background="linear-gradient(to bottom, #191B20, #1C1F24)" width='20%' />
  </Flex>
)

const GrayGrid = () => (
  <Flex position='absolute' inset='0' zIndex='-100' >
    <Box background="#131517" width='20%' />
    <Separator  />
    <Box background="#131517" width='100%'  hideBelow='lg' />
    <Separator />
    <Box background="#131517" width='100%' />
    <Separator  />
    <Box background="#131517" width='100%'  hideBelow='lg' />
    <Separator />
    <Box background="#131517" width='20%' />
  </Flex>
)


export function App() {
  
  return (
    <>
      <Box position='relative' >
        <Box borderBottom='2px dashed #3E4042'>
          <Header />
        </Box>
        <DarkGrid />
      </Box>
      <Box position='relative' >
        <Main />
        <DarkGrid />
      </Box>
      <MainBottom />
      <Box background='#131517'>
        <Halls />
      </Box>
      <Box position='relative'>
        <Advantages />
        <DarkGrid />
      </Box>
      <Box position='relative'>
        <Book />
        <GrayGrid />
      </Box>
      <Box position='relative'>
        <Questions />
        <DarkGrid />
      </Box>
      <Box position='relative'>
        <Footer />
        <GrayGrid />
      </Box>
    </>
  )
}


