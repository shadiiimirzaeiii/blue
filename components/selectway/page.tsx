import React from "react";
import style from "./page.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const SplitScreen: React.FC = () => {
  return (
    <Container fluid className={style.splitScreen}>
      <Row className={style.row}>
        {/* Right Section */}
        <Col className={`${style.section} ${style.rightSection}`} xs={6}>
          <div className={style.content}>
            <h2>اجاره تجهیز میخواهی؟</h2>
            <p>اگر می‌خواهی تجهیزاتی برای خدمات خودت رزرو کنی از اینجا وارد شو.</p>
            <Button className={style.button} variant="danger">
              اجاره تجهیز میخواهم
            </Button>
          </div>
        </Col>

        {/* Left Section */}
        <Col className={`${style.section} ${style.leftSection}`} xs={6}>
          <div className={style.content}>
            <h2>تجهیزاتت رو اجاره میدی؟</h2>
            <p>اگر می‌خواهی تجهیزاتتو اجاره بدی از اینجا وارد شو.</p>
            <Button className={style.button} variant="primary">
              تجهیزات صنعتی دارم
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SplitScreen;
