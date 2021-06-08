import { AspectRatio, Container } from "@chakra-ui/layout";
import { ReactNode, useRef } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@chakra-ui/system";

const StudioLogo = (props: StudioProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const mouseEnterhandler = () => videoRef.current?.play();
  const mouseLeaveHandler = () => videoRef.current?.pause();
  return (
    <AR
      onMouseEnter={mouseEnterhandler}
      onMouseLeave={mouseLeaveHandler}
      w="250px"
      ratio={21 / 9}
    >
      <>
        <Container w="full" h="full" centerContent>
          {props.logo}
        </Container>

        <video ref={videoRef} muted loop src={props.backgroundAnimation} />
      </>
    </AR>
  );
};

export default StudioLogo;

interface StudioProps {
  logo?: ReactNode;
  backgroundAnimation?: string;
}

const fade = keyframes`
  from {
    transform:scale(1);
    opacity:1;
  }
  to {
    transform:scale(7);
    opacity:0;
  }
`;
const AR = styled(AspectRatio)`
  border: 4px solid rgb(126, 126, 126, 0.5);
  border-radius: 5px;
  cursor: pointer;
  & video {
    visibility: hidden;
  }
  &:hover {
    transform: scale(1.1);
    & > video {
      visibility: visible;
    }
    & > div > svg {
      animation: ${fade} 1.5s forwards;
    }
  }

  transition: all 0.3s ease-in-out;
`;
