interface AbilityScoreProps {
  name: string;
  score: number;
  modifier: number;
}

const AbilityScore = ({ name, score, modifier }: AbilityScoreProps) => {
  return (
    <div className="border border-dark p-3 ability-scores mx-auto">
      <h5 className="border-bottom border-dark p-2 mx-auto">{name}</h5>
      <p className="h2">{modifier > 0 ? "+" + modifier : modifier}</p>
      <p className="border rounded-circle mt-4 mb-0 p-1">{score}</p>
    </div>
  );
};

export default AbilityScore;
