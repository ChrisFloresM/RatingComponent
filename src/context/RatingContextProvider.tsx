import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

const RatingContext = createContext<RatingContextType | null>(null);
const MAX_RATING = 5;

interface RatingContextType {
  isRated: boolean;
  rating: number | null;
  handleSubmit: () => void;
  handleRating: (rating: number) => void;
  error: string | null;
  maxRating: number;
}

function RatingContextProvider({ children }: PropsWithChildren) {
  const [isRated, setIsRated] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRating = useCallback(function (rating: number) {
    setRating(rating);
    setError(null);
  }, []);

  const handleSubmit = useCallback(
    function handleSubmit() {
      if (rating === null) {
        setError("Please, provide a rating before submitting");
        return;
      }

      setIsRated(true);
      setError(null);
    },
    [rating],
  );

  const contextValue = useMemo<RatingContextType>(
    () => ({
      isRated,
      handleSubmit,
      rating,
      handleRating,
      error,
      maxRating: MAX_RATING,
    }),
    [handleRating, handleSubmit, isRated, rating, error],
  );

  return (
    <RatingContext.Provider value={contextValue}>
      {children}
    </RatingContext.Provider>
  );
}

function useRating() {
  const context = useContext(RatingContext);

  if (context === null) {
    throw new Error("Context used outside RatingContextProvider");
  }

  return context;
}

export default RatingContextProvider;
export { useRating };
