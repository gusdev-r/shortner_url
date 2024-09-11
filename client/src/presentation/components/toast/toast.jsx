import React from 'react'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const StyledToastContainer = styled(ToastContainer).attrs({
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'dark',
})`
  .Toastify__toast {
    font-size: 14px;
    background-color: rgba(8, 8, 8, 0.6);
    backdrop-filter: blur(15px);
    font-weight: 300;
    color: #fff;
    border: solid 1px #272727;
    border-radius: 10px;
  }
`

const ToastConfig = () => {
  return <StyledToastContainer />
}

export default ToastConfig
