import { Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

const GreetAndWeather = () => {
  return (
    <HStack w={'100%'} bgColor={'blackAlpha.200'} borderRadius={10} p={10}>
      <VStack w={'100%'} display={'flex'} alignItems={'flex-start'}>
        <Heading className='raleway'>Good Morning Hardeep</Heading>
      </VStack>
    </HStack>
  );
};

export default GreetAndWeather;
