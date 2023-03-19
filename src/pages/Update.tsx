import Cookies from 'js-cookie';
import { Envelope } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Button } from './../components/Button';
import { Heading } from './../components/Heading';
import { Text } from './../components/Text';
import { TextInput } from './../components/TextInput';
import { Logo } from './../Logo';
import { apiAuth } from './../services/authApi';
import { User } from './Menu';
type Form = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
export const Update = () => {
  const [user, setUser] = useState<User>();
  const { id } = useParams();
  const token = Cookies.get('token');
  const api = apiAuth(token);
  useEffect(() => {
    const fetch = async () => {
      await api
        .get(`/user/${id}`)
        .then(({ data }) => setUser(data))
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);
  const { register, handleSubmit } = useForm<Form>();

  const handleSingIn: SubmitHandler<Form> = async (formValues) => {
    await api
      .put(`/user/${id}`, formValues)
      .then(() => alert('Atualizado com sucesso!'))
      .catch(() => alert('Erro ao atualizar!'));
  };
  if (!user)
    return (
      <div className="m-0 p-3 w-screen max-w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
        Carregando...
      </div>
    );
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
      <form
        onSubmit={handleSubmit(handleSingIn)}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        <label htmlFor="firstName" className="flex flex-col gap-3">
          <Text className="font-semibold">Nome</Text>
          <TextInput.Root>
            <TextInput.Input
              id="firstName"
              type="text"
              defaultValue={user.firstName}
              placeholder="Digite seu nome"
              autoComplete="given-name"
              {...register('firstName')}
            />
          </TextInput.Root>
        </label>
        <label htmlFor="lastName" className="flex flex-col gap-3">
          <Text className="font-semibold">Sobrenome</Text>
          <TextInput.Root>
            <TextInput.Input
              id="lastName"
              type="text"
              defaultValue={user.lastName}
              placeholder="Digite seu sobrenome"
              autoComplete="family-name"
              {...register('lastName')}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="text"
              placeholder="Digite seu e-mail"
              defaultValue={user.email}
              autoComplete="email"
              {...register('email')}
            />
          </TextInput.Root>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
    </div>
  );
};
