import React from "react";
import { useState } from "react";

export default function AccordionItem({title, content}, index) {
  // Hooks
  const [state, setState] = useState(0);
  const [isActive, setActive] = useState(false);
  return (
    <div>
      <div className="accordion-items m-auto border w-50">
        {/* Mutiple */}
        <h1
        onClick={() => {setActive(!isActive)}}
        >{title}</h1>
        {isActive && <p>{content}</p>}
      </div>
    </div>
  );
}
