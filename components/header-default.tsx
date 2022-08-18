import { FunctionComponent } from "react";
import styles from "../styles/common.module.css";

const HeaderDefault: FunctionComponent = () => {
    return (
        <div className={styles.headerDefault}>
            <div className={styles.logo} />
        </div>
    );
};

export default HeaderDefault;
