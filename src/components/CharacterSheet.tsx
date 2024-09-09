import ClassCard from "./ClassCard";

interface CharacterSheetProps {
  character: {
    Race: string;
    Level: number;
    Class: {
      Name: string;
      SubClass: string;
      Level: number;
      HitDie: number;
    }[];
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
    Hitpoints: number;
  };
}

const CharacterSheet = ({ character }: CharacterSheetProps) => {
  return (
    <div className="border border-dark">
      <h1 className="display-4">Character Sheet</h1>
      <p className="h3">Race: {character.Race}</p>
      <p className="h3">Level: {character.Level}</p>
      {character.Class.map((value) => {
        return (
          <ClassCard
            Name={value.Name}
            SubClass={value.SubClass}
            Level={value.Level}
            HitDie={value.HitDie}
          />
        );
      })}
    </div>
  );
};

export default CharacterSheet;
