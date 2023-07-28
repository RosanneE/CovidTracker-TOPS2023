import OptionalContactInfo from "../../Components/OptionalContact/OptionalContactInfo";
import "../../Components/OptionalContact/OptionalContact.css";
import FinalSubmission from "../../Components/OptionalContact/FinalSubmission";
import YesContactInfo from "../../Components/OptionalContact/YesContactInfo";

export default function OptionalQuestions(props) {
  return (
    <div>
      <OptionalContactInfo />
      <FinalSubmission />
      <YesContactInfo />
    </div>
  );
}
