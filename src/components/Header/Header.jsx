import React from 'react';

import {Link, NavLink} from 'react-router-dom';

import * as S from './styles';

import * as C from '../../styles/components';
import {Logo} from "../Logo/Logo";


export const Header = () => {
  const isLogined = false;

  const menuItems = [
    { id: 1, title: 'Главная', link: '/' },
    { id: 2, title: 'Pro-Запрос', link: 'request' },
    { id: 3, title: 'Гараж', link: 'garage' },
    { id: 4, title: 'Контакты', link: 'contacts' },
    { id: 5, title: 'Заказы', link: 'order' },
  ];

  return (
    <header>
      <C.Container>
        <S.HeaderInner>
          <Logo />

          <S.HeaderMenu>
            <S.MenuList>
              {menuItems.map(({ id, title, link }) => (
                <S.MenuItem key={id}>
                  <NavLink
                    to={link}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {title}
                  </NavLink>
                </S.MenuItem>
              ))}
            </S.MenuList>
          </S.HeaderMenu>

          <S.UserInfo>
            <S.Cart>
              <Link to="cart">
                <S.CartBtn src="images/cart.svg" alt="cart" />
              </Link>
              <S.CartItemCount>5</S.CartItemCount>
            </S.Cart>
            <S.FullPrice>1000000 р.</S.FullPrice>
            <S.User>
              <S.Avatar>
                <img src="images/user.svg" alt="avatar" />
              </S.Avatar>

              {isLogined ? (
                <S.UserName>Krivov Dima</S.UserName>
              ) : (
                <Link to="login">
                  <S.Login>Войти</S.Login>
                </Link>
              )}
            </S.User>
          </S.UserInfo>
        </S.HeaderInner>
      </C.Container>
    </header>
  );
};
