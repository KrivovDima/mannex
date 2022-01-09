import React from 'react';

import {Link} from 'react-router-dom';

import * as S from './styles';

import * as C from '../../styles/components';
import {Logo} from "../Logo/Logo";

export const Footer = () => (
  <S.Footer>
    <C.Container>
      <S.FooterInner>
        <div>
          <Logo />
          <S.FooterCopy>
            <div>2020 &#169; Mannex Все права защищены</div>
            <div>Публичная оферта</div>
          </S.FooterCopy>
        </div>

        <S.FooterLinks>
          <S.FooterSubTitle>Основное</S.FooterSubTitle>
          <S.FooterList>
            {['Главная', 'О компании', 'Pro-Запрос', 'Гараж', 'Контакты', 'Заказы'].map(
              link => (
                <S.FooterListItem key={link}>
                  <Link to="/">{link}</Link>
                </S.FooterListItem>
              ),
            )}
          </S.FooterList>
        </S.FooterLinks>

        <S.FooterLinks>
          <S.FooterSubTitle>Аккаунт</S.FooterSubTitle>
          <S.FooterList>
            {['Корзина', 'Баланс', 'Мои заказы', 'Запрос продавцу', 'Сравнение'].map(
              link => (
                <S.FooterListItem key={link}>
                  <Link to="/">{link}</Link>
                </S.FooterListItem>
              ),
            )}
          </S.FooterList>
        </S.FooterLinks>

        <S.FooterLinks>
          <S.FooterSubTitle>Контакты</S.FooterSubTitle>
          <S.FooterList>
            <S.LinkWithIcon>
              <S.MailIcon src="./images/mail-icon.svg" alt="mail-icon" />
              <Link to="/">Главная</Link>
            </S.LinkWithIcon>
            <S.LinkWithIcon>
              <img src="./images/phone-icon.svg" alt="mail-icon" />
              <S.FooterPhones>
                <a href="tel:89002038083">8 900 203 8083</a>
                <a href="tel:89122945345">8 912 294 5345</a>
              </S.FooterPhones>
            </S.LinkWithIcon>
          </S.FooterList>
        </S.FooterLinks>
      </S.FooterInner>
    </C.Container>
  </S.Footer>
);
