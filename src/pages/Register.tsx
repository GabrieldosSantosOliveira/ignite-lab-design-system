import { Envelope, Lock } from 'phosphor-react';
import { useState } from 'react';
import {
  SubmitHandler,
  useForm,
  Controller
} from 'react-hook-form';
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
  firstName: string;
  lastName: string;
  terms: boolean;
};
export const Register = () => {
  const [acceptTerms, setAcceptTerms] = useState<boolean>();
  const { register, handleSubmit, control } =
    useForm<Form>();

  const handleSingIn: SubmitHandler<Form> = async ({
    email,
    firstName,
    lastName,
    password,
    terms
  }) => {
    if (terms) {
      setAcceptTerms(true);
      await api
        .post('/user', {
          email,
          firstName,
          lastName,
          password
        })
        .then(() => alert('Cadastrado com sucesso!'))
        .catch(() => alert('Erro ao cadastrar!'));
    } else {
      setAcceptTerms(false);
    }
  };
  return (
    <div className=" m-0 p-3 w-screen max-w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
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
        <label
          htmlFor="firstName"
          className="flex flex-col gap-3"
        >
          <Text className="font-semibold">Nome</Text>
          <TextInput.Root>
            <TextInput.Input
              id="firstName"
              type="text"
              placeholder="Digite seu nome"
              autoComplete="given-name"
              {...register('firstName')}
            />
          </TextInput.Root>
        </label>
        <label
          htmlFor="lastName"
          className="flex flex-col gap-3"
        >
          <Text className="font-semibold">Sobrenome</Text>
          <TextInput.Root>
            <TextInput.Input
              id="lastName"
              type="text"
              placeholder="Digite seu sobrenome"
              autoComplete="family-name"
              {...register('lastName')}
            />
          </TextInput.Root>
        </label>

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
              autoComplete="new-password"
              {...register('password')}
            />
          </TextInput.Root>
        </label>

        <label
          htmlFor="remember"
          className="flex items-center gap-2"
        >
          <Controller
            control={control}
            name="terms"
            render={({
              field: { onChange, onBlur, value }
            }) => (
              <Checkbox
                id="terms"
                onCheckedChange={onChange}
                onBlur={onBlur}
                checked={value}
              />
            )}
          />
          <Text size="sm" className="text-gray-200">
            Você concorda com a nossa Política de
            Privacidade
          </Text>
        </label>
        {acceptTerms === false ? (
          <Text size="sm" className="text-red-500">
            Você precisa aceitar os termos de uso
          </Text>
        ) : null}
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <Link
            to="/SingIn"
            className="text-gray-400 underline hover:text-gray-200"
          >
            Já possui conta? Entre agora!
          </Link>
        </Text>
      </footer>
    </div>
  );
};
