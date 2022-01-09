import styled from 'styled-components';

export const SectionTitle = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.grey};
  font-size: 64px;
`;

export const Shadow = styled.span`
  position: absolute;
  left: 0;
  bottom: -60px;
  color: rgba(67, 66, 66, 0.1);
  font-size: 200px;
  font-weight: 700;
`;
