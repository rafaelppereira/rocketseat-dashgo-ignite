import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Rafael Pereira</Text>
          <Text color="gray.300" fontSize="small">exiospace.co@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Rafael Pereira" src="https://github.com/rafaelppereira.png" />
    </Flex>
  );
}