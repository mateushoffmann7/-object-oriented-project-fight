const char = createKnight("Arthas");
const monster = createMage("Hadggar");

stage.start(
  char,
  monster,
  document.querySelector(".char"),
  document.querySelector(".monster")
);
