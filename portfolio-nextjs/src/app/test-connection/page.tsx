// portfolio-nextjs/app/test-connection/page.tsx
'use client';

import { useState } from 'react';
import { Container, Title, Text, Button, Card, Alert, List } from '@mantine/core';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';

export default function TestConnection() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const testConnection = async () => {
    setLoading(true);
    setStatus(null);
    
    try {
      const response = await fetch('/api/test-db');
      const data = await response.json();
      
      if (response.ok) {
        setStatus(data.message);
        setSuccess(true);
      } else {
        setStatus(data.message);
        setSuccess(false);
      }
    } catch (error) {
      setStatus(`Failed to test connection - ${error}`);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="sm" py={40}>
      <Card withBorder shadow="sm" p="xl" radius="md">
        <Title order={2} mb="md">Test MongoDB Connection</Title>
        <Text c="dimmed" mb="xl">
          Click the button below to test your connection to MongoDB.
        </Text>
        
        <Button
          onClick={testConnection}
          loading={loading}
          mb="xl"
        >
          {loading ? 'Testing...' : 'Test Connection'}
        </Button>
        
        {status && (
          <Alert 
            icon={success ? <IconCheck size={16} /> : <IconAlertCircle size={16} />}
            title={success ? "Success!" : "Error"}
            color={success ? "green" : "red"}
            variant="filled"
            mb="xl"
          >
            {status}
          </Alert>
        )}
        
        <Title order={3} mb="md">Next Steps:</Title>
        <List spacing="sm" size="sm">
          <List.Item>Set up NextAuth.js for authentication</List.Item>
          <List.Item>Create user dashboard and editor</List.Item>
          <List.Item>Implement image upload with Cloudinary</List.Item>
          <List.Item>Build public portfolio pages</List.Item>
        </List>
      </Card>
    </Container>
  );
}