// portfolio-nextjs/components/home/FeaturesSection.tsx
'use client';

import { Container, Title, SimpleGrid, Text, ThemeIcon, rem, Stack } from '@mantine/core';
import { IconBrush, IconDevices, IconShare, IconCloud } from '@tabler/icons-react';

const features = [
  {
    icon: IconBrush,
    title: 'Customizable Design',
    description: 'Choose from multiple themes and customize your portfolio to match your personal brand.'
  },
  {
    icon: IconDevices,
    title: 'Responsive Layouts',
    description: 'Your portfolio looks great on all devices, from desktops to smartphones.'
  },
  {
    icon: IconShare,
    title: 'Easy Sharing',
    description: 'Get a unique link to share your portfolio on social media, job applications, and more.'
  },
  {
    icon: IconCloud,
    title: 'Work Offline',
    description: "Edit your portfolio even when you're offline, and changes will sync when you reconnect."
  }
];

export function FeaturesSection() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="light"
      >
        <feature.icon style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7} fw={500}>
        {feature.title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container size="lg" py={80}>
      <Stack align="center" mb={50}>
        <Title ta="center">Everything you need to showcase your work</Title>
        <Text c="dimmed" ta="center" size="lg" maw={700} mx="auto">
          Build a professional portfolio without any design or coding skills.
        </Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}