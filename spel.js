function choose(choice) {
  const textElement = document.getElementById("text");
  clearButtons();

  if (choice === 'hayabusa') {
    textElement.innerText = "Du valde Suzuki Hayabusa – du gillar hastighet och adrenalinkickar! Full gas!";
  } else if (choice === 'r1') {
    textElement.innerText = "Du valde Yamaha R1 – du gillar att köra på bakhjulet! Men var försiktig, när man kör på bakhjul med en R1 finns risken att motorn inte får tillräckligt med olja – motorn kan ta skada.";
  }
}

function clearButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => btn.remove());
}