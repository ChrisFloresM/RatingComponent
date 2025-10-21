import RatingButton from "./RatingButton.tsx";
import { useRating } from "../../context/RatingContextProvider.tsx";

function RatingButtons() {
  const { maxRating } = useRating();
  const numbers: number[] = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <div>
      <fieldset className="flex list-none justify-between">
        <legend className="sr-only">Select a rating</legend>
        {numbers.map((i: number) => (
          <RatingButton key={i} number={i} />
        ))}
      </fieldset>
    </div>
  );
}

export default RatingButtons;
