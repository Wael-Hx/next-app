import { MovieCover, Section, Shadow } from "./Styled";
import { data } from "../../data";
import { Box } from "@chakra-ui/layout";
import { useRef, MouseEvent, useState } from "react";

const Trending = () => {
  const slideShowRef = useRef<HTMLDivElement>(null);
  const mouseDownPos = useRef(0);
  const scrollPos = useRef(0);
  const [grab, setGrab] = useState<"grab" | "grabbing">("grab");
  const [drag, setDrag] = useState(false);

  const mouseDownHandler = (e: MouseEvent) => {
    setDrag(true);
    setGrab("grabbing");
    mouseDownPos.current = e.clientX;
    if (slideShowRef.current) {
      scrollPos.current = slideShowRef.current.scrollLeft;
    }
  };
  const mouseMoveHandler = (e: MouseEvent) => {
    if (drag && slideShowRef.current) {
      let offset = (e.clientX - mouseDownPos.current) * 3;
      slideShowRef.current.scrollLeft = scrollPos.current - offset;
    }
  };

  const mouseUpHandler = () => {
    setDrag(false);
    setGrab("grab");
  };
  return (
    <Section ref={slideShowRef}>
      {data.map((movie) => (
        <Box minW="100%" key={movie.name}>
          <MovieCover
            id={movie.name}
            w="100%"
            maxH="100%"
            src={movie.cover}
            objectFit="cover"
            draggable="false"
          />
          <Shadow
            grabState={grab}
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
          />
        </Box>
      ))}
    </Section>
  );
};

export default Trending;
