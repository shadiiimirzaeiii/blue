"use client";

import style from "./page.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  return (
    <Navbar bg="light" data-bs-theme="light" className={style["navbar-dir"]}>
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={Logo}
            alt="Logo"
            layout="responsive"
            className={style.logo}
          />
        </Navbar.Brand>

        <Nav.Link href="#home" className={style["nav-link"]}>
          دسته بندی ها
        </Nav.Link>
        <Nav.Link href="#home" className={style["nav-link"]}>
          اجاره تجهیز
        </Nav.Link>
        <Nav.Link href="#home" className={style["nav-link"]}>
          سوالات متداول
        </Nav.Link>
        <Nav.Link href="#home" className={style["nav-link"]}>
          درباره ما
        </Nav.Link>
        <Nav.Link href="#home" className={style["nav-link"]}>
          تماس با ما
        </Nav.Link>

        <Nav className="me-auto ">
          <div className="mb-2">
            <Button variant="light" className={style["light-btn"]}>
              اجاره تجهیزات می خواهم
            </Button>{" "}
            <Button variant="primary">تجهیزات صنعتی دارم</Button>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
