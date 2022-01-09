import React from 'react';

import * as S from './styles';

import * as C from '../../styles/components';
import {MainLayout} from "../../layouts/MainLayout";
import {RedBtn} from "../../components/RedBtn/RedBtn";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";


export const Home = () => {
  const benefits = [
    { title: 'Высокое качество' },
    { title: 'Лучшие на рынке' },
    { title: 'Большой выбор' },
  ];

  const onClickCatalogHandle = () => {};

  return (
    <MainLayout>
      <S.Info>
        <C.Container>
          <S.InfoInner>
            <S.InfoBox>
              <S.InfoTitle>
                Предлагаем только качественные <span>запчасти</span> для иномарок
              </S.InfoTitle>
              <S.InfoGroup>
                <RedBtn title="Посмотреть каталог" onClick={onClickCatalogHandle} />
                <S.CountProducts>Более 50 товаров</S.CountProducts>
              </S.InfoGroup>
            </S.InfoBox>
            <S.InfoSlider>
              <img src="./images/product-big.png" alt="product" />
            </S.InfoSlider>
          </S.InfoInner>
          <S.Benefits>
            {benefits.map(({ title }) => (
              <S.Benefit key={title}>{title}</S.Benefit>
            ))}
          </S.Benefits>
        </C.Container>
      </S.Info>

      <S.About>
        <C.Container>
          <SectionTitle title="О компании" shadow />
          <S.AboutInner>
            <S.AboutText>
              Компания Mannex: продажа запчастей и аксессуаров высокого качества
            </S.AboutText>
            <S.AboutText>
              Компания Mannex начала свою деятельность недавно, но уже успела заслужить
              хорошую репутацию среди покупателей. Количество положительных отзывов в
              адрес нашей компании от благодарных клиентов растет с каждым днем. В нашем
              интернет-магазине вы можете купить необходимые запчасти и аксессуары для
              своего автомобиля по выгодным ценам.
            </S.AboutText>
            <S.AboutText>Большой ассортимент</S.AboutText>
            <S.AboutText>
              В каталоге нашего магазина вы найдете автозапчасти для Lexus, Mazda или иных
              автомобилей. Среди широкого ассортимента
            </S.AboutText>
          </S.AboutInner>
          <S.ReadMoreBtn>Читать дальше</S.ReadMoreBtn>
        </C.Container>
      </S.About>
    </MainLayout>
  );
};
