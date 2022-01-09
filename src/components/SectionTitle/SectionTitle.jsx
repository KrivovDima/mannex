import React from 'react';

import * as S from './styles';

export const SectionTitle = ({ title, shadow }) => (
  <S.SectionTitle>
    <S.Title>{title}</S.Title>
    {shadow && <S.Shadow>{title}</S.Shadow>}
  </S.SectionTitle>
);
