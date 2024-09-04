// ContactForm.tsx
'use client'
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './page.module.css'; // Import the CSS module
import Image from 'next/image'; // Assuming you're using Next.js
import ContactUs from '../../public/contactusform.png';


const ContactForm: React.FC = () => {
  return (
    <Container className={styles.contactContainer}>
      <Row>
        <Col md={6} className={styles.contactForm}>
          <h2 className={styles.formTitle}>تماس با ما</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="نام شما*" className={styles.inputField} required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="ایمیل شما*" className={styles.inputField} required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" placeholder="پیام شما" rows={3} className={styles.textarea} />
            </Form.Group>
            <Button variant="primary" type="submit" className={styles.submitButton}>
              ارسال پیام
            </Button>
          </Form>
        </Col>
                <Col md={6} className={styles.contactImage}>
          <Image
            src={ContactUs} // Replace with your image path
            alt="Contact"
            width={500}
            height={500}
            layout="responsive"
          />
        </Col>

      </Row>
    </Container>
  );
};

export default ContactForm;
