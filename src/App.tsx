import RatingCard from "./layout/RatingCard.tsx";
import ThankyouCard from "./layout/ThankyouCard.tsx";
import { useRating } from "./context/RatingContextProvider.tsx";

function App() {
  const { isRated } = useRating();

  return (
    <main className="from-gradient-top to-gradient-bottom max-w-[412px] rounded-[15px] bg-linear-to-b px-300 py-400 text-white">
      {!isRated ? <RatingCard /> : <ThankyouCard />}
    </main>
  );
}

export default App;
