import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

/* ------------ GLOBAL BACKGROUND ------------ */
const Container = styled.div`
  width: 100%;
  padding: 70px 0; /* reduced from 100px */
  background: linear-gradient(180deg, #050505, #09090f);
  color: #fff;
`;

/* ------------ WRAPPER ------------ */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; /* reduced gap between heading & subtext */

  animation: fadeUp 1.2s ease;

  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

/* ------------ HEADING ------------ */
const Title = styled.h2`
  margin-bottom: 5px; /* reduced */
  font-size: 48px; /* slightly reduced from 50px */
  font-weight: 800;

  background: linear-gradient(90deg, #7ef0ff, #c97bff);
  -webkit-background-clip: text;
  color: transparent;

  animation: glow 2s ease-in-out infinite alternate;

  @keyframes glow {
    from { text-shadow: 0 0 20px #7ef0ff88; }
    to { text-shadow: 0 0 40px #c97bffcc; }
  }
`;

const Desc = styled.p`
  font-size: 17px;
  max-width: 520px;
  text-align: center;
  opacity: 0.8;
  margin-bottom: 15px; /* reduced from default */
`;

/* ------------ FORM ------------ */
const ContactForm = styled.form`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 18px;


  padding: 32px; /* reduced padding */
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);

  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);

  animation: floatCard 4s ease-in-out infinite;

  @keyframes floatCard {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  }
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px; /* reduced */
  color: #dff6ff;
`;

/* ------------ INPUTS ------------ */
const baseInput = `
  width: 100%;
  box-sizing: border-box;

  padding: 14px 16px; /* reduced */
  font-size: 16px; /* reduced */
  border-radius: 12px;

  border: none;
  outline: none;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);

  color: #fff;

  transition: 0.3s ease;

  &:focus {
    border-color: #7ef0ff;
    box-shadow: 0 0 10px #7ef0ffcc;
    transform: scale(1.015);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const ContactInput = styled.input`${baseInput}`;

const ContactInputMessage = styled.textarea`
  ${baseInput}
  min-height: 120px; /* slightly reduced */
`;

/* ------------ BUTTON ------------ */
const ContactButton = styled.input`
  padding: 12px;
  border-radius: 12px;
  border: none;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;

  color: #fff;
  background: linear-gradient(225deg, #7ef0ff, #c97bff);

  transition: 0.3s ease;
  box-shadow: 0 0 12px rgba(128, 214, 255, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 18px rgba(128, 214, 255, 0.9);
  }

`;

/* ------------ CONTACT COMPONENT ------------ */
const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ieo9cxl",
      "template_y9hel01",
      form.current,
      "2cQrDr7g2C3SNQ9u7"
    )
    .then(() => {
      setOpen(true);
      form.current.reset();
    })
    .catch((error) => console.log("Email Error:", error));
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out for any opportunities or collaborations!</Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Send me a message ✨</ContactTitle>

          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" name="message" required />

          <ContactButton type="submit" value="Send Message" />
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
