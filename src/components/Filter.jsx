import { Tabs } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { TodoContext } from '../context/ToDoContext';

const Filter = () => {
  const { filter, setFilter } = useContext(TodoContext);
  const handleTabChange = (toggle) => {
    setFilter(toggle.value);
  };
  return (
    <>
      <Tabs.Root
        shadow={'sm'}
        variant='enclosed'
        defaultValue={'all'}
        onValueChange={handleTabChange}>
        <Tabs.List
          borderRadius={10}
          className='inter'
          gap={[1, 5]}
          py={2}
          px={2}
          transition={'0.5s'}>
          <Tabs.Trigger
            className='raleway'
            px={6}
            fontSize={20}
            value='all'
            transition={'0.3s'}
            _selected={{
              borderRadius: 8,
              color: 'white',
              bg: 'blackAlpha.800',
            }}>
            All
          </Tabs.Trigger>
          <Tabs.Trigger
            fontSize={20}
            value='pending'
            transition={'0.3s'}
            _selected={{
              borderRadius: 8,
              color: 'red.400',
              bg: 'black',
            }}>
            Pending
          </Tabs.Trigger>
          <Tabs.Trigger
            fontSize={20}
            value='completed'
            transition={'0.3s'}
            _selected={{
              borderRadius: 8,
              color: 'green.400',
              bg: 'black',
            }}>
            Completed
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </>
  );
};

export default Filter;
