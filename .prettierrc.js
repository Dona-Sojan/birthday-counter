module.exports = {
  tabWidth: 2,
  printWidth: 80,
  endOfLine: 'lf',
  arrowParens: 'avoid',
  trailingComma: 'none',
  semi: true,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true
};
document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("surprise").style.display = "block";
  document.getElementById("bdayMusic").play();
  confetti({ spread: 100, particleCount: 200 });
});
