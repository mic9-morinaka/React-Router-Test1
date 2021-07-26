import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page２ページです</h1>
      <Link to="/page2/999?name=aaaaa">URL Parameter</Link>
    </div>
  );
};
