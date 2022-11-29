import { RefObject, useCallback, useEffect, useRef, useState } from "react";

const useInterSection = (targetRef: RefObject<HTMLElement>) => {
  const observerRef = useRef<IntersectionObserver>(null);
  const [intersecting, setInterSecting] = useState(false);

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        setInterSecting(entries.some((entry) => entry.isIntersecting));
      });
    }
    return observerRef.current;
  }, [observerRef.current]);

  useEffect(() => {
    if (targetRef.current) {
      getObserver().observe(targetRef.current);
    }
  }, [targetRef.current]);

  return intersecting;
};
export default useInterSection;
