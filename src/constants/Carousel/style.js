import styled from "styled-components";
import Carousel from "react-multi-carousel";
export const Dot = styled.li`
  margin-right: 20px;
  border: 3px solid #ccc;
  border-radius: 8px;
  &.active {
    border: 3px solid #eecb00;
  }
`;

export const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-dot-list {
    justify-content: flex-start;
  }
`;
