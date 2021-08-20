import Link from 'next/link';
import { Box, Button, Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { HeadingTitle } from "../../components/HeadingTitle";
import { Sidebar } from "../../components/Sidebar";
import { TableUsers } from '../../components/TableUsers';
import { Pagination } from "../../components/Pagination";


export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <HeadingTitle title="Usuários" />
            <Link href="/users/create" passHref>            
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />} >
                Criar novo
              </Button>
            </Link>
          </Flex>
        
          <TableUsers />
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}