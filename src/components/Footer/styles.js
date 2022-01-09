import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 50px 0 124px;
  color: ${({ theme: { colors } }) => colors.grey};
  background-color: #f5f5f5;
`;

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterCopy = styled.div`
  margin-top: 50px;

  & div:first-child {
    margin-bottom: 30px;
  }
`;

export const FooterLinks = styled.div`
  padding-top: 28px;
`;

export const FooterSubTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme: { colors } }) => colors.black};
  margin-bottom: 37px;
`;

export const FooterList = styled.ul``;

export const FooterListItem = styled.li`
  margin-bottom: 20px;

  a {
    color: ${({ theme: { colors } }) => colors.grey};
  }
`;

export const LinkWithIcon = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  a {
    color: ${({ theme: { colors } }) => colors.grey};
  }

  img {
    margin-right: 20px;
  }
`;

export const MailIcon = styled.img`
  align-self: center;
`;

export const FooterPhones = styled.div`
  a {
    display: block;
    color: ${({ theme: { colors } }) => colors.grey};
  }
`;
