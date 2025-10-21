import IconStar from "../ui/ratingCard/IconStar.tsx";
import Rating from "../ui/ratingCard/Rating.tsx";
import SubmitButton from "../ui/ratingCard/SubmitButton.tsx";

function RatingCard() {
  return (
    <div className="flex flex-col gap-300 sm:gap-400">
      <IconStar />
      <Rating />
      <SubmitButton />
    </div>
  );
}

export default RatingCard;
