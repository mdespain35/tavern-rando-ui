import AbilityScore from "./AbilityScore";

interface StatBlockProps {
  AbilityScores: {
    Charisma: {
      Score: number;
      Modifier: number;
    };
    Constitution: {
      Score: number;
      Modifier: number;
    };
    Dexterity: {
      Score: number;
      Modifier: number;
    };
    Intelligence: {
      Score: number;
      Modifier: number;
    };
    Strength: {
      Score: number;
      Modifier: number;
    };
    Wisdom: {
      Score: number;
      Modifier: number;
    };
  };
}

const StatBlock = ({ AbilityScores }: StatBlockProps) => {
  return (
    <>
      <p className="h3">Stat Block</p>
      <div className="border border-dark-subtle p-2 d-flex">
        <AbilityScore
          name="STR"
          score={AbilityScores.Strength.Score}
          modifier={AbilityScores.Strength.Modifier}
        ></AbilityScore>
        <AbilityScore
          name="DEX"
          score={AbilityScores.Dexterity.Score}
          modifier={AbilityScores.Dexterity.Modifier}
        ></AbilityScore>
        <AbilityScore
          name="CON"
          score={AbilityScores.Constitution.Score}
          modifier={AbilityScores.Constitution.Modifier}
        ></AbilityScore>
        <AbilityScore
          name="INT"
          score={AbilityScores.Intelligence.Score}
          modifier={AbilityScores.Intelligence.Modifier}
        ></AbilityScore>
        <AbilityScore
          name="WIS"
          score={AbilityScores.Wisdom.Score}
          modifier={AbilityScores.Wisdom.Modifier}
        ></AbilityScore>
        <AbilityScore
          name="CHA"
          score={AbilityScores.Charisma.Score}
          modifier={AbilityScores.Charisma.Modifier}
        ></AbilityScore>
      </div>
    </>
  );
};

export default StatBlock;
