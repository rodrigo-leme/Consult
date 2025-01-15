import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #fff;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h2`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const AboutText = styled.p`
  color: #34495e;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #3498db;
`;

const TeamMemberName = styled.h3`
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  color: #7f8c8d;
  font-style: italic;
`;

function About() {
  const teamMembers = [
    { name: "Ana Silva", role: "Fundadora e CEO", image: "https://randomuser.me/api/portraits/women/32.jpg" },
    { name: "Carlos Oliveira", role: "Diretor Financeiro", image: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Mariana Santos", role: "Especialista em Investimentos", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  ];

  return (
    <AboutSection>
      <AboutTitle>Sobre a FinanciaMais Consultoria</AboutTitle>
      <AboutText>
        A FinanciaMais Consultoria nasceu da paixão por capacitar pessoas e empresas a alcançarem seu máximo potencial financeiro. Fundada em 2010, nossa empresa tem se destacado no mercado por oferecer soluções inovadoras e personalizadas para cada cliente.
      </AboutText>
      <AboutText>
        Nossa missão é simplificar o complexo mundo das finanças, tornando-o acessível e compreensível para todos. Acreditamos que o conhecimento financeiro é a chave para a liberdade e o sucesso, e estamos comprometidos em compartilhar esse conhecimento com nossos clientes.
      </AboutText>
      <AboutText>
        Com uma equipe de especialistas altamente qualificados e anos de experiência no mercado, oferecemos um serviço de excelência que combina expertise técnica com um atendimento caloroso e personalizado. Nosso compromisso é construir relacionamentos duradouros baseados na confiança, integridade e resultados consistentes.
      </AboutText>
      <TeamSection>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <TeamMemberImage src={member.image} alt={member.name} />
            <TeamMemberName>{member.name}</TeamMemberName>
            <TeamMemberRole>{member.role}</TeamMemberRole>
          </TeamMember>
        ))}
      </TeamSection>
    </AboutSection>
  );
}

export default About;