import { VStack } from '@chakra-ui/react';
import './App.css';
import Filter from './components/Filter';
import GreetAndSync from './components/GreetAndSync';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/ToDoContext';

function App() {
  return (
    <TodoProvider>
      <VStack
        w={'100vw'}
        h={'100vh'}
        p={[5, 5, 10, 10]}
        gap={5}
        bg={'url(./assets/bg_light.jpg)'}
        _dark={{ bg: 'url(./assets/bg_dark.jpg)' }}
        bgSize={'cover'}
        bgPos={'bottom right'}>
        <GreetAndSync />
        <Filter />
        <TodoList />
      </VStack>
    </TodoProvider>
  );
}

export default App;
