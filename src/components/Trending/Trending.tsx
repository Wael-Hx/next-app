import { MovieCover, Section, Shadow, Controls } from "./Styled";
import { data } from "../../data";
import { MouseEvent, useState, useCallback } from "react";
import { InView } from "react-intersection-observer";
import DescriptionCard from "../movies/DescriptionCard";

const Trending = (props: TrendingProps) => {
  const [slideShowRef, setSlideShowRef] = useState<HTMLElement>();
  const [slides, setSlides] = useState<HTMLDivElement[]>([]);
  const [indicator, setIndicator] = useState(data[0].name);
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

  const [pos, setPos] = useState({
    mouseDownPos: 0,
    scrollPos: 0,
  });
  const [grab, setGrab] = useState<"grab" | "grabbing">("grab");
  const [drag, setDrag] = useState(false);

  const mouseDownHandler = (e: MouseEvent) => {
    setDrag(true);
    setGrab("grabbing");
    setPos((p) => ({ ...p, mouseDownPos: e.clientX }));
    if (slideShowRef) {
      setPos((p) => ({ ...p, scrollPos: slideShowRef.scrollLeft }));
    }
  };
  const mouseMoveHandler = (e: MouseEvent) => {
    if (drag && slideShowRef) {
      let offset = (e.clientX - pos.mouseDownPos) * 1.5;
      slideShowRef.scrollLeft = pos.scrollPos - offset;
    }
  };

  const mouseUpHandler = () => {
    setDrag(false);
    setGrab("grab");
  };
  return (
    <Section ref={carouselRef}>
      {data.slice(0, props.limit).map((movie) => (
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
            w="100%"
            maxH="100%"
            src={movie.cover}
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
        {data.slice(0, props.limit).map((movie, idx) => (
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
  limit: number;
}
