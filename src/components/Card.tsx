import Cookies from 'js-cookie';
import { Trash, CircleNotch } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { User } from './../pages/Menu';
import { apiAuth } from './../services/authApi';
import { Text } from './Text';
type CardProps = {
  user: User;
};
export const Card: React.FC<CardProps> = ({ user }) => {
  const { firstName, lastName, email, id } = user;
  const token = Cookies.get('token');
  const api = apiAuth(token);
  const handleDelete = async () => {
    await api
      .delete(`/user/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <Text className="flex-1">{`${firstName} ${lastName}`}</Text>
        <Text>{email}</Text>
        <div className="flex justify-between gap-3">
          <Trash onClick={handleDelete} />
          <Link to={`/Update/${id}`}>
            <CircleNotch />
          </Link>
        </div>
      </div>
    </>
  );
};
