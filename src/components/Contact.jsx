import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

/* ---------------- MAIN SECTION ---------------- */
const Section = styled.section`
  width: 100%;
  padding: 70px 20px;
  background: linear-gradient(180deg, #050505, #0a0a0f);
  display: flex;
  justify-content: center;
  color: white;
`;

/* ---------------- WRAPPER ---------------- */
const Wrapper = styled.div`
  width: 100%;
  max-width: 560px;   /* 🔥 reduced width */
  text-align: center;
  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

/* ---------------- HEADING ---------------- */
const Heading = styled.h2`
  font-size: 38px;   /* 🔥 smaller */
  font-weight: 800;
  margin-bottom: 8px;

  background: linear-gradient(90deg, #5dd0ff, #c78aff);
  -webkit-background-clip: text;
  color: transparent;
`;

const SubText = styled.p`
  font-size: 15px;   /* 🔥 slightly smaller */
  opacity: 0.75;
  margin-bottom: 28px;
`;

/* ---------------- FORM CARD ---------------- */
const Form = styled.form`
  padding: 28px;   /* 🔥 reduced */
  border-radius: 18px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(13px);
  border: 1px solid rgba(255,255,255,0.15);

  animation: pop 0.6s ease;

  @keyframes pop {
    0% { opacity: 0; transform: scale(0.92); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

/* ---------------- INPUT STYLE ---------------- */
const baseInput = `
  width: 100%;
  padding: 12px;      /* 🔥 smaller height */
  margin-top: 12px;
  border-radius: 10px;

  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  font-size: 14px;     /* 🔥 smaller font */
  outline: none;
  transition: 0.25s ease;

  &:focus {
    border-color: #63d4ff;
    box-shadow: 0 0 10px #63d4ff77;
    transform: scale(1.01);
  }

  &::placeholder {
    color: #d4d4d4;
  }
`;

const Input = styled.input`${baseInput}`;

const TextArea = styled.textarea`
  ${baseInput}
  min-height: 110px;    /* 🔥 reduced height */
  resize: none;
`;

/* ---------------- BUTTON ---------------- */
const Button = styled.button`
  margin-top: 18px;
  padding: 12px;       /* 🔥 slimmer button */
  border-radius: 10px;
  width: 100%;
  font-size: 16px;     /* 🔥 smaller font */
  font-weight: 700;
  border: none;
  cursor: pointer;

  background: linear-gradient(90deg, #5bd7ff, #b37aff);
  color: white;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 14px rgba(160, 160, 255, 0.6);
  }
`;

export default function Contact() {
  const formRef = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ieo9cxl",
        "template_y9hel01",
        formRef.current,
        "2cQrDr7g2C3SNQ9u7"
      )
      .then(() => {
        setOpen(true);
        formRef.current.reset();
      });
  };

  return (
    <Section id="contact">
      <Wrapper>
        <Heading>Contact</Heading>
        <SubText>Send me a message — I’ll reply soon!</SubText>

        <Form ref={formRef} onSubmit={sendEmail}>
          <Input name="from_name" placeholder="Your Name" required />
          <Input name="from_email" placeholder="Your Email" required />
          <Input name="subject" placeholder="Subject" required />
          <TextArea name="message" placeholder="Message" required />

          <Button type="submit">Send Message</Button>
        </Form>

        <Snackbar
          open={open}
          autoHideDuration={3500}
          onClose={() => setOpen(false)}
          message="Message Sent Successfully!"
        />
      </Wrapper>
    </Section>
  );
}
