import { useEffect } from 'react';

type ObserverCallback = () => void;

const useElementObserver = (
  elementId: string,
  onEnterViewport: ObserverCallback,
  onLeaveViewport: ObserverCallback
): void => {
  useEffect(() => {
    const element = document.getElementById(elementId);

    if (!element) return; // 確保元素存在

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 元素進入可視範圍，執行 onEnterViewport callback
            onEnterViewport();
          } else {
            // 元素離開可視範圍，執行 onLeaveViewport callback
            onLeaveViewport();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    // 在 component unmount 時，取消監視
    return () => {
      observer.unobserve(element);
    };
  }, [elementId, onEnterViewport, onLeaveViewport]);
};

export default useElementObserver;
