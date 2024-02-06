import {Box, Stack, VStack, Text ,Link} from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"88"} px={"16"} py={["16", "8"]}>
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}>About Creator</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}> I'm Amoush, founder of CryptoClown. Navigate the crypto universe with insights for smart decisions. Join the adventure at CryptoClown!"
</Text>
                </VStack>
                <VStack><Link href="https://aboutamoushryee.netlify.app/" isExternal><Image
                    borderRadius='full'
                    boxSize='120px'
                    src='https://aboutamoushryee.netlify.app/images/mainaboutme.png'
                    alt='Dan Abramov'
                    objectFit={"cover"}
                />
                </Link>
                    <Text>Amoush</Text></VStack>
            </Stack>
        </Box>
    )
}

export default Footer