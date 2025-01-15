import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 6rem 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const HeroText = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #e74c3c;
  color: #fff;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #c0392b;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const FeatureSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  flex-basis: calc(33% - 1rem);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const FeatureIcon = styled.i`
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

function Home() {
  return (
    <>
      <Hero>
        <HeroTitle>Transforme Seu Futuro Financeiro</HeroTitle>
        <HeroText>
          Na FinanciaMais Consultoria, oferecemos soluções personalizadas para ajudar você a alcançar seus objetivos financeiros e construir um futuro próspero.
        </HeroText>
        <CTAButton to="/contact">Comece Agora</CTAButton>
      </Hero>
      <FeatureSection>
        <FeatureCard>
          <FeatureIcon className="fas fa-chart-line" />
          <FeatureTitle>Planejamento Estratégico</FeatureTitle>
          <p>Desenvolvemos estratégias financeiras sob medida para maximizar seu crescimento e segurança financeira.</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon className="fas fa-shield-alt" />
          <FeatureTitle>Gestão de Riscos</FeatureTitle>
          <p>Proteja seu patrimônio com nossas análises de risco avançadas e estratégias de mitigação.</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon className="fas fa-graduation-cap" />
          <FeatureTitle>Educação Financeira</FeatureTitle>
          <p>Empodere-se com conhecimento através de nossos workshops e recursos educacionais exclusivos.</p>
        </FeatureCard>
      </FeatureSection>
    </>
  );
}

export default Home;