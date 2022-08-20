import type { NextPage } from "next";
import PageContainer from "../components/page-container";
import ButtonDark from "../components/button-dark";
import styles from "../styles/common.module.css";
import { getTextWithGreenHighlitedPart } from "../utils/text-highlither";


const Choose: NextPage = () => {
    return (
        <PageContainer headerType={"init"}>
            <div className={styles.chooseText}>
                { getTextWithGreenHighlitedPart("What is your profile for the trip you are planning?", "profile")
                }
            </div>
            <ButtonDark text={"Driver"} url={"./driver"}/>
            <ButtonDark text={"Passenger"} url={"./passenger"}/>
        </PageContainer>
    );
};

export default Choose;
