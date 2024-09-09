import { useState } from "react";
import Button from "./components/Button";
import "./App.css";
import CharacterSheet from "./components/CharacterSheet";

function App() {
  const [character, setCharacter] = useState({
    Race: "Human",
    Level: 1,
    Class: [
      {
        Name: "Warlock",
        SubClass: "The Great Old One",
        Level: 1,
        HitDie: 8,
      },
    ],
    AbilityScores: {
      Charisma: {
        Score: 9,
        Modifier: -1,
      },
      Constitution: {
        Score: 12,
        Modifier: 1,
      },
      Dexterity: {
        Score: 20,
        Modifier: 5,
      },
      Intelligence: {
        Score: 15,
        Modifier: 2,
      },
      Strength: {
        Score: 15,
        Modifier: 2,
      },
      Wisdom: {
        Score: 12,
        Modifier: 1,
      },
    },
    Hitpoints: 56,
  });
  const [displayCharacter, setDisplayCharacter] = useState(false);

  const onOptimizedClick = () => {
    setCharacter({
      Race: "Duergar",
      Level: 5,
      Class: [
        {
          Name: "Fighter",
          SubClass: "Eldritch Knight",
          Level: 5,
          HitDie: 10,
        },
      ],
      AbilityScores: {
        Charisma: {
          Score: 9,
          Modifier: -1,
        },
        Constitution: {
          Score: 18,
          Modifier: 4,
        },
        Dexterity: {
          Score: 20,
          Modifier: 5,
        },
        Intelligence: {
          Score: 15,
          Modifier: 2,
        },
        Strength: {
          Score: 15,
          Modifier: 2,
        },
        Wisdom: {
          Score: 12,
          Modifier: 1,
        },
      },
      Hitpoints: 56,
    });
    setDisplayCharacter(true);
  };

  const onChaosClick = () => {
    setCharacter({
      Race: "Harengon",
      Level: 5,
      Class: [
        {
          Name: "Monk",
          SubClass: "Way of the Open Hand",
          Level: 5,
          HitDie: 8,
        },
      ],
      AbilityScores: {
        Charisma: {
          Score: 11,
          Modifier: 0,
        },
        Constitution: {
          Score: 13,
          Modifier: 1,
        },
        Dexterity: {
          Score: 14,
          Modifier: 2,
        },
        Intelligence: {
          Score: 13,
          Modifier: 1,
        },
        Strength: {
          Score: 14,
          Modifier: 2,
        },
        Wisdom: {
          Score: 12,
          Modifier: 1,
        },
      },
      Hitpoints: 26,
    });
    setDisplayCharacter(true);
  };

  return (
    <>
      <h1 className="display-1">Another Tavern Rando</h1>
      <Button
        children="Optimized"
        color="success"
        onClick={() => onOptimizedClick()}
      ></Button>
      <Button
        children="Chaos"
        color="danger"
        onClick={() => onChaosClick()}
      ></Button>
      {displayCharacter ? (
        <CharacterSheet character={character} />
      ) : (
        <p>There is no character</p>
      )}
    </>
  );
}

export default App;
