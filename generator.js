function generate() {

  const mode = document.getElementById("mode").value;
  const record = document.getElementById("record").value;

  const title = document.getElementById("title").value || "";
  const subtitle = document.getElementById("subtitle").value || "";
  const summary = document.getElementById("summary").value || "";
  const history = document.getElementById("history").value || "";
  const product = (document.getElementById("product").value || "").split(",");
  const contribution = document.getElementById("contribution").value || "";
  const impact = (document.getElementById("impact").value || "").split(",");
  const authority = document.getElementById("authority").value || "";

  const productList = product.map(i => i.trim()).filter(i => i).map(i => `<li>${i}</li>`).join("");
  const impactList = impact.map(i => i.trim()).filter(i => i).map(i => `<li>${i}</li>`).join("");

  let badge = "";

  if (record === "candidate") {
    badge = `<div style="padding:6px;background:#ccc;font-size:12px;margin-bottom:10px;">
    Candidate Status — Under Review
    </div>`;
  }

  if (record === "verified") {
    badge = `<div style="padding:6px;background:#b89b5e;color:white;font-size:12px;margin-bottom:10px;">
    ✔ Verified Entry — Chronicler Cannabis
    </div>`;
  }

  if (record === "hall") {
    badge = `<div style="padding:8px;background:#8c6a2f;color:white;font-weight:bold;margin-bottom:10px;">
    🏛 Hall of Record — Certified Cannabis Artifact
    </div>`;
  }

  let content = `
<div style="background:#f5f1e6;padding:20px;font-family:Georgia,serif;color:#2b2b2b;">

  ${badge}

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

</div>
`;

  if (mode === "full") {
    content = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>${title}</title></head>
<body>${content}</body>
</html>
`;
  }

  document.getElementById("output").value = content;
}

function copyOutput() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Copied");
}

function clearForm() {
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
}

function loadPreset() {
  document.getElementById("title").value = "turn PodPak Case Study";
  document.getElementById("subtitle").value = "Narrative Infrastructure in Action";
  document.getElementById("summary").value = "Chronicler accelerated adoption through narrative deployment.";
  document.getElementById("history").value = "The PodPak standardized vape experience.";
  document.getElementById("product").value = "Closed-loop system, Magnetic pods, Thermal regulation";
  document.getElementById("contribution").value = "Budtender narrative translation.";
  document.getElementById("impact").value = "Top seller, Repeat purchases, High adoption";
  document.getElementById("authority").value = "Demonstrates influence at the selection layer.";
}