function TextInput({ text, setText }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="text-input">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here"
      ></textarea>
    </div>
  );
}

export default TextInput;
