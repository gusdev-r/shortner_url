import React from 'react'
import { Footer } from '../../components/Footer/footer'
import {
  MainContent,
  PageContainer,
  Title,
  WelcomeContainer,
  WelcomeSection,
  TitleDesc,
  ButtonNow,
  ShortUrlSection,
  InfoSection,
  InfoElement,
  InfoTitle,
  InfoSubTitle,
  TitleContainer,
  InfoContainer,
} from './style'
import FormInput from '../../components/FormInput/formInput'
import { MdSecurity } from 'react-icons/md'
import { MdOutlinePinch } from 'react-icons/md'
import { IoFlash } from 'react-icons/io5'
import { MdOutlineTouchApp } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import { SlSizeActual } from 'react-icons/sl'

const Home = () => {
  return (
    <>
      <PageContainer>
        <MainContent>
          <WelcomeSection>
            <WelcomeContainer>
              <Title>Encurtador de URL</Title>
              <TitleDesc>
                {' '}
                Bem-vindo ao projeto EnX! Desenvolvido por gudev_r para encurtar
                seus links de forma rápida e eficiente!
              </TitleDesc>
            </WelcomeContainer>
          </WelcomeSection>
          <ShortUrlSection>
            <FormInput
              type="text"
              label="URL para encurtar"
              placeholder="Insira seu url nesse campo"
              // errors={errors}
              // register={register}
              registerName="emailOrUsername"
            />
            <ButtonNow>Clique para encurtar sua URL</ButtonNow>
          </ShortUrlSection>
          <InfoSection>
            <InfoContainer>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Segurança</InfoTitle>
                  <MdSecurity
                    size={32}
                    style={{ marginLeft: '14px', marginBottom: '10px' }}
                  />
                </TitleContainer>
                <InfoSubTitle>
                  Proteja seus links com nossa camada extra de segurança.
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Responsivo</InfoTitle>
                  <MdOutlinePinch
                    size={32}
                    style={{ marginLeft: '14px', marginBottom: '10px' }}
                  />
                </TitleContainer>
                <InfoSubTitle>
                  Acesse e gerencie seus links em qualquer dispositivo, a
                  qualquer hora.
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Rápido</InfoTitle>
                  <IoFlash
                    size={32}
                    style={{ marginLeft: '14px', marginBottom: '10px' }}
                  />
                </TitleContainer>
                <InfoSubTitle>
                  Encurte seus links em segundos com eficiência.
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Fácil de Usar</InfoTitle>
                  <MdOutlineTouchApp
                    size={32}
                    style={{ marginLeft: '14px', marginBottom: '10px' }}
                  />
                </TitleContainer>
                <InfoSubTitle>
                  Navegue e utilize nossas ferramentas com uma interface
                  intuitiva e amigável.
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Grátis</InfoTitle>
                  <FaCheck
                    size={32}
                    style={{ marginLeft: '14px', marginBottom: '10px' }}
                  />
                </TitleContainer>
                <InfoSubTitle>
                  Aproveite todas as funcionalidades sem nenhum custo!
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Links Curtos</InfoTitle>
                  <SlSizeActual
                    size={32}
                    style={{ marginLeft: '14px', marginBottom: '10px' }}
                  />
                </TitleContainer>
                <InfoSubTitle>
                  Transforme URLs longas em links compactos e fáceis de
                  compartilhar.
                </InfoSubTitle>
              </InfoElement>
            </InfoContainer>
          </InfoSection>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
