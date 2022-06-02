import Item from "../Item/ItemUrl";
import Button from "../Button/Button";
import "./styles.css";

const List = ({ itemUrls, onDelete, remove, reloadAll, onRefreshUrl }) => {
  // re
  return (
    <div className="list">
      <div className="list-btn">
        <Button color="#f5bf9c" text="Remove All" onClick={remove} />
        <Button color="#f5bf9b" text="Reaload All" onClick={reloadAll} />
      </div>
      {itemUrls.map((url) => (
        <Item
          key={url.id}
          url={url}
          onDelete={onDelete}
          onRefreshUrl={onRefreshUrl}
          status={url.status}
        />
      ))}
    </div>
  );
};

export default List;
