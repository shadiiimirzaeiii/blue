"use client";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import ContactUs from "../../public/image/contactusform.png";

const ContactForm: React.FC = () => {
  return (
    <Container className="my-12 p-5 bg-white rounded-lg shadow-md mx-auto w-[972px]">
      <Row>
        <div className="flex justify-center">
          <div className="w-[208px] border-b-2 border-orange700 flex items-center justify-center p-2 mb-20">
            <h1 className="text-center text-black text-2xl font-bold mt-8">
              تماس با ما
            </h1>
          </div>
        </div>

        <Col md={6} className="pl-4">
          <Form>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="نام شما*"
                className="mb-4 p-2 border rounded-md border-gray-300"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="ایمیل شما*"
                className="mb-4 p-2 border rounded-md border-gray-300"
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Control
                as="textarea"
                placeholder="پیام شما"
                rows={3}
                className="mb-4 p-2 border rounded-md border-gray-300"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md border-none cursor-pointer w-1/2"
            >
              ارسال پیام
            </Button>
          </Form>
        </Col>
        <Col md={6} className="pr-4">
          <Image src={ContactUs} alt="Contact" width={500} height={500} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
