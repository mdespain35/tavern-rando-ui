import { useState } from "react";
import Button from "./components/Button";
import "./App.css";
import CharacterSheet from "./components/CharacterSheet";
import axios from "axios";

function App() {
  const [level, setLevel] = useState(0);
  // const [levelDropdown, setLevelDropdown] = useState(false);
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [character, setCharacter] = useState({
    race: "",
    level: 0,
    class: [
      {
        name: "",
        subClass: "",
        level: 0,
        hitDie: 0,
      },
    ],
    background: {
      name: "",
      feature: {
        name: "",
        description: "",
      },
    },
    abilityScores: {
      Charisma: {
        score: 0,
        modifier: 0,
      },
      Constitution: {
        score: 0,
        modifier: 0,
      },
      Dexterity: {
        score: 0,
        modifier: 0,
      },
      Intelligence: {
        score: 0,
        modifier: 0,
      },
      Strength: {
        score: 0,
        modifier: 0,
      },
      Wisdom: {
        score: 0,
        modifier: 0,
      },
    },
    hp: 0,
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
        <option value="0" className="border border-primary" key="default">
          Select Target Level
        </option>
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
