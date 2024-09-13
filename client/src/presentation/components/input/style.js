import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const FormInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 20px 5px 20px;
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

export const Input = styled.input`
  width: 100%;
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
  @media ${breakpoint.md2} {
    height: 2.8rem;
  }
  @media ${breakpoint.sm1} {
    height: 2.2rem;
    font-size: 11px;
    border-radius: 8px;
  }
`

export const ErrorText = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 11px;
  color: var(--erro);
  padding: 0.5rem 0 0 0;
  @media ${breakpoint.sm1} {
    font-size: 8px;
  }
`
