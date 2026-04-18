const facts = [
  "Gabbro is a coarse-grained igneous rock.",
  "It forms from slow cooling magma beneath the Earth's surface.",
  "Gabbro is rich in iron and magnesium.",
  "It is the intrusive equivalent of basalt.",
  "Gabbro is commonly found in oceanic crust."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function rockAlert() {
  alert("🪨 Analyzing gabbro composition...");
}
