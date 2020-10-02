import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Services = () => (
  <Section id="services">
    <StyledContainer>
      <Subtitle>Services</Subtitle>
      <SectionTitle>All Service Available</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Digital Printing</FeatureTitle>
          <FeatureText>
            Provides printing from digital images to real prints with good
            quality and guaranteed.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Digital Imaging</FeatureTitle>
          <FeatureText>
            Manipulate your images so they become real without even leaving the
            house.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Design Graphic</FeatureTitle>
          <FeatureText>
            The process of editing or selecting, managing so as to create a good
            image according to his wishes.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>2D & 3D Architecture</FeatureTitle>
          <FeatureText>
            Make plans from blueprints of building drawings and provide 2D & 3D
            so you can be sure of our services.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Publishing</FeatureTitle>
          <FeatureText>
            Publish content according to your wishes with our high quality
            services.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Development Apps & Website</FeatureTitle>
          <FeatureText>
            Creating an Android Application based on the Kotlin or Java
            programming language or you can also use a Framework, while to
            create a Website you can use a Framework or some kind of Content
            Management System such as Wordpress or the like.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Services

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
