import "./list-item.css";

const ListItem = ({ children, classes }) => {
  return <li className={classes}>{children}</li>;
};

export default ListItem;
