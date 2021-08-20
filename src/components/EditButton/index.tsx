import { ReactNode } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

interface EditButtonProps {
  children: ReactNode;
}

export function EditButton({ children }: EditButtonProps) {
  return (
    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
      {children}
    </Button>
  );
}