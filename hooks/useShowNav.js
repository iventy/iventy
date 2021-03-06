import { useEffect, useState } from 'react';

export function useShowNav() {
  const [showNav, toggleNav] = useState(true);

  let prevScrollPos = 0;
  const handleScroll = e => {
    if (window.scrollY <= prevScrollPos || window.scrollY < 50) {
      toggleNav(true);
    } else {
      toggleNav(false);
    }
    prevScrollPos = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showNav;
}
