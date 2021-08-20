import { Box, Text } from '@chakra-ui/react';

import { Chart, options, series } from '../../utils/configGraph';

interface ChartProps {
  title: string;
}

export function ChartSingle({ title }: ChartProps) {
  return (
    <Box
      p={["6", "8"]}
      bg="gray.800"
      borderRadius={8}
      pd="4"
    >
      <Text fontSize="lg" mb="4">{title}</Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  );
} 