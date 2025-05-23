import { Link } from "react-router-dom";

export default function PageSummary(props) {
  const pages = Array.isArray(props.page) ? props.page : [props.page];
  return (
    <>
      {pages.map((page) => (
        <header key={page.id} className="major">
          <h1>{page.title}</h1>
          <p>{page.text.substring(0, 53) + "..."}</p>
          <ul className="actions">
            <li>
              <Link to="/page/full" className="button big">
                Read more...
              </Link>
            </li>
          </ul>
        </header>
      ))}
    </>
  );
}
