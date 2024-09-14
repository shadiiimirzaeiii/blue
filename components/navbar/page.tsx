"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Logo from "../../public/image/logo.svg";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar
        bg="light"
        data-bs-theme="light"
        className=" shadow-md fixed z-[10000] top-2 left-2 right-2 h-[90px] rounded-t-lg bg-white px-0"
      >
        <div className="flex h-full px-0 m-0 items-center pl-8 w-[1440px]">
          <Navbar.Brand href="#home">
            <Image src={Logo} alt="Logo" width={180} height={35} />
          </Navbar.Brand>

          <div className="flex-1 flex gap-2 ">
            <Nav.Link href="#home" className="px-2 py-2 mr-6">
              دسته بندی ها
            </Nav.Link>
            <Nav.Link href="#home" className="px-2 py-2">
              اجاره تجهیز
            </Nav.Link>
            <Nav.Link href="#home" className="px-2 py-2">
              سوالات متداول
            </Nav.Link>
            <Nav.Link href="#home" className="px-2 py-2">
              درباره ما
            </Nav.Link>
            <Nav.Link href="#home" className="px-2 py-2">
              تماس با ما
            </Nav.Link>
          </div>

          <div className="flex gap-2 pl-8">
            <Button
              variant="light"
              className="border-2 border-mainblue text-mainblue px-4 py-2 rounded-md bg-white"
            >
              اجاره تجهیزات می خواهم
            </Button>
            <Button className="bg-mainblue px-4 py-2 rounded-md">
              تجهیزات صنعتی دارم
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
