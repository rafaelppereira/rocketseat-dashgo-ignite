import { Heading } from '@chakra-ui/react';

interface HeadingTitleProps {
  title: string;
}

export function HeadingTitle({ title }: HeadingTitleProps) {
  return (
    <Heading size="lg" fontWeight="normal">{title}</Heading>
  );
}