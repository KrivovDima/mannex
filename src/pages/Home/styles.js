import styled from 'styled-components';

export const Info = styled.section`
  background-image: url('./images/home-title-bg.png');
  background-repeat: no-repeat;
  background-position: 0 -70px;
  padding: 50px 0;
`;

export const InfoInner = styled.div`
  display: flex;
`;

export const InfoBox = styled.div`
  max-width: 920px;
  flex: 1 0;
`;

export const InfoTitle = styled.h2`
  font-size: 80px;
  line-height: 97px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.gray};
  margin-bottom: 50px;

  span {
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 72px;
`;

export const CountProducts = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin-left: 32px;
`;

export const InfoSlider = styled.div``;

export const Benefits = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Benefit = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 120px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.blue};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 30px;
`;

export const About = styled.section`
  padding: 50px 0;
  background-image: url('./images/about-bg.jpg');
  background-repeat: no-repeat;
  background-position: right 155px;
`;

export const AboutInner = styled.div`
  margin: 40px 0 60px;
  max-width: 770px;
`;

export const AboutText = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 30px;
`;

export const ReadMoreBtn = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 470px;
  height: 100px;
  text-align-last: center;
  line-height: 100px;
  font-size: 24px;
  font-weight: 700;
  background-color: transparent;
`;
