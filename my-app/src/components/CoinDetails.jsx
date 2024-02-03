import { Container,Box, RadioGroup, Radio, HStack, VStack,Text ,Image, Stat, StatLabel, StatHelpText, StatArrow} from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { server } from '../index'
import ErrorComponent from './ErrorComponent'

const CoinDetails = () => {
  const [coin, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  const params = useParams();
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`)
        console.log(data)
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false);
      }
    }
    fetchCoins();
  }, [params.id])
  if (error) {
    return <ErrorComponent message={"Error while Fetching Coin"} />
  }
  return (
    <Container maxW={"container.xl"}>
      {loading?<Loader/>:(
        <>
        <Box width={"full"} borderWidth={1}>okk</Box>
        {/* Button */}
        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
        <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
          <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
            Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}
          </Text>
          <Image src={coin.image.large} w={"16"} h={"16"} objectFit={"contain"}/>
          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatLabel>{currencySymbol}{coin.market_data.current_price[currency]}</StatLabel>
            <StatHelpText>
              <StatArrow type={coin.market_data.price_change_percentage_24h>0?"increase":"decrease"}/>
              {coin.market_data.price_change_percentage_24h}%
            </StatHelpText>
          </Stat>
        </VStack>
        </>
      )}
    </Container>
  )
}

export default CoinDetails