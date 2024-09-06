"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  return (
    <Navbar bg="light" data-bs-theme="light" className="fixed z-[10000] w-[99%] top-2 left-2 right-2 h-[90px] rounded-t-lg bg-white rtl">
      <Container className="flex justify-between items-center h-full px-4">
        <Navbar.Brand href="#home">
          <Image
            src={Logo}
            alt="Logo"
            width={180}
            height={35}
            className="border-4"
          />
        </Navbar.Brand>

        <div className="flex-1 flex  gap-2 w-full md:w-1/2">
          <Nav.Link href="#home" className="px-4 py-2 flex items-center">دسته بندی ها</Nav.Link>
          <Nav.Link href="#home" className="px-4 py-2 flex items-center">اجاره تجهیز</Nav.Link>
          <Nav.Link href="#home" className="px-4 py-2 flex items-center">سوالات متداول</Nav.Link>
          <Nav.Link href="#home" className="px-4 py-2 flex items-center">درباره ما</Nav.Link>
          <Nav.Link href="#home" className="px-4 py-2 flex items-center">تماس با ما</Nav.Link>
        </div>

        <div className="flex gap-2">
          <Button variant="light" className="border border-[#0147f5] text-[#0147f5] px-4 py-2 rounded-md">
            اجاره تجهیزات می خواهم
          </Button>
          <Button variant="primary">تجهیزات صنعتی دارم</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
