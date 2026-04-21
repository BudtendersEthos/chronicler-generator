function generate() {

  const mode = document.getElementById("mode").value;
  const title = document.getElementById("title").value;
  const subtitle = document.getElementById("subtitle").value;
  const summary = document.getElementById("summary").value;
  const history = document.getElementById("history").value;
  const product = document.getElementById("product").value.split(",");
  const contribution = document.getElementById("contribution").value;
  const impact = document.getElementById("impact").value.split(",");
  const authority = document.getElementById("authority").value;

  let productList = product.map(item => `<li>${item.trim()}</li>`).join("");
  let impactList = impact.map(item => `<li>${item.trim()}</li>`).join("");

  let content = `
<h1>${title}</h1>
<p><em>${subtitle}</em></p>

<h2>Executive Summary</h2>
<p>${summary}</p>

<h2>Historical Context</h2>
<p>${history}</p>

<h2>Product Architecture</h2>
<ul>${productList}</ul>

<h2>Chronicler Contribution</h2>
<p>${contribution}</p>

<h2>Market Impact</h2>
<ul>${impactList}</ul>

<h2>Strategic Interpretation</h2>
<p>${authority}</p>
`;

  if (mode === "full") {
    content = `
<!DOCTYPE html>
<html>
<head>
<title>${title}</title>
</head>
<body>
${content}
</body>
</html>
`;
  }

  document.getElementById("output").value = content;
}

function copyOutput() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Copied to clipboard");
}

function clearForm() {
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
}

function loadPreset() {
  document.getElementById("title").value = "turn PodPak Case Study";
  document.getElementById("subtitle").value = "Narrative Infrastructure in Action";
  document.getElementById("summary").value = "Chronicler accelerated adoption through narrative deployment.";
  document.getElementById("history").value = "PodPak standardized vape experience by removing user error.";
  document.getElementById("product").value = "Closed-loop system, Magnetic pods, Thermal regulation";
  document.getElementById("contribution").value = "Budtender education and narrative translation.";
  document.getElementById("impact").value = "Top seller status, Repeat purchases, High adoption";
  document.getElementById("authority").value = "Demonstrates control at the selection layer.";
}
