import * as yup from 'yup'

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

const urlValidation = yup.object().shape({
  url: yup
    .string()
    .max(1000, 'Excedeu a quantidade de caracteres.')
    .required('O campo URL é obrigatório')
    .matches(urlRegex, 'Formato de URL inválido, verifique os dados.'),
})

export default urlValidation
