import {
  Button,
  CloseButton,
  ColorPicker,
  Dialog,
  Field,
  Heading,
  Input,
  Portal,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { RiAddLargeLine, RiCheckLine } from '@remixicon/react';
import React, { useState, useRef, useContext } from 'react';
import { TodoContext } from '../context/ToDoContext';

const AddTodo = ({ swatches }) => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    note: '',
    color: { valueAsString: '#F5FFC6' },
  });
  const { addTodo } = useContext(TodoContext);

  const closeRef = useRef(null);

  const saveEditHandler = () => {
    const data = newTodo;
    if (newTodo.title !== '') {
      addTodo(newTodo.title, newTodo.note, newTodo.color.valueAsString);
      setNewTodo({
        ...newTodo,
        note: '',
        title: '',
        color: { valueAsString: '#F5FFC6' },
      });
      if (closeRef.current) {
        closeRef.current.click();
      }
    }
  };

  return (
    <Dialog.Root placement={'center'}>
      <Dialog.Trigger asChild>
        <VStack
          w={'100%'}
          h={'100%'}
          bgColor={'white'}
          _dark={{ bgColor: 'whiteAlpha.300' }}
          p={5}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={10}
          _hover={{ shadow: 'md' }}>
          <Heading className='raleway' fontSize={40}>
            <RiAddLargeLine />
          </Heading>
        </VStack>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Add a To-Do</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Field.Root required py={2}>
                <Field.Label>
                  Title <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  placeholder='Title'
                  type='text'
                  value={newTodo.title}
                  onChange={(e) =>
                    setNewTodo({ ...newTodo, title: e.target.value })
                  }
                />
              </Field.Root>
              <Field.Root py={2}>
                <Field.Label>Note</Field.Label>
                <Textarea
                  placeholder='Note'
                  value={newTodo.note}
                  onChange={(e) =>
                    setNewTodo({ ...newTodo, note: e.target.value })
                  }
                />
              </Field.Root>
              <Field.Root py={2}>
                <Field.Label>Select Color</Field.Label>
                <ColorPicker.Root
                  alignItems='flex-start'
                  onValueChange={(val) =>
                    setNewTodo({ ...newTodo, color: val })
                  }>
                  <ColorPicker.HiddenInput />
                  <ColorPicker.SwatchGroup defaultValue='pink'>
                    {swatches.map((item) => (
                      <ColorPicker.SwatchTrigger key={item} value={item}>
                        <ColorPicker.Swatch value={item} borderRadius={20}>
                          <ColorPicker.SwatchIndicator
                            color={'black'}
                            defaultValue={'#F5FFC6'}>
                            <RiCheckLine />
                          </ColorPicker.SwatchIndicator>
                        </ColorPicker.Swatch>
                      </ColorPicker.SwatchTrigger>
                    ))}
                  </ColorPicker.SwatchGroup>
                </ColorPicker.Root>
              </Field.Root>
              <Button my={4} onClick={saveEditHandler}>
                Save
              </Button>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton ref={closeRef} size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddTodo;
