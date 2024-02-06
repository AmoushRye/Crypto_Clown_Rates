import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    // w={{ base: "full", sm: "50%", md: "30%", lg: "20%" }} // Responsive width
    // h="auto" // Maintain aspect ratio
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"100vh"}>
      <Text
        fontSize={{ base: "0.2xl", md: "0.5xl", lg: "1xl", xl: "2xl" }}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"white"}
        maxW={"50%"}
        mx={"auto"}
      >
        Explore real-time market updates, in-depth analysis, and the latest news. Whether you're an investor or enthusiast, stay informed, make better decisions, and navigate the crypto landscape with ease.
      </Text>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "15px",
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
        />
      </motion.div>

      <Text
        fontSize={{ base: "2xl", md: "2xl", lg: "3xl", xl: "5xl" }}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-7"}
      >
        CryptoClown
      </Text>
    </Box>
  );
};

export default Home;