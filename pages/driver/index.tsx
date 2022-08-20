import type { NextPage } from "next";
import PageContainer from "../../components/page-container";;
import DriveForm, { LabelsAndInputs } from "../../components/drive-form";

const Driver: NextPage = () => {
    return (
        <PageContainer headerType={"init"}>
            <DriveForm labelsAndInputs={getLabels()} userType={"driver"}/>
        </PageContainer>
        
    );
};

const getLabels = () : LabelsAndInputs[] => 
{
    return [
        { labelAllText: 'Date of the trip', labelGreenText: "Date" , inputName: "date"},
        { labelAllText: 'Where are you going from?', labelGreenText: "from?", inputName: "whereFrom" },
        { labelAllText: 'Where are you going to?', labelGreenText: "to?", inputName: "whereTo" },
        { labelAllText: 'Time of leaving', labelGreenText: "leaving", inputName: "timeLeaving" },
        { labelAllText: 'Approx. time of arrival', labelGreenText: "arrival", inputName: "timeArrival" },
        { labelAllText: 'Max number of passengers', labelGreenText: "passengers" , inputName: "MaxPassenger"},
    ];
}

export default Driver;
