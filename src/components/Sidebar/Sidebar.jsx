import { Box, Flex, Link} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramLogo } from '../../assets/constants'

const Sidebar = () => {
  return <Box
  height={"100vh"}
  borderRight={"1px solid"}
  borderRadius={4}
  px={{base:2,md:4}}
  py={8}
  position={"sticky"}
  top={0}
  left={0}
  >
<Flex direction={"column"} gap={10} w="full" height={"full"}>
    <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}} cursor="pointer" >
    <InstagramLogo />
        </Link>
</Flex>
  </Box>
}

export default Sidebar