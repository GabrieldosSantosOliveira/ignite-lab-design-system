import Cookies from 'js-cookie';
import { Envelope, Lock } from 'phosphor-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from './../components/Button';
import { Checkbox } from './../components/Checkbox';
import { Heading } from './../components/Heading';
import { Text } from './../components/Text';
import { TextInput } from './../components/TextInput';
import { Logo } from './../Logo';
import { api } from './../services/api';
type Form = {
  email: string;
  password: string;
};
export const SingIn = () => {
  const { register, handleSubmit } = useForm<Form>();
  const [isUserSignedIn, setIsUserSignedIn] =
    useState(false);
  const handleSingIn: SubmitHandler<
    Form
  > = async formValues => {
    const { data } = await api.post('/auth', formValues);
    Cookies.set('token', data.token, {
      expires: 1,
      sameSite: 'strict'
    });
    console.log(data);
    setIsUserSignedIn(true);
  };
  return (
    <div className=" m-0 p-3 w-screen max-w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handleSubmit(handleSingIn)}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label
          htmlFor="email"
          className="flex flex-col gap-3"
        >
          <Text className="font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="text"
              placeholder="Digite seu e-mail"
              autoComplete="email"
              {...register('email')}
            />
          </TextInput.Root>
        </label>
        <label
          htmlFor="password"
          className="flex flex-col gap-3"
        >
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="**********"
              autoComplete="current-password"
              {...register('password')}
            />
          </TextInput.Root>
        </label>
        <label
          htmlFor="remember"
          className="flex items-center gap-2"
        >
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <Link
            to="/"
            className="text-gray-400 underline hover:text-gray-200"
          >
            Esqueceu sua senha?
          </Link>
        </Text>
        <Text asChild size="sm">
          <Link
            to="/Register"
            className="text-gray-400 underline hover:text-gray-200"
          >
            Não possui conta? Crie uma agora!
          </Link>
        </Text>
      </footer>
    </div>
  );
};
