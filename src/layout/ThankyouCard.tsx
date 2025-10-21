import RatingOverview from "../ui/thankyouCard/RatingOverview.tsx";
import ThankyouImage from "../ui/thankyouCard/ThankyouImage.tsx";
import ThankyouMessage from "../ui/thankyouCard/ThankyouMessage.tsx";

function ThankyouCard() {
  return (
    <div className="flex flex-col items-center gap-300 sm:gap-400">
      <ThankyouImage />
      <RatingOverview />
      <ThankyouMessage />
    </div>
  );
}
export default ThankyouCard;
