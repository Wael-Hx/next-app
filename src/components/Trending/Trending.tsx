import { MovieCover, Section, Shadow, Controls } from "./Styled";
import { data } from "../../data";
import { MouseEvent, useState, useCallback } from "react";
import { InView } from "react-intersection-observer";

const Trending = () => {
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
      let offset = (e.clientX - pos.mouseDownPos) * 3;
      slideShowRef.scrollLeft = pos.scrollPos - offset;
    }
  };

  const mouseUpHandler = () => {
    setDrag(false);
    setGrab("grab");
  };
  return (
    <Section ref={carouselRef}>
      {data.map((movie) => (
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
          style={{ minWidth: "100%" }}
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
        </InView>
      ))}
      <Controls>
        {data.map((movie, idx) => (
          <li
            key={movie.name}
            style={{
              listStyleType: indicator === movie.name ? "disc" : "circle",
            }}
            onClick={() => slides[idx].scrollIntoView()}
          ></li>
        ))}
      </Controls>
    </Section>
  );
};

export default Trending;
