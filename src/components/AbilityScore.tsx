interface AbilityScoreProps {
  name: string;
  score: number;
  modifier: number;
}

const AbilityScore = ({ name, score, modifier }: AbilityScoreProps) => {
  return (
    <div className="border border-dark pt-3 ability-scores mx-auto">
      <h5 className="border-bottom border-dark p-2 mx-auto">{name}</h5>
      <p className="h1 mt-2 p-2">{modifier > 0 ? "+" + modifier : modifier}</p>
      <p className="border border-black rounded-circle w-50 mx-auto mt-2 mb-1 p-1">
        {score}
      </p>
    </div>
  );
};

export default AbilityScore;
