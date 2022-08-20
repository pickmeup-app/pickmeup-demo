import { ReactNode } from "react";
import styles from "../styles/common.module.css";

export const getTextWithGreenHighlitedPart = (allText: string, greenText: string): ReactNode => {
    var rectangleStartIndex = allText.indexOf(greenText);
    var rectangleEndIndex = rectangleStartIndex + greenText.length;
    return (
        <span>
            {allText.substring(0, rectangleStartIndex)}
            <span className={styles.greenTextSpan}>
                {greenText}
            </span>
            {allText.substring(rectangleEndIndex)}
        </span>
    )
}

