import React from 'react';

import * as S from './styles';

export const RedBtn = ({ title, onClick }) => (
  <S.RedBtn onClick={onClick}>{title}</S.RedBtn>
);
