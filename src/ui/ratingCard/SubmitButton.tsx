import { useRating } from "../../context/RatingContextProvider.tsx";

function SubmitButton() {
  const { handleSubmit, error } = useRating();

  return (
    <>
      <button
        onClick={handleSubmit}
        className="preset-5 rounded-full bg-orange-500 py-200 text-black transition-[background-color] duration-200 hover:cursor-pointer hover:bg-white active:bg-white"
      >
        SUBMIT
      </button>
      {error && <p className="preset-5 text-orange-500">{error}</p>}
    </>
  );
}

export default SubmitButton;
