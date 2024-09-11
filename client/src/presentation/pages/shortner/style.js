import styled from 'styled-components'

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
  margin-right: 8rem;
  margin-left: 8rem;
`

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15rem;
`
export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* background-color: green; */
`

export const Title = styled.h1`
  font-size: 5rem;
  text-align: left;
  color: var(--greyDefault);
`

export const TitleDesc = styled.p`
  max-width: 600px;
  font-size: 16px;
  color: var(--greyDefault);
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
`

export const ShortUrlSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
  width: 65%;
  border: 1px solid var(--greyDefault);
  border-radius: 28px;
  margin-bottom: 20px;
`

export const InfoSection = styled.section`
  height: 25rem;
  width: 70%;
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  svg {
    margin-left: 14px;
    margin-bottom: 10px;
  }
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
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const InfoSubTitle = styled.p`
  max-width: 250px;
  color: var(--greyDefault);
  display: unset;
  font-size: 12px;
  text-align: left;
`
export const FormUrl = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const UrlReturnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  svg {
    margin-left: 5px;
    font-size: 14px;
  }
`

export const Url = styled.a`
  width: 30rem;
  height: 3.5rem;
  border: 1.5px solid var(--grey3);
  padding: 16px;
  border-radius: 12px;
  text-decoration: none;
  color: var(--whiteDefault);
`

export const ButtonUrl = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2.5rem;
  border-radius: 9px;
  border: none;
  color: var(--blackDefault);
  margin-top: 10px;
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
`
export const ShortUrlShortSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 50%;
  /* border: 1px solid var(--greyDefault); */
  border-radius: 28px;
  margin-bottom: 20px;
`

export const UrlShortTitle = styled.p`
  width: 100%;
  font-size: 20px;
  color: var(--greyDefault);
  font-weight: 500;
  margin-bottom: 15px;
`
