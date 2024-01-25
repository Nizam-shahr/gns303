import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { products } from "../../../data";
import {
  LeftContainer,
  RightContainer,
  TextWrapper,
  Wrapper,
} from "../../styles/Skill.styled";
import Slider from "@/constants/Carousel";

const Skill = ({ product }) => {
  console.log(product);
  return (
    <Wrapper>
      <LeftContainer>
        <Slider images={product.images}></Slider>
      </LeftContainer>
      <RightContainer>
        <TextWrapper>
          <h1>{product.name.toLowerCase()}</h1>
          {product.group && (
            <span>
              This product was made by group {product?.group} for the GNS 303
              Project
            </span>
          )}

          <p>{product.detail}</p>
        </TextWrapper>
      </RightContainer>
    </Wrapper>
  );
};

export const getStaticProps = async ({ params }) => {
  if (!params) throw new Error("route id param is not defined");

  const members = products.filter(
    (member) => member.id.toString() === params.id
  );

  return {
    props: {
      product: members[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = products.map((team) => ({
    params: { id: team.id.toString() },
  }));
  return { paths, fallback: false };
};

export default Skill;
