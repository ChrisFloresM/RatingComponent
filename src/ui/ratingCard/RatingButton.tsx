import { useRating } from "../../context/RatingContextProvider.tsx";

interface RatingProps {
  number: number;
}

function RatingButton({ number }: RatingProps) {
  const { rating, handleRating, maxRating } = useRating();

  const backgroundColor = rating === number ? "bg-orange-500" : "bg-grey-900";
  const fontColor = rating === number ? "text-grey-900" : "text-grey-500";
  const classStyles = `${backgroundColor} ${fontColor} flex justify-center items-center preset-5 hover:text-grey-900 active:text-grey-900 h-[42px] w-[42px] rounded-full transition-[background-color] duration-200 hover:cursor-pointer hover:bg-white active:bg-orange-500 sm:h-[51px] sm:w-[51px]`;

  return (
    <label
      className={`${classStyles} has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-orange-500 has-[:focus-visible]:ring-offset-2`}
    >
      <input
        type="radio"
        name="rating"
        checked={number === rating}
        onClick={() => handleRating(number)}
        className="sr-only"
        aria-label={`Rating ${number} out of ${maxRating}`}
      />
      <span>{number}</span>
    </label>
  );
}

export default RatingButton;
