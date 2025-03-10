// portfolio-nextjs/components/home/HeroSection.tsx
//@ts-nocheck
'use client';

import { Container, Title, Text, Button, Group, Image, Stack, SimpleGrid } from '@mantine/core';
import Link from 'next/link';

export function HeroSection() {
  return (
    <Container size="lg" py={{base: 40, md: 80}}>
      <SimpleGrid cols={{base: 1, md: 2}} spacing={40}>
        <Stack justify="center" spacing={32}>
          <div>
            <Title>Showcase your work with a beautiful portfolio</Title>
            <Text size="lg" c="dimmed" mt="md">
              Create a professional portfolio in minutes. Share your projects, skills, and achievements with the world.
            </Text>
          </div>
          
          <Group>
            <Button component={Link} href="/dashboard" size="lg">
              Get Started
            </Button>
            <Button component={Link} href="/examples" variant="outline" size="lg">
              View Examples
            </Button>
          </Group>
        </Stack>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image 
            src="/images/portfolio-hero.svg" 
            alt="Portfolio showcase illustration"
            fallbackSrc="https://placehold.co/600x400?text=Portfolio+Showcase"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </SimpleGrid>
    </Container>
  );
}