import { FaTimes } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import "./styles.css";

const Item = ({ url, onDelete, onRefreshUrl, status }) => {
  return (
    <div className="item-url">
      <h3>
        <FiRefreshCcw
          style={{ cursor: "pointer" }}
          onClick={() => onRefreshUrl(url)}
        />
        <div className="status">
          {status.status !== undefined ? (
            status.status >= 100 && status.status <= 199 ? (
              <span style={{ backgroundColor: "#8CD6FF" }}>
                {status.status}
              </span>
            ) : status.status >= 200 && status.status <= 299 ? (
              <span style={{ backgroundColor: "#99DA8E" }}>
                {status.status}
              </span>
            ) : status.status >= 300 && status.status <= 399 ? (
              <span style={{ backgroundColor: "#A6A5FF" }}>
                {status.status}
              </span>
            ) : status.status >= 400 && status.status <= 499 ? (
              <span style={{ backgroundColor: "#F2EFA9" }}>
                {status.status}
              </span>
            ) : status.status >= 500 && status.status <= 599 ? (
              <span style={{ backgroundColor: "#F59A9A" }}>
                {status.status}
              </span>
            ) : (
              "Unknown"
            )
          ) : (
            "No URL entered"
          )}
        </div>
        {url.url}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(url.id)}
        />
      </h3>
    </div>
  );
};

export default Item;
