"use client"; 

import React from "react";
import styles from "./page.module.css"; 
import Card from "react-bootstrap/Card";
import gps from "../../public/gps.png";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description }) => {
  return (
    <Card className={`col-3 ${styles["cardContainer"]}`}>
      <div className={styles["imageContainer"]}>
        <Image src={gps} alt="gps" width={56} height={56} />
      </div>
      <Card.Body>
        <Card.Title className={styles["cardTitle"]}>{title}</Card.Title>
        <Card.Text className={styles["cardDescription"]}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
