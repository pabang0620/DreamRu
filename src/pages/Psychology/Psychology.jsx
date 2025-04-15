import { Link } from "react-router-dom";
import { psychologyTests } from "../../utils/psychology/psychology";
import "./Psychology.css";

export default function Psychology() {
  return (
    <div className="psychology-page">
      <h2 className="psychology-title">🧠 심리 테스트</h2>
      <ul className="psychology-list">
        {Object.entries(psychologyTests).map(([key, test]) => (
          <li key={key} className="psychology-item">
            <Link
              to={`/psychology/${key}`}
              className="psychology-link"
              style={{ borderColor: test.color }}
            >
              {test.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
