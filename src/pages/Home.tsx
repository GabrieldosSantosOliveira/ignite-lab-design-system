import { Link } from 'react-router-dom';

import { Heading } from './../components/Heading';
import { Text } from './../components/Text';
import { Logo } from './../Logo';
export const Home = () => {
  return (
    <div className=" m-0 p-3 w-screen max-w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 ">
      <header className="flex flex-col items-center">
        <Logo className="animate-[spin_4s_linear_infinite] hover:animate-pulse	" />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça parte dessa revolução!
        </Text>
      </header>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <Link
            to="/SingIn"
            className="text-gray-400 underline hover:text-gray-200"
          >
            Já tem uma conta? Faça login
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
