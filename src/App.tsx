import { useState } from "react";
import Button from "./components/Button";
import "./App.css";
import CharacterSheet from "./components/CharacterSheet";
import axios from "axios";

function App() {
  const [level, setLevel] = useState(1);
  // const [levelDropdown, setLevelDropdown] = useState(false);
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [character, setCharacter] = useState({
    Race: "",
    Level: 0,
    Class: [
      {
        Name: "",
        SubClass: "",
        Level: 0,
        HitDie: 0,
      },
    ],
    AbilityScores: {
      Charisma: {
        Score: 0,
        Modifier: 0,
      },
      Constitution: {
        Score: 0,
        Modifier: 0,
      },
      Dexterity: {
        Score: 0,
        Modifier: 0,
      },
      Intelligence: {
        Score: 0,
        Modifier: 0,
      },
      Strength: {
        Score: 0,
        Modifier: 0,
      },
      Wisdom: {
        Score: 0,
        Modifier: 0,
      },
    },
    Hitpoints: 0,
  });
  const [displayCharacter, setDisplayCharacter] = useState(false);

  const onOptimizedClick = () => {
    axios
      .get("http://localhost:8080/?optimized=true&level=" + level, {})
      .then((res) => setCharacter(res.data))
      .then(() => setDisplayCharacter(true));
  };

  const onChaosClick = () => {
    axios
      .get("http://localhost:8080/?optimized=false&level=" + level, {})
      .then((res) => setCharacter(res.data))
      .then(() => setDisplayCharacter(true));
  };

  return (
    <>
      <h1 className="display-1">Another Tavern Rando</h1>

      <select
        name="level"
        id="select-level"
        className="form-select mb-4 w-25 mx-auto"
        onChange={(event) => setLevel(parseInt(event.target.value))}
      >
        {levelOptions.map((value) => {
          return (
            <option className="border border-primary" key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>

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
      {displayCharacter && <CharacterSheet character={character} />}
    </>
  );
}

export default App;
