import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--black1);
`
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
`

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15rem;
  @media ${breakpoint.sm1} {
    height: 10rem;
  }
`
export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

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
`

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
`

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
`

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
`

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  height: 30rem;
  width: 100%;
  margin-bottom: 60px;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const InfoElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 85px 60px 0 60px;

  svg {
    font-size: 32px;
    margin-left: 14px;
  }

  @media ${breakpoint.bg1} {
    padding: 65px 40px 0 40px;
  }
  @media ${breakpoint.md2} {
    padding: 40px 15px 0 15px;
  }
  @media ${breakpoint.sm1} {
    padding: 20px 8px 0 8px;
    margin: 0 10px 0 10px;
    svg {
      font-size: 26px;
      margin-left: 8px;
    }
  }
  @media ${breakpoint.sm0} {
    padding: 10px;
    margin: 5px;
    border-radius: 14px;
    border: solid 1px var(--greyDefault);
    svg {
      font-size: 18px;
      margin-left: 6px;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  @media ${breakpoint.md2} {
    font-size: 20px;
    margin-bottom: 6px;
  }
  @media ${breakpoint.sm1} {
    font-size: 16px;
    margin-bottom: 4px;
  }
  @media ${breakpoint.sm0} {
    font-size: 10px;
    margin-bottom: 2px;
    border-bottom: 1px solid var(--greyDefault);
  }
`

export const InfoSubTitle = styled.p`
  max-width: 250px;
  color: var(--greyDefault);
  display: unset;
  font-size: 12px;
  text-align: left;
  @media ${breakpoint.sm1} {
    max-width: 180px;
    font-size: 10px;
  }
`
export const FormUrl = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const UrlReturnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Url = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 3.5rem;
  border: 1.5px solid var(--grey3);
  margin: 0px 0 10px 0;
  border-radius: 12px;
  text-decoration: none;
  color: var(--whiteDefault);
  @media ${breakpoint.md2} {
    width: 22rem;
    height: 2.8rem;
  }
  @media ${breakpoint.sm1} {
    width: 18rem;
    height: 2.2rem;
  }
`

export const ButtonUrl = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 3.4rem;
  border-radius: 9px;
  border: none;
  color: var(--blackDefault);
  font-weight: 600;
  border: none;
  z-index: 1;
  background-color: var(--greyDefault);
  position: relative;
  transition: var(--transition-width-fast);

  &::before {
    content: '';
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

  svg {
    margin-left: 5px;
  }

  @media ${breakpoint.bg1} {
    width: 9rem;
    height: 3.2rem;
    font-size: 12px;
  }
  @media ${breakpoint.md2} {
    width: 8.5rem;
    height: 2.8rem;
    font-size: 11px;
  }
  @media ${breakpoint.sm1} {
    width: 6rem;
    height: 2.2rem;
    font-size: 11px;
  }
`
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
`

export const UrlShortTitle = styled.p`
  width: 100%;
  font-size: 22px;
  color: var(--greyDefault);
  font-weight: 700;
  margin-bottom: 15px;
  @media ${breakpoint.md2} {
    font-size: 18px;
  }
  @media ${breakpoint.sm1} {
    font-size: 14px;
  }
  @media ${breakpoint.sm1} {
    font-size: 12px;
  }
`
