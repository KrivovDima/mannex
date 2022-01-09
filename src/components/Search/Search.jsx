import React from 'react';

import * as S from './styles';

export const Search = () => (
  <S.Search>
    <S.SearchInner>
      <S.SearchInput type="text" placeholder="Поиск по артикулу" />
      <S.SearchBtn>Поиск</S.SearchBtn>
    </S.SearchInner>
  </S.Search>
);
