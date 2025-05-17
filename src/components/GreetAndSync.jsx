import { Heading, HStack, VStack } from '@chakra-ui/react';
import { RiDownloadCloud2Line } from '@remixicon/react';
import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/ToDoContext';

const GreetAndSync = () => {
  const [now, setNow] = useState(new Date());
  const { addTodo } = useContext(TodoContext);

  const fetchAndAddRandomTodos = async () => {
    try {
      const res = await fetch('https://dummyjson.com/todos/random/5');
      const data = await res.json();

      const swatches = [
        '#F5FFC6',
        '#CCFBFE',
        '#FFCCC9',
        '#D0F1BF',
        '#CBC7BD',
        '#DEC9FF',
        '#FFE7D1',
      ];

      data.forEach((todo) => {
        addTodo(
          todo.todo,
          'Imported from DummyJSON API',
          swatches[Math.floor(Math.random() * swatches.length)]
        );
      });
    } catch (error) {
      console.error('Error fetching random todos:', error);
    }
  };

  const getGreeting = () => {
    const hour = now.getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning!';
    if (hour >= 12 && hour < 17) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  const formatDateTime = () => {
    const options = { month: 'long' };
    const month = now.toLocaleString('en-US', options);
    const day = now.getDate();
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000); // Update every 60 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <HStack
      w={'100%'}
      bgColor={'whiteAlpha.500'}
      backdropFilter={'blur(10px)'}
      _dark={{ bgColor: 'whiteAlpha.300' }}
      shadow={'sm'}
      borderRadius={10}
      p={[5, 5, 10, 10]}>
      <HStack w={'100%'}>
        <VStack w={'80%'} display={'flex'} alignItems={'flex-start'}>
          <Heading
            fontWeight={'900'}
            className='doto'
            fontSize={[18, 22, 24, 28, 30, 30]}
            w={'100%'}>
            {getGreeting()}
            {'  '}
            {formatDateTime()}
          </Heading>
        </VStack>
        <VStack width='20%' display={'flex'} alignItems={'flex-end'}>
          <RiDownloadCloud2Line
            size={30}
            cursor={'pointer'}
            onClick={() => {
              fetchAndAddRandomTodos();
            }}
          />
        </VStack>
      </HStack>
    </HStack>
  );
};

export default GreetAndSync;
