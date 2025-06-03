import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--black1);
`;
export const MainContent = styled.main`
  padding-top: 4.5rem;
  flex: 1;
  text-align: center;
  color: var(--greyDefault);
  margin-right: 5rem;
  margin-left: 5rem;

  @media ${breakpoint.bg1} {
    margin-right: 0rem;
    margin-left: 0rem;
  }
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15rem;
  @media ${breakpoint.sm1} {
    height: 10rem;
  }
`;
export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: left;
  color: var(--greyDefault);
  @media ${breakpoint.bg1} {
    font-size: 4.5rem;
  }
  @media ${breakpoint.sm1} {
    font-size: 3rem;
  }
  @media ${breakpoint.sm0} {
    font-size: 2.4rem;
  }
`;

export const TitleDesc = styled.p`
  max-width: 600px;
  font-size: 16px;
  color: var(--greyDefault);
  @media ${breakpoint.sm1} {
    max-width: 400px;
    font-size: 12px;
  }
  @media ${breakpoint.sm0} {
    max-width: 350px;
    font-size: 10px;
  }
`;

export const ButtonNow = styled.button`
  width: 22rem;
  height: 3.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1.5px solid var(--greyDefault);
  color: var(--whiteDefault);
  font-weight: 300;
  border-radius: 12px;
  font-size: 14px;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--grey2);
  }

  .icon {
    animation: spin 1s linear infinite;

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
  @media ${breakpoint.bg1} {
    width: 20rem;
    height: 3.2rem;
    font-size: 13px;
  }
  @media ${breakpoint.md2} {
    width: 16rem;
    height: 2.8rem;
    font-size: 12px;
  }
  @media ${breakpoint.sm1} {
    width: 14rem;
    height: 2.2rem;
    font-size: 10px;
    border-radius: 8px;
  }
`;

export const ShortUrlSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: 18rem;
  width: 65%;
  border: 1px solid var(--greyDefault);
  border-radius: 28px;
  margin-bottom: 20px;
  font-size: 5rem;
  @media ${breakpoint.bg1} {
    height: 17rem;
    padding: 35px;
  }
  @media ${breakpoint.md2} {
    height: 15rem;
    padding: 25px;
  }
  @media ${breakpoint.sm1} {
    height: 11rem;
    padding: 15px;
    border-radius: 22px;
  }
`;

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 80%;
  margin-bottom: 60px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const InfoElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 1rem;
  border: 1px solid var(--greyDefault);
  border-radius: 1rem;
  cursor: pointer;
  transition: all ease 1s;
  svg {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }

  &:hover {
    color: var(--grey9);
    border: 1px solid var(--grey9);
  }

  @media ${breakpoint.sm1} {
    margin: 0 10px 0 10px;
    svg {
      font-size: 26px;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

export const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;

  @media ${breakpoint.md2} {
    font-size: 20px;
  }
  @media ${breakpoint.sm1} {
    font-size: 16px;
  }
`;

export const StyledMediumSubTitle = styled.p`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ color }) => color || "var(--greyDefault)"};
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  width: ${({ width }) => width || "100%"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || "0rem"};
  line-height: 1.6;
`;

export const InfoSubTitle = styled.p`
  max-width: 250px;
  color: var(--greyDefault);
  display: unset;
  font-size: 12px;
  text-align: left;
  padding: 0.5rem;

  transition: all 1s ease;

  &:hover {
    color: var(--grey9);
  }

  @media ${breakpoint.sm1} {
    max-width: 180px;
    font-size: 10px;
  }
`;
export const FormUrl = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const UrlReturnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Url = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--grey3);
  padding: 1rem 4rem;
  margin: 0px 0 10px 0;
  border-radius: 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: var(--whiteDefault);
  @media ${breakpoint.sm1} {
    font-size: 0.8rem;
    padding: 0.8rem 3.5rem;
    border-radius: 0.5rem;
  }
`;

export const ButtonUrl = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
  border: none;
  color: var(--blackDefault);
  font-weight: 600;
  z-index: 1;
  background-color: var(--grey9);
  position: relative;
  transition: var(--transition-width-fast);
  font-size: 0.9rem;

  svg {
    margin-left: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 8px;
    background-color: var(--blackDefault);
    z-index: -1;
    transition: var(--transition-width-fast);
  }

  &:hover {
    color: var(--whiteDefault);
  }

  &:hover::before {
    width: 100%;
  }

  @media ${breakpoint.sm1} {
    font-size: 0.8rem;
    padding: 0.5rem 1.6rem;
  }
`;
export const ShortUrlShortSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 50%;
  border-radius: 28px;
  margin-bottom: 80px;
  @media ${breakpoint.md1} {
    height: 14rem;
  }

  @media ${breakpoint.sm1} {
    height: 12rem;
  }
`;

export const UrlShortTitle = styled.p`
  width: 100%;
  font-size: 22px;
  color: var(--greyDefault);
  font-weight: 700;
  @media ${breakpoint.md2} {
    font-size: 18px;
  }
  @media ${breakpoint.sm1} {
    font-size: 14px;
  }
  @media ${breakpoint.sm1} {
    font-size: 12px;
  }
`;
