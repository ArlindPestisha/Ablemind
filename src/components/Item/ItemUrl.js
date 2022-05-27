import { FaTimes } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import "./styles.css";

const Item = ({ url, onDelete, onRefreshUrl, status }) => {
  
  return (
    <div className="task">
      <h3>
        
        <FiRefreshCcw onClick={() => onRefreshUrl(url)} />
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
