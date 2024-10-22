import "./Category.css";

function Category() {
  return (
    <div className="category">
      <div className="container">
        <ul className="category__wrapper">
          <li>
            <a href="#">Nature</a>
          </li>
          <li>
            <a href="#">Photography</a>
          </li>
          <li>
            <a href="#">Relaxation</a>
          </li>
          <li>
            <a href="#">Vacation</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Adventure</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
