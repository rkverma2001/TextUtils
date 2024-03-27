function DarkModeToggle({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <h4>Change Mode</h4>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
