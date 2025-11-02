import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/opslagstavle">Opslagstavle</Link>
        </li>
        <li>
          <Link to="/om-os">Om os</Link>
        </li>
        <li>
          <Link to="/bestil-tid">Bestil tid</Link>
        </li>
        <li>
          <Link to="/praktiske-oplysninger">Praktiske oplysninger</Link>
        </li>
        
      </ul>
    </nav>
  );
};
