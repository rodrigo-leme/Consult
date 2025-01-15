import React from 'react';
import styled from 'styled-components';

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.i`
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #34495e;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #34495e;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

function Services() {
  const services = [
    { 
      icon: "fas fa-coins", 
      title: "Planejamento Financeiro", 
      description: "Desenvolvemos estratégias personalizadas para alcançar seus objetivos financeiros de curto e longo prazo." 
    },
    { 
      icon: "fas fa-chart-pie", 
      title: "Gestão de Investimentos", 
      description: "Otimizamos sua carteira de investimentos para maximizar retornos e minimizar riscos." 
    },
    { 
      icon: "fas fa-file-invoice-dollar", 
      title: "Consultoria Tributária", 
      description: "Oferecemos orientação especializada para otimizar sua situação fiscal e maximizar economias." 
    },
    { 
      icon: "fas fa-umbrella", 
      title: "Planejamento de Aposentadoria", 
      description: "Criamos planos robustos para garantir sua segurança financeira e qualidade de vida no futuro." 
    },
    { 
      icon: "fas fa-handshake", 
      title: "Análise de Crédito", 
      description: "Avaliamos suas opções de crédito e negociamos as melhores condições para impulsionar seus projetos." 
    },
    { 
      icon: "fas fa-chalkboard-teacher", 
      title: "Educação Financeira", 
      description: "Fornecemos workshops e treinamentos para melhorar sua literacia financeira e tomada de decisões." 
    },
  ];

  return (
    <>
      <SectionTitle>Nossos Serviços</SectionTitle>
      <SectionSubtitle>
        Oferecemos uma gama completa de serviços financeiros para atender às suas necessidades específicas e ajudá-lo a prosperar financeiramente.
      </SectionSubtitle>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon className={service.icon} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </>
  );
}

export default Services;