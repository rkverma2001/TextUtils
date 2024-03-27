import { useState } from "react";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import TextInput from "./components/TextInput";
import TextPreview from "./components/TextPreview";
import TextStatistics from "./components/TextStatistics";
import TextTransformations from "./components/TextTransformations";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <TextInput text={text} setText={setText} />
        <TextStatistics text={text} />
        <TextPreview text={text} />
        <TextTransformations text={text} setText={setText} />
      </div>
    </div>
  );
}

export default App;
