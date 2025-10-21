import { useRating } from "../../context/RatingContextProvider.tsx";

interface RatingProps {
  number: number;
}

function RatingButton({ number }: RatingProps) {
  const { rating, handleRating, maxRating } = useRating();

  const backgroundColor = rating === number ? "bg-orange-500" : "bg-grey-900";
  const fontColor = rating === number ? "text-grey-900" : "text-grey-500";
  const classStyles = `${backgroundColor} ${fontColor} preset-5 hover:text-grey-900 active:text-grey-900 h-[42px] w-[42px] rounded-full transition-[background-color] duration-200 hover:cursor-pointer hover:bg-white active:bg-orange-500 sm:h-[51px] sm:w-[51px]`;

  return (
    <li>
      <button
        aria-label={`Rate ${number} out of ${maxRating}`}
        role="radio"
        aria-checked={rating === number}
        onClick={() => handleRating(number)}
        className={classStyles}
        type="button"
      >
        {number}
      </button>
    </li>
  );
}

export default RatingButton;
