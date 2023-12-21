import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBoundStore from '../../store/Store';
import { Paper, TextInput, Button, Text, Stack, Loader } from '@mantine/core';




const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate('/posts');
    }
  }, [user]);

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email?.value;
    const password = e.currentTarget.password?.value;
    if (!email || !password) return;
    loginService(email, password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Paper style={{ padding: '30px', background: '#d3d3d3' }}>
        <Stack spacing={20} align="center">
          <Text align="center" size="lg">
            Welcome back
          </Text>
          <form onSubmit={onLogin}>
            <Stack spacing={10}>
              <TextInput
                placeholder="Email"
                name="email"
                type="email"
                required
                style={{ minWidth: '320px', height: '40px' }}
              />
              <TextInput
                placeholder="Password"
                name="password"
                type="password"
                required
                style={{ minWidth: '320px', height: '40px' }}
              />
              <Button type="submit" radius="md">
                {authLoading ? <Loader /> : 'Login'}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </div>
  );
};

export default LoginPage;
