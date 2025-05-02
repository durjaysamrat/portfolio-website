import { useEffect } from 'react';

const useAnimation = (ref) => {

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          ref.current.classList.add("animate")
      });
    });
    observer.observe(ref.current);
  }, [ref]);


};

export default useAnimation;