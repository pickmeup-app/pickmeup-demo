import styles from "../styles/common.module.css";
import { getTextWithGreenHighlitedPart } from "../utils/text-highlither";


export interface HihlightedTextProps {
    AllText: string,
    HighLightedText: string,
}

export interface LabelsAndInputs {
    labelAllText: string,
    labelGreenText: string,
    inputName: string,
}

export interface FormProps {
    labelsAndInputs: LabelsAndInputs[],
    userType?: "driver" | "passenger";
}

const DriveForm = ({ labelsAndInputs: labelsAndInputs, userType: userType }: FormProps) => {
    let rangeInputTargetUserType = userType == "driver"? "passenger" : "driver";
    
    return (
        <form >
            {labelsAndInputs.map((record) => (
                <span>
                    <label>{getTextWithGreenHighlitedPart(record.labelAllText, record.labelGreenText)}</label>
                    <input className={styles.myInput} type="text" name={record.inputName}/>
                </span>
            ))}
            
            <label>{getTextWithGreenHighlitedPart(`How much can you adjust to ${ rangeInputTargetUserType }?`, `${ rangeInputTargetUserType}?`)}</label>
            <input type="range" name="range" min={0} max={10} />
            <div className={styles.alignSpaceBetween}>
                <span>0 km</span>
                <span>10 km</span>
            </div>
            <input className={styles.darkButton} type="submit" value="Apply" />
        </form>
    );
};


export default DriveForm;