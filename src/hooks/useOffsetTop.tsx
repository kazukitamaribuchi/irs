import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { viewportTopAtom, pageOffsetTopAtom } from "store/jotai/atoms";
import { useThrottle } from "./useThrottle";

export function useOffsetTop(ref?: React.RefObject<HTMLElement>) {
  const [viewportTop, setViewportTop] = useAtom(viewportTopAtom);
  const [pageOffsetTop, setPageOffsetTop] = useAtom(pageOffsetTopAtom);

  const handler = useThrottle(() => {
    if (!ref?.current) return;

    const clientRect = ref.current.getBoundingClientRect();
    setViewportTop(clientRect.top);
    const newPageOffsetTop = clientRect.top + window.pageYOffset;
    setPageOffsetTop(newPageOffsetTop);
  }, 100);

  useEffect(() => {
    if (!ref?.current) return;

    handler();
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, [handler]);

  return { viewportTop, pageOffsetTop };
}
