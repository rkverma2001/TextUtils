function TextStatistics({ text }) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const characterCount = text.length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="text-statistics">
      <h2>Text Statistics</h2>
      <p>Word Count: {wordCount}</p>
      <p>Character Count: {characterCount}</p>
      <p>Estimated Reading Time: {readingTime} minute(s)</p>
    </div>
  );
}

export default TextStatistics;
