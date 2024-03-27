function TextTransformations({ text, setText }) {
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleClearText = () => {
    setText("");
  };

  const handleRemoveExtraSpaces = () => {
    setText(text.replace(/\s+/g, " "));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="text-transformations">
      <button onClick={handleUppercase}>Uppercase</button>
      <button onClick={handleLowercase}>Lowercase</button>
      <button onClick={handleClearText}>Clear Text</button>
      <button onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      <button onClick={handleCopyToClipboard}>Copy To Clipboard</button>
    </div>
  );
}

export default TextTransformations;
