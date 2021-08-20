import { Table, Thead, Tr, Th, Tbody, Td, Checkbox, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { EditButton } from '../EditButton';

export function TableUsers() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px={["4", "4", "6"]} color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuários</Th>
          { isWideVersion && <Th>Data de cadastro</Th> }
          <Th w="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td px={["4", "4", "6"]}>
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="600">Rafael Pereira</Text>
              <Text fontSize="sm" color="gray.300">rafaelsantospereira03@gmail.com</Text>
            </Box>
          </Td>
         { isWideVersion && <Td>04 de Abril, 2021</Td> }
          <Td>
            { isWideVersion ? <EditButton>Editar</EditButton> : ''}
          </Td>
        </Tr>
        <Tr>
          <Td px={["4", "4", "6"]}>
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="600">Nicole Soares</Text>
              <Text fontSize="sm" color="gray.300">nicolesoares@gmail.com</Text>
            </Box>
          </Td>
         { isWideVersion && <Td>04 de Abril, 2021</Td> }
          <Td>
            { isWideVersion ? <EditButton>Editar</EditButton> : ''}
          </Td>
        </Tr>
        <Tr>
          <Td px={["4", "4", "6"]}>
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="600">Priscila Apelião</Text>
              <Text fontSize="sm" color="gray.300">pri.apeliao@gmail.com</Text>
            </Box>
          </Td>
         { isWideVersion && <Td>04 de Abril, 2021</Td> }
          <Td>
            { isWideVersion ? <EditButton>Editar</EditButton> : ''}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}