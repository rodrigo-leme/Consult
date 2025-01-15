import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.form`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

const FormTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #34495e;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ContactInfo = styled.div`
  background-color: #3498db;
  color: #fff;
  border-radius: 10px;
  padding: 2rem;
  flex: 1;
`;

const ContactInfoTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const ContactInfoItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const ContactIcon = styled.i`
  margin-right: 1rem;
  font-size: 1.2rem;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Obrigado por entrar em contato! Retornaremos em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit}>
        <FormTitle>Entre em Contato</FormTitle>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Assunto</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Mensagem</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></TextArea>
        </FormGroup>
        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </ContactForm>
      <ContactInfo>
        <ContactInfoTitle>Informações de Contato</ContactInfoTitle>
        <ContactInfoItem>
          <ContactIcon className="fas fa-map-marker-alt" />
          <span>Av. Paulista, 1000 - São Paulo, SP</span>
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactIcon className="fas fa-phone" />
          <span>+55 (11) 1234-5678</span>
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactIcon className="fas fa-envelope" />
          <span>contato@financiamais.com</span>
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactIcon className="fas fa-clock" />
          <span>Segunda a Sexta: 9h às 18h</span>
        </ContactInfoItem>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;