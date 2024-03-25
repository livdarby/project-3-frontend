import { Link } from "react-router-dom";

// GOAL OF THIS PAGE : DISPLAY CATEGORY CARD

function HomePageProductCard({ category }: any) {
  console.log(`This is the category: ${category}`);
  return (
    <div className="column ">
      <Link to="/">
        <div className="card">
          <div className="card-header has-background-warning-dark has-text-centered is-round">
            <div className="card-header-title">{`${category
              .charAt(0)
              .toUpperCase()}${category.slice(1).toLowerCase()}`}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomePageProductCard;
