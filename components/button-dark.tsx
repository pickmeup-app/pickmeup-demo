import { FunctionComponent } from "react";
import styles from "../styles/common.module.css";

interface ButtonProps{
text: string,
url : string
}

const ButtonDark = ({text, url}: ButtonProps) => {
    return (
        <a className={styles.darkButton} href={url} target="_blank" rel="noreferrer">
            <button >{text}</button>
        </a>
        
    );
};

export default ButtonDark;
