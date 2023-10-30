import { useState } from "react";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["All", "15", "14", "13", "12", "11"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
