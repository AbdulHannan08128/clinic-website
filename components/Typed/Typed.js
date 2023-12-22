import React from 'react'

import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypedJS(props) {
    // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: props.strings, // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 500
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span ref={el}></span>
  )
}
