import React from "react";
import { Wrapper } from "./style";
import { products } from "../../../data";
import Image from "next/image";
import { Button } from "antd";
import { useRouter } from "next/router";

const Skills = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <header>
        <h1>COMMON SKILLS</h1>
      </header>

      <div className="skills">
        {products.map(({ detail, id, images, name, group, price }) => (
          <div className="skill">
            <Image
              src={images[0]}
              width={413}
              height={403}
              alt="product-image"
            />
            <div className="content">
              <span>{name}</span>
              <Button onClick={() => router.push(`/product-details/${id}`)}>
                Enroll Now!!
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
