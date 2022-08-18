import { FunctionComponent } from "react";
import styles from "../styles/common.module.css";

const Header: FunctionComponent = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo} />
        </div>
    );
};

export default Header;
