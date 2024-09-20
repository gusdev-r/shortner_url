import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer/footer'
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
  FormUrl,
  UrlReturnBox,
  Url,
  ButtonUrl,
  ShortUrlShortSection,
  UrlShortTitle,
} from './style'
import FormInput from '../../components/input/input'
import { MdSecurity } from 'react-icons/md'
import { MdOutlinePinch } from 'react-icons/md'
import { IoFlash } from 'react-icons/io5'
import { MdOutlineTouchApp } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import { SlSizeActual } from 'react-icons/sl'
import { toast } from 'react-toastify'
import api from '../../../infra/server/api'
import urlValidation from './validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { CgSpinnerTwo } from 'react-icons/cg'
import { FaRegCopy } from 'react-icons/fa6'

const ShortnerHome = () => {
  const [success, setSuccess] = useState(false)
  const [originalUrl, setOriginalUrl] = useState('')
  const [shortedUrl, setShortedUrl] = useState('')
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    setSuccess(false)
    setShortedUrl('')
    setisLoading(false)
  }, [originalUrl])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(urlValidation),
  })

  function shortUrl(data) {
    setOriginalUrl(data.url)
    const params = {
      url: data.url,
    }
    setisLoading(true)
    api
      .post('/url/shorten/', params)
      .then((response) => {
        setShortedUrl(response.data.short_url)
        setSuccess(true)
        toast.success('URL encurtada com sucesso!')
      })
      .catch((error) => {
        setSuccess(false)
        toast.error('Algo deu errado ao encurtar a url!')
      })
      .finally(() => {
        setisLoading(false)
      })
  }

  const handleInputChange = (e) => {
    setOriginalUrl(e.target.value)
  }

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('URL copiada!')
      })
      .catch((err) => {
        toast.error('Algo deu errado.')
      })
  }

  return (
    <>
      <PageContainer>
        <MainContent>
          <WelcomeSection>
            <WelcomeContainer>
              <Title>Encurtador de URL</Title>
              <TitleDesc>
                Bem-vindo ao projeto EnX! Desenvolvido por gudev_r para encurtar
                seus links de forma rápida e eficiente!
              </TitleDesc>
            </WelcomeContainer>
          </WelcomeSection>
          <ShortUrlSection>
            <FormUrl
              onChange={(e) => handleInputChange(e)}
              onSubmit={handleSubmit(shortUrl)}
            >
              <FormInput
                type="text"
                label="URL para encurtar"
                placeholder={
                  originalUrl ? originalUrl : 'Insira seu url nesse campo'
                }
                errors={errors}
                register={register}
                registerName="url"
              />
              <ButtonNow disabled={isLoading} type="submit">
                {isLoading ? (
                  <CgSpinnerTwo className="icon" size={26} />
                ) : (
                  'Clique para encurtar sua URL'
                )}
              </ButtonNow>
            </FormUrl>
          </ShortUrlSection>

          {success ? (
            <ShortUrlShortSection>
              <UrlReturnBox>
                <UrlShortTitle>URL encurtada</UrlShortTitle>

                <Url href={shortedUrl} target="_blank">
                  {shortedUrl}
                </Url>

                <ButtonUrl onClick={() => handleCopy(shortedUrl)}>
                  Copiar <FaRegCopy />
                </ButtonUrl>
              </UrlReturnBox>
            </ShortUrlShortSection>
          ) : (
            <section></section>
          )}

          <InfoSection>
            <InfoContainer>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Segurança</InfoTitle>
                  <MdSecurity />
                </TitleContainer>
                <InfoSubTitle>
                  Proteja seus links com nossa camada extra de segurança.
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Responsivo</InfoTitle>
                  <MdOutlinePinch />
                </TitleContainer>
                <InfoSubTitle>
                  Acesse e gerencie seus links em qualquer dispositivo, a
                  qualquer hora.
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Rápido</InfoTitle>
                  <IoFlash />
                </TitleContainer>
                <InfoSubTitle>
                  Encurte seus links em segundos com eficiência.
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Fácil de Usar</InfoTitle>
                  <MdOutlineTouchApp />
                </TitleContainer>
                <InfoSubTitle>
                  Navegue e utilize nossas ferramentas com uma interface
                  intuitiva e amigável.
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Grátis</InfoTitle>
                  <FaCheck />
                </TitleContainer>
                <InfoSubTitle>
                  Aproveite todas as funcionalidades sem nenhum custo!
                </InfoSubTitle>
              </InfoElement>
              <InfoElement>
                <TitleContainer>
                  <InfoTitle>Links Curtos</InfoTitle>
                  <SlSizeActual />
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

export default ShortnerHome
