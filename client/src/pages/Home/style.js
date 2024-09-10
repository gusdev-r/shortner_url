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
  padding: 12px 64px;
  display: flex;
  background: none;
  border: 1.5px solid var(--greyDefault);
  color: var(--whiteDefault);
  font-weight: 300;
  border-radius: 8px;
  font-size: 14px;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: var(--grey2);
  }
`

export const ShortUrlSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 22rem;
  width: 70%;
  border: 1px solid grey;
  border-radius: 28px;
`

export const InfoSection = styled.section`
  height: 25rem;
  width: 70%;
  display: flex;
  align-items: center;
  /* background-color: blue; */
  margin-bottom: 80px;
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
