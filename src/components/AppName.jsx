import styles from "./Name.module.css";

function AppName() {
  return <h1 className={styles.name}>Todo App</h1>;
}

export default AppName;

// import styles from "./item.module.css";
// const Item = ({ foodItems }) => {
//   return <li className={styles.items}>{foodItems}</li>;
// };

// export default Item;
