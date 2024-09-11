import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: start;
  transition: 0.3s;
  padding: 8px;
`

export const Label = styled.label`
  width: 100%;
  font-size: 22px;
  color: var(--greyDefault);
  font-weight: 500;
  margin-bottom: 15px;
  @media ${breakpoint.md1} {
    font-size: 12px;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    width: 8px;
  }
`

export const Input = styled.input`
  width: 52rem;
  height: 3.5rem;
  border-radius: 12px;
  border: 1.5px solid var(--grey3);
  background: none;
  background-color: none;
  font-size: 14.5px;
  color: var(--grey8);
  padding: 16px;

  &:focus {
    outline: none;
    border-color: var(--grey6);
    color: var(--greyDefault);
    transition: var(--transition-color-slow), var(--transition-border-slow);
  }

  @media ${breakpoint.md1} {
    width: 20rem;
    height: 2.4rem;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    width: 13rem;
    height: 2rem;
  }
`

export const ErrorText = styled.div`
  width: 52rem;
  font-weight: 400;
  font-size: 11px;
  color: var(--erro);
  padding: 0.5rem 0 0 0;
  @media ${breakpoint.md1} {
    max-width: 20rem;
    font-size: 10px;
  }
  @media ${breakpoint.sm2} {
    font-size: 7px;
    width: 13rem;
    margin-bottom: 2px;
  }
`
