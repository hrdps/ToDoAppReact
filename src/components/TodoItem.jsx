import { Heading, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { TodoContext } from '../context/ToDoContext';

const TodoItem = ({ todo_item }) => {
  const { toggleComplete, deleteTodo } = useContext(TodoContext);
  return (
    <VStack
      w={'100%'}
      h={'300px'}
      bgColor={todo_item.color}
      p={5}
      display={'flex'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      borderRadius={10}
      _hover={{ shadow: 'md' }}>
      <Heading>{todo_item.title}</Heading>
    </VStack>
  );
};

export default TodoItem;
