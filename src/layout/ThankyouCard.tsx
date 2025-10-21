import RatingOverview from "../ui/thankyouCard/RatingOverview.tsx";
import ThankyouImage from "../ui/thankyouCard/ThankyouImage.tsx";
import ThankyouMessage from "../ui/thankyouCard/ThankyouMessage.tsx";

const MAX_RATING = 5;
function ThankyouCard() {
  return (
    <div className="flex flex-col items-center gap-300 sm:gap-400">
      <ThankyouImage />
      <RatingOverview maxRating={MAX_RATING} />
      <ThankyouMessage />
    </div>
  );
}
export default ThankyouCard;
