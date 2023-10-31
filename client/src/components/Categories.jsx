export const Categories = ({ value, onCangeCategory }) => {
  const categories = ["All", "15", "14", "13", "12", "11"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            onClick={() => onCangeCategory(index)}
            className={value === index ? "active" : ""}
            key={index}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
