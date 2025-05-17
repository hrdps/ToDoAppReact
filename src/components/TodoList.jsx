import { Grid, GridItem, Heading, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/ToDoContext';

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
];

const TodoList = () => {
  const { filteredTodos } = useContext(TodoContext);
  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      bgColor={'blackAlpha.200'}
      borderRadius={10}
      overflowY={'scroll'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={10}
        w={'100%'}
        p={10}>
        {' '}
        <AddTodo />
        {filteredTodos.map((item, index) => (
          <GridItem key={index}>
            <TodoItem todo_item={item} />
          </GridItem>
        ))}
        <GridItem></GridItem>
      </Grid>
    </VStack>
  );
};

export default TodoList;
