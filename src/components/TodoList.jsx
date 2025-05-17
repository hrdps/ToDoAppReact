import { Grid, GridItem, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/ToDoContext';

const swatches = [
  '#F5FFC6',
  '#CCFBFE',
  '#FFCCC9',
  '#D0F1BF',
  '#CBC7BD',
  '#DEC9FF',
  '#FFE7D1',
];

const TodoList = () => {
  const { filteredTodos } = useContext(TodoContext);
  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      bgColor={'blackAlpha.200'}
      _dark={{ bgColor: 'whiteAlpha.100' }}
      borderRadius={10}
      overflowY={'scroll'}
      overflowX={'hidden'}>
      <Grid
        templateColumns={{
          base: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr',
          xl: '1fr 1fr 1fr 1fr',
        }}
        gap={10}
        w={'100%'}
        p={10}
        alignItems='stretch'>
        <AddTodo swatches={swatches} />
        {filteredTodos.map((item, index) => (
          <GridItem key={index} w='100%' overflow='hidden' h='100%'>
            <TodoItem todo_item={item} swatches={swatches} />
          </GridItem>
        ))}
        <GridItem></GridItem>
      </Grid>
    </VStack>
  );
};

export default TodoList;
