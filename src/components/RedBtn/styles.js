import styled from 'styled-components';

export const RedBtn = styled.button`
  width: 470px;
  height: 100px;
  line-height: 100px;
  color: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0px 20px 50px rgba(255, 129, 129, 0.3);
  background: ${({ theme: { colors } }) => colors.bgRedBtn};
  font-size: 24px;
  font-weight: 700;
  border: none;
`;
