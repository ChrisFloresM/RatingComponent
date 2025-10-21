import RatingButtons from "./RatingButtons.tsx";
import { useRating } from "../../context/RatingContextProvider.tsx";

function Rating() {
  const { maxRating } = useRating();
  return (
    <div className="flex flex-col gap-200">
      <h1 className="text-preset-2 leading-preset-2 sm:text-preset-1 sm:leading-preset-1 font-bold">
        How did we do?
      </h1>
      <p className="text-preset-5 leading-preset-5-regular sm:text-preset-4 sm:leading-preset-4-regular text-grey-500 font-normal">
        Please let us know how we did with your support request. All fedback is
        appreciated to help us improve our offering!
      </p>
      <RatingButtons maxRating={maxRating} />
    </div>
  );
}

export default Rating;
