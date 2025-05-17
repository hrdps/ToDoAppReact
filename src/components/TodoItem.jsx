import {
  Button,
  CloseButton,
  ColorPicker,
  Dialog,
  Field,
  Heading,
  HStack,
  Input,
  Menu,
  Portal,
  Spacer,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useContext, useRef, useState } from 'react';
import { TodoContext } from '../context/ToDoContext';
import { RiCheckLine, RiMore2Fill } from '@remixicon/react';

const TodoItem = ({ todo_item, swatches }) => {
  const { toggleComplete, deleteTodo, updateTodo } = useContext(TodoContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editTitle, setEditTitle] = useState(todo_item.title);
  const [editNote, setEditNote] = useState(todo_item.note);
  const [editColor, setEditColor] = useState(todo_item.color);

  const openRef = useRef(null);
  const closeUpdateRef = useRef(null);

  const editItemHandler = () => {
    updateTodo(todo_item.id, editTitle, editNote, editColor);
    if (closeUpdateRef.current) {
      closeUpdateRef.current.click();
    }
  };
  return (
    <>
      <VStack
        h='100%'
        w='100%'
        bgColor={todo_item.color}
        px={5}
        py={4}
        alignItems='flex-start'
        justifyContent='flex-start'
        borderRadius={10}
        _hover={{ shadow: 'md' }}
        overflowWrap='break-word'
        wordBreak='break-word'>
        <Heading
          className='raleway'
          textDecor={todo_item.completed ? 'line-through' : 'none'}
          color='black'
          noOfLines={2} // Limits to 2 lines and adds ellipsis if needed
          fontSize='xl'
          w='100%'
          overflowWrap='break-word'
          wordBreak='break-word'>
          {todo_item.title}
        </Heading>

        <Text
          textDecor={todo_item.completed ? 'line-through' : 'none'}
          className='raleway'
          color='black'
          fontSize='md'
          w='100%'
          overflowWrap='break-word'
          wordBreak='break-word'
          noOfLines={5} // Adjustable
        >
          {todo_item.note}
        </Text>
        <Spacer />
        <HStack w={'100%'}>
          <Button
            p={0}
            className='raleway'
            bgColor={'transparent'}
            fontWeight={'700'}
            color={todo_item.completed ? 'red.700' : 'green.800'}
            onClick={() => toggleComplete(todo_item.id)}
            variant={todo_item.completed ? 'ghost' : 'solid'}>
            Mark as {todo_item.completed ? 'Pending' : 'Complete'}
          </Button>
          <Spacer />
          <Menu.Root>
            <Menu.Trigger asChild cursor={'pointer'}>
              <RiMore2Fill color='black' />
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item
                    value='edit'
                    cursor={'pointer'}
                    onClick={() => {
                      setEditTitle(todo_item.title);
                      setEditNote(todo_item.note);
                      if (openRef.current) {
                        openRef.current.click();
                      }
                    }}>
                    Edit
                  </Menu.Item>
                  <Menu.Item
                    cursor={'pointer'}
                    value='delete'
                    color='fg.error'
                    _hover={{ bg: 'bg.error', color: 'fg.error' }}
                    onClick={() => {
                      deleteTodo(todo_item.id);
                    }}>
                    Delete
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </HStack>
      </VStack>
      {/* Dialog box */}
      <Dialog.Root placement='center'>
        <Dialog.Trigger ref={openRef}></Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Edit To-Do</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Field.Root required py={2}>
                  <Field.Label>
                    Title <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    placeholder='Title'
                    type='text'
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </Field.Root>

                <Field.Root py={2}>
                  <Field.Label>Note</Field.Label>
                  <Textarea
                    placeholder='Note'
                    value={editNote}
                    onChange={(e) => setEditNote(e.target.value)}
                  />
                </Field.Root>
                <Field.Root py={2}>
                  <Field.Label>Select Color</Field.Label>
                  <ColorPicker.Root
                    alignItems='flex-start'
                    onValueChange={(val) => {
                      if (val !== '') {
                        setEditColor(val.valueAsString);
                      }
                    }}>
                    <ColorPicker.HiddenInput />
                    <ColorPicker.SwatchGroup>
                      {swatches.map((item) => (
                        <ColorPicker.SwatchTrigger key={item} value={item}>
                          <ColorPicker.Swatch value={item} borderRadius={20}>
                            <ColorPicker.SwatchIndicator color={'black'}>
                              <RiCheckLine />
                            </ColorPicker.SwatchIndicator>
                          </ColorPicker.Swatch>
                        </ColorPicker.SwatchTrigger>
                      ))}
                    </ColorPicker.SwatchGroup>
                  </ColorPicker.Root>
                </Field.Root>

                <Button my={4} onClick={editItemHandler}>
                  Save
                </Button>
              </Dialog.Body>

              <Dialog.CloseTrigger asChild>
                <CloseButton size='sm' ref={closeUpdateRef} />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};

export default TodoItem;
