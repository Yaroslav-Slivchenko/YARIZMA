import { Button, Circle, Container, Dialog, Flex, Group, Image, Link, Spacer, VStack } from "@chakra-ui/react"
import logo from '../assets/logo.svg'
import phone from '../assets/phone.svg'
import address from '../assets/address.svg'
import burger from '../assets/burger.svg'
import cross from '../assets/cross.svg'


export const Header = () => {

  return (
    <Container>
      <Flex alignItems='center' py='40px'  position='relative' >

        <Image src={logo} width={{base: '162px', lg: '250px', xl: '300px'}} />
        <Spacer />
        <Group gap='17px' mr='45px' hideBelow='md'>
          <Circle background='#292B30' width='60px' height='60px'>
            <Image src={phone} />
          </Circle>
          <Link href="tel:+38(097)970-90-90" fontSize='15px' color={{ base: 'myLigth', _hover: '#F69020' }}>+38 (097) 970-90-90</Link>
        </Group>
        <Group gap='17px' mr={{ base: '40px', '2xl': '185px', }}>
          <Circle background='#292B30' width='60px' height='60px'>
            <Image src={address} />
          </Circle>
          <Link fontSize='15px' color={{ base: 'myLigth', _hover: '#F69020' }} hideBelow='sm'>м. Лубянка</Link>
        </Group>
        <Group gap='25px' hideBelow='xl'>
          <Button variant='transparent'>Наши залы</Button>
          <Button variant='light'>Забронировать</Button>
        </Group>
       

        <Dialog.Root size='cover' placement='top'>
          <Dialog.Trigger asChild>
            <Button variant='ghost' hideFrom='xl'>
              <Image src={burger} />
            </Button>
          </Dialog.Trigger>
          <Dialog.Backdrop />
          <Dialog.Positioner padding='0' height='430px'>
            <Dialog.Content background='#282B32' px='11px' pt='28px' rounded='0'>

              <Group mb='34px'>
                <Image src={logo} width='162px' />
                <Spacer />
                <Dialog.CloseTrigger asChild position='static'>
                  <Button variant='ghost'>
                    <Image src={cross} />
                  </Button>
                </Dialog.CloseTrigger>
              </Group>
              
              
              <Group gap='17px' mb='13px'>
                <Circle background='#373A40' width='60px' height='60px'>
                  <Image src={address} />
                </Circle>
                <Link fontSize='15px' color={{ base: 'myLigth', _hover: '#F69020' }}>м. Лубянка</Link>
              </Group>
              <Group gap='17px' mb='32px'>
                <Circle background='#373A40' width='60px' height='60px'>
                  <Image src={phone} />
                </Circle>
                <Link href="tel:+38(097)970-90-90" fontSize='14px' color={{ base: 'myLigth', _hover: '#F69020' }}>+38 (097) 970-90-90</Link>
              </Group>
              <VStack align='start' gap='25px'>
                <Button variant='transparent' paddingInline='0' width='200px'>Наши залы</Button>
                <Button variant='light'>Забронировать</Button>
              </VStack>

            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Root>

      </Flex>
    </Container>
  )
}