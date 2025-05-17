import { VStack } from '@chakra-ui/react';
import './App.css';
import Filter from './components/Filter';
import GreetAndSync from './components/GreetAndSync';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/ToDoContext';

function App() {
  return (
    <TodoProvider>
      <VStack w={'100vw'} h={'100vh'} p={10} gap={5}>
        <GreetAndSync />
        <Filter />
        <TodoList />
      </VStack>
    </TodoProvider>
  );
}

export default App;
