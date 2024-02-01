import { Container,Box } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { server } from '../index'
import ErrorComponent from './ErrorComponent'

const CoinDetails = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
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
        <Box width={"full"} borderWidth={1}>laro</Box>
        </>
      )}
    </Container>
  )
}

export default CoinDetails