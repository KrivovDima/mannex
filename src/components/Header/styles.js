import styled, { css } from 'styled-components';

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  height: 87px;
`;

export const HeaderMenu = styled.nav``;

export const MenuList = styled.ul`
  display: flex;

  li + li {
    margin-left: 11px;
  }
`;

export const MenuItem = styled.li`
  a {
    display: inline-block;
    padding: 9px 17px;
    color: ${({ theme: { colors } }) => colors.grey};
  }

  a.active {
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.blue};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Cart = styled.div`
  position: relative;
  margin-right: 22px;
`;

export const CartBtn = styled.img`
  width: 25px;
  height: 25px;
`;

export const CartItemCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme: { colors } }) => colors.bgRedBtn};
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 9px;
`;

export const FullPrice = styled.span`
  margin-right: 36px;
  color: ${({ theme: { colors } }) => colors.grey};
`;

export const User = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 40px;
  border: 1px solid ${({ theme: { colors } }) => colors.blue};
`;

const userStyles = css`
  height: 42px;
  line-height: 42px;
  padding: 0 24px;
  background-color: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.white};
`;

export const UserName = styled.div`
  ${userStyles}
`;

export const Login = styled.div`
  ${userStyles}
`;
