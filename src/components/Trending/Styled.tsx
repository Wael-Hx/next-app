import { Image } from "@chakra-ui/image";
import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.9) inset;
  width: 93vw;
  height: 80vh;
  margin: auto;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    height: 0px;
  }
`;

export const MovieCover = styled(Image)`
  scroll-snap-align: start;
`;

export const Controls = styled.ul`
  position: fixed;
  bottom: calc(100vh - 88vh);
  right: 50%;
  transform: translateX(50%);
  font-size: 2rem;
  color: white;
  filter: drop-shadow(2px 4px 6px black);
  display: flex;
  justify-content: center;
  list-style-type: circle;
  & > a {
    margin-inline: 20px;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 80px 10px rgba(0, 0, 0, 0.9) inset;
`;
