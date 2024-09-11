interface AbilityScoreProps {
  name: string;
  score: number;
  modifier: number;
}

const AbilityScore = ({ name, score, modifier }: AbilityScoreProps) => {
  return (
    <div className="border border-dark p-3 mx-auto">
      <h5 className="border-bottom border-dark p-2 mx-auto">{name}</h5>
      <p className="h3">{modifier > 0 ? "+" + modifier : modifier}</p>
      <p className="border rounded-circle mt-n2">{score}</p>
    </div>
  );
};

export default AbilityScore;
