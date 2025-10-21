import RatingButton from "./RatingButton.tsx";

interface RatingProps {
  maxRating: number;
}

function RatingButtons({ maxRating }: RatingProps) {
  const numbers: number[] = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <div>
      <ul
        className="flex list-none justify-between"
        role="radiogroup"
        aria-label="rating-options"
      >
        {numbers.map((i: number) => (
          <RatingButton key={i} number={i} />
        ))}
      </ul>
    </div>
  );
}

export default RatingButtons;
