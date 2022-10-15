import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';

import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { Text } from './../components/Text';
import { Logo } from './../Logo';
import { apiAuth } from './../services/authApi';
export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};
export const Menu = () => {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    const api = apiAuth(Cookie.get('token'));
    api
      .get('/user')
      .then(({ data }) => setUser(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="m-0 p-3 w-screen max-w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça seu cadastro e comece a usar!
        </Text>
      </header>
      <main className="flex flex-col items-center gap-4 mt-8">
        {user.map(user => (
          <Card user={user} key={user.id} />
        ))}
      </main>
    </div>
  );
};
