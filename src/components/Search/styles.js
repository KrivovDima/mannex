import styled from 'styled-components';

export const Search = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

export const SearchInner = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 523px;
  height: 50px;
  padding: 0 40px;
  color: ${({ theme: { colors } }) => colors.grey};
  font-size: 18px;
  border: 1px solid rgba(67, 66, 66, 0.5);
  border-right: none;

  &::placeholder {
    color: #a6a6a6;
    font-size: 12px;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  padding: 0 48px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.blue};
`;
