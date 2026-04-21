function generate() {

  const mode = document.getElementById("mode").value;

  const title = document.getElementById("title").value || "";
  const subtitle = document.getElementById("subtitle").value || "";
  const summary = document.getElementById("summary").value || "";
  const history = document.getElementById("history").value || "";
  const product = (document.getElementById("product").value || "").split(",");
  const contribution = document.getElementById("contribution").value || "";
  const impact = (document.getElementById("impact").value || "").split(",");
  const authority = document.getElementById("authority").value || "";

  const productList = product
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map(item => `<li>${item}</li>`)
    .join("");

  const impactList = impact
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map(item => `<li>${item}</li>`)
    .join("");

  let content = `
<div style="background:#f5f1e6;padding:20px;font-family:Georgia,serif;color:#2b2b2b;line-height:1.6;">

  <div style="border-bottom:2px solid #8c6a2f;padding-bottom:10px;margin-bottom:20px;">
    <h1 style="margin:0;">${title}</h1>
    <p style="margin:5px 0;color:#6a5a2f;"><em>${subtitle}</em></p>
  </div>

  <h2 style="border-left:4px solid #8c6a2f;padding-left:10px;">Executive Summary</h2>
  <p>${summary}</p>

  <h2 style="border-left:4px solid #8c6a2f;padding-left:10px;">Historical Context</h2>
  <p>${history}</p>

  <h2 style="border-left:4px solid #8c6a2f;padding-left:10px;">Product Architecture</h2>
  <ul>${productList}</ul>

  <h2 style="border-left:4px solid #8c6a2f;padding-left:10px;">Chronicler Contribution</h2>
  <p>${contribution}</p>

  <h2 style="border-left:4px solid #8c6a2f;padding-left:10px;">Market Impact</h2>
  <ul>${impactList}</ul>

  <div style="background:#e9e1cf;padding:15px;margin-top:20px;border-left:4px solid #8c6a2f;">
    <strong>Strategic Interpretation:</strong>
    <p>${authority}</p>
  </div>

</div>
`;

  if (mode === "full") {
    content = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title}</title>
</head>
<body style="margin:0;">
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
  document.getElementById("summary").value = "Chronicler accelerated adoption through narrative deployment, resulting in top-tier retail performance.";
  document.getElementById("history").value = "The PodPak standardized the vape experience by eliminating user error and improving consistency.";
  document.getElementById("product").value = "Closed-loop system, Magnetic pods, Thermal regulation, Integrated charging case";
  document.getElementById("contribution").value = "Chronicler translated product functionality into retail-ready language for budtenders.";
  document.getElementById("impact").value = "Top 1–2 SKU ranking, Repeat purchases, Rapid adoption";
  document.getElementById("authority").value = "This demonstrates Chronicler’s ability to influence the selection layer through narrative governance.";
}
