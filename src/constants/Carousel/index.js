import Image from "next/image";
import React from "react";

import { Dot, StyledCarousel } from "./style";

const Slider = ({ images }) => {
  return (
    <div style={{ maxWidth: 660 }}>
      <Card deviceType={"desktop"} images={images} />
    </div>
  );
};

export default Slider;

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200,
    },
    items: 1,
  },
};

const CustomDot = ({ index, onClick, active, images }) => {
  return (
    <Dot
      data-index={index}
      key={index}
      onClick={() => onClick()}
      className={active && "active"}
    >
      {
        React.Children.toArray(
          images.map((item, index) => (
            <Image src={item} key={index} alt="" width={97} height={80} />
          ))
        )[index]
      }
    </Dot>
  );
};

const Card = ({ deviceType: { mobile, tablet, desktop }, images }) => {
  let deviceType = "desktop";
  if (mobile) {
    deviceType = "mobile";
  }
  if (tablet) {
    deviceType = "tablet";
  }
  return (
    <StyledCarousel
      showDots
      ssr
      infinite={true}
      slidesToSlide={1}
      containerClass="custom"
      responsive={responsive}
      deviceType={deviceType}
      autoPlay={false}
      arrows={false}
      customDot={<CustomDot images={images} />}
    >
      {images.slice(0, 5).map((image, index) => {
        return (
          <div
            key={index}
            style={{
              height: 500,
              width: 600,
              position: "relative",
            }}
          >
            <Image
              width={590}
              height={400}
              draggable={false}
              alt="text"
              src={image}
            />
          </div>
        );
      })}
    </StyledCarousel>
  );
};
