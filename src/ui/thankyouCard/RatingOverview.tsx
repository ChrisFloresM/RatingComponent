import { useRating } from "../../context/RatingContextProvider.tsx";

function RatingOverview() {
  const { rating, maxRating } = useRating();
  return (
    <p className="bg-grey-900 text-preset-5 leading-preset-5-regular sm:text-preset-4 sm:leading-preset-4-regular rounded-full px-200 py-100 font-normal text-orange-500">
      You selected {rating} out of {maxRating}
    </p>
  );
}

export default RatingOverview;
