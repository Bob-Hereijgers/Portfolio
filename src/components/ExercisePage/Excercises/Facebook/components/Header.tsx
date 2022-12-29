import styles from "../App.module.css";

export interface HeaderProps {
    name: string,
    icon: string
  }

  const Header = (props: HeaderProps) => {
    return (
      <div className={styles.header}>
      <div className={styles.options}>
        <i className="fa fa-chevron-down"></i>
      </div>
      <img
        className={styles.co_logo}
        src={props.icon}
        alt="pfp "
      />
      <div className={styles.co_name}>
        <a href="/">{props.name}</a>
      </div>
      <div className={styles.time}>
        <a href="/">2hrs</a> · <i className="fa fa-globe"></i>
      </div>
    </div>
    );
  }

  export default Header;