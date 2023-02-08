import { Link, useParams } from "react-router-dom";
import { data } from "../data";

const Fotter = () => {
  const { project } = useParams();
  const index = data.findIndex((item) => item.id === project);
  const next = index === data.length - 1 ? 0 : index + 1;
  const prev = index === 0 ? data.length - 1 : index - 1;

  return (
    <footer>
      <div>
        <Link className="left-angles" to={`/project/${data[prev].id}`}>
          <span className="angles">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span>Previous</span>
        </Link>
        <h2>
          <Link to={`/project/${data[prev].id}`}>{data[prev].title}</Link>
        </h2>
      </div>

      <div>
        <Link className="next" to={`/project/${data[next].id}`}>
          <span>Next</span>
          <span className="angles">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </Link>
        <h2>
          <Link to={`/project/${data[next].id}`}>{data[next].title}</Link>
        </h2>
      </div>
    </footer>
  );
};

export default Fotter;
