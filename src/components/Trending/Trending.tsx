import { MovieCover, Section, Shadow, Controls } from "./Styled";
import { Movie } from "../../types";
import { MouseEvent, useState, useCallback, useRef } from "react";
import { InView } from "react-intersection-observer";
import DescriptionCard from "../movies/DescriptionCard";
import { useColorMode } from "@chakra-ui/color-mode";

const slidesLimit = 5;

const Trending = (props: TrendingProps) => {
  const { colorMode } = useColorMode();
  const [slideShowRef, setSlideShowRef] = useState<HTMLElement>();
  const [slides, setSlides] = useState<HTMLDivElement[]>([]);
  const [indicator, setIndicator] = useState(props.data[0].name);
  const carouselRef = useCallback((node: HTMLElement) => {
    if (node) {
      setSlideShowRef(node);
    }
  }, []);

  const slideRefs = useCallback((node: HTMLDivElement) => {
    if (node) {
      setSlides((nodes) => [...nodes, node]);
    }
  }, []);

  const cd = useRef({
    mouseDownPos: 0,
    scrollPos: 0,
  });
  const [grab, setGrab] = useState<"grab" | "grabbing">("grab");
  const [drag, setDrag] = useState(false);

  const mouseDownHandler = (e: MouseEvent) => {
    setDrag(true);
    setGrab("grabbing");
    cd.current.mouseDownPos = e.clientX;
    if (slideShowRef) {
      cd.current.scrollPos = slideShowRef.scrollLeft;
    }
  };
  const mouseMoveHandler = (e: MouseEvent) => {
    if (drag && slideShowRef) {
      let offset = (e.clientX - cd.current.mouseDownPos) * 2;
      slideShowRef.scrollLeft = cd.current.scrollPos - offset;
    }
  };

  const mouseUpHandler = () => {
    setDrag(false);
    setGrab("grab");
  };
  return (
    <Section ref={carouselRef}>
      {props.data.slice(0, slidesLimit).map((movie) => (
        <InView
          as="div"
          root={slideShowRef}
          threshold={0.8}
          id={movie.name}
          onChange={(inView, entry) => {
            if (inView) {
              setIndicator(entry.target.id);
            }
          }}
          style={{ minWidth: "100%", position: "relative" }}
          key={movie.name}
        >
          <MovieCover
            mode={colorMode}
            w="100%"
            maxH="100%"
            src={`/media/covers/${movie.name}.jpg`}
            objectFit="cover"
            draggable="false"
          />
          <Shadow
            ref={slideRefs}
            grabState={grab}
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
          />
          <DescriptionCard movieDetails={movie} />
        </InView>
      ))}
      <Controls>
        {props.data.slice(0, slidesLimit).map((movie, idx) => (
          <li
            key={movie.name}
            style={{
              listStyleType: indicator === movie.name ? "disc" : "circle",
            }}
            onClick={() => slides[idx].scrollIntoView(false)}
          ></li>
        ))}
      </Controls>
    </Section>
  );
};

export default Trending;

interface TrendingProps {
  data: Movie[];
}
