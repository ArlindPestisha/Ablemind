import Item from "../Item/ItemUrl";
import Button from "../Button/Button";

const List = ({ urls, onDelete, remove, reloadAll, status, onRefreshUrl }) => {
  // how to extract the status
  return (
    <>
      <Button color="#f5bf9c" text="Remove All" onClick={remove} />
      <Button color="#f5bf9b" text="Reaload All" onClick={reloadAll} />
      {urls.map((url) => (
        <Item
          key={url.id}
          url={url}
          onDelete={onDelete}
          onRefreshUrl={onRefreshUrl}
          // status={status}
        />
      ))}
    </>
  );
};

export default List;
