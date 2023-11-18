import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ByAuthor(props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(props.apiUrl + "posts/byauthor")
      .then((response) => response.json())
      .then((response) => {
        setResults(response);
      });
  }, []);

  return (
    <>
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            <Link to={"/posts/author/" + item.id}>
              {item.id + " (" + item.count + ")"}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
