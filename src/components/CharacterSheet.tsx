import ClassCard from "./ClassCard";
import StatBlock from "./StatBlock";

export type CharacterSheetProps = {
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
};

const CharacterSheet = ({ character }: CharacterSheetProps) => {
  return (
    <>
      <h1 className="display-4">Character Sheet</h1>
      <div className="border border-dark">
        <p className="h3">{character.Race}</p>
        <p className="h3">Level: {character.Level}</p>
        <p className="h3">HP: {character.Hitpoints}</p>
        <p className="h3">{character.Class.length > 1 ? "Classes" : "Class"}</p>
        <div className="d-flex">
          {character.Class.map((value) => {
            return (
              <ClassCard
                key={value.Name}
                Name={value.Name}
                SubClass={value.SubClass}
                Level={value.Level}
                HitDie={value.HitDie}
              />
            );
          })}
        </div>
        <StatBlock AbilityScores={character.AbilityScores}></StatBlock>
      </div>
    </>
  );
};

export default CharacterSheet;
