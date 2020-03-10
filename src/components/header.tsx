import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { ReactComponent as Logo } from 'images/dialogue-logo.svg'
import LanguagePicker from './language-picker'
import Title from './title'
import { mobileBreakpoint } from 'theme'

interface Props {
  title?: string
}

const LogoContainer = styled.div`
  box-shadow: rgb(242, 241, 245) 0px 2px 10px;
  background-color: ${props => props.theme.colors.primaryLight};
  padding: 24px 42px 21px 18px;
  border-bottom-right-radius: 100px;
  flex-basis: 0;

  @media (max-width: ${mobileBreakpoint}px) {
    padding: 12px 32px 8px 12px;
  }
`

const LanguagePickerContainer = styled.div`
  width: 200px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: ${mobileBreakpoint}px) {
    flex-wrap: wrap;

    ${Title} {
      order: 3;
    }
    ${LanguagePickerContainer} {
      order: 2;
      flex-basis: 0;
    }
  }
`

export const Header: React.FC<Props> = ({ title, ...rest }) => (
  <HeaderContainer {...rest}>
    <Link to="/">
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Link>

    {title && <Title>{title}</Title>}

    <LanguagePickerContainer>
      <span
        role="img"
        aria-label="Canada"
        css={`
          font-size: 36px;
        `}
      >
        🇨🇦
      </span>
      <LanguagePicker
        css={`
          margin-left: 2px;
        `}
      />
    </LanguagePickerContainer>
  </HeaderContainer>
)

export default Header
