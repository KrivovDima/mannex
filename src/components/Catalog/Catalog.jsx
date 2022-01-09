import React from 'react';

import * as S from './styles';

import {SectionTitle} from 'components';
import * as C from 'src/components/Catalog/styles';

export const Catalog = () => (
  <S.Catalog>
    <C.Container>
      <SectionTitle title="Каталог" shadow />
      <S.Categories />
      <S.CatalogInner>
        <S.CatalogFilter />
      </S.CatalogInner>
    </C.Container>
  </S.Catalog>
);
