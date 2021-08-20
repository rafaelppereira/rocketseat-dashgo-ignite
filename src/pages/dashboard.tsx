import { Flex, SimpleGrid } from '@chakra-ui/react';

import { Sidebar } from '../components/Sidebar';
import { Header } from "../components/Header";
import { ChartSingle } from '../components/ChartSingle';

export default function Dashboard() {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <ChartSingle title="Inscritos da semana" />
          <ChartSingle title="Taxa de abertura" />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}