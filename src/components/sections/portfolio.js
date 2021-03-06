import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const Portfolio = () => (
  <StyledSection id="portfolio">
    <GetStartedContainer>
      <GetStartedTitle>See the work produced by our team</GetStartedTitle>
      <PortfolioButton
        href="https://www.instagram.com/ourenterprise/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Give me a show
      </PortfolioButton>
      <Subtitle>Our portfolio is managed by Instagram.</Subtitle>
    </GetStartedContainer>
  </StyledSection>
)

export default Portfolio

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const PortfolioButton = styled.a`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-decoration: none;
  padding: 20px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${(props) => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.color.primary};
`
