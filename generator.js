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

function downloadCertificate() {

  const title = document.getElementById("title").value || "Unnamed Entry";
  const record = document.getElementById("record").value;

  let designation = "No Designation";

  if (record === "candidate") designation = "Candidate Status";
  if (record === "verified") designation = "Verified Entry";
  if (record === "hall") designation = "Hall of Record";

  const date = new Date().toLocaleDateString();

  const certID = "CR-" + Math.floor(Math.random() * 100000);

  const content = `
  <html>
  <head>
    <title>Certificate</title>
  </head>
  <body style="font-family:Georgia,serif;text-align:center;padding:40px;background:#f5f1e6;">

    <h1 style="color:#8c6a2f;">Chronicler Cannabis</h1>
    <h2>Official Certification</h2>

    <p>This document certifies that</p>

    <h2>${title}</h2>

    <p>has been designated as</p>

    <h3 style="color:#8c6a2f;">${designation}</h3>

    <p>under the Chronicler Hall of Record system.</p>

    <br><br>

    <p><strong>Certificate ID:</strong> ${certID}</p>
    <p><strong>Date Issued:</strong> ${date}</p>

    <br><br>

    <p>Certified by Chronicler Cannabis</p>

  </body>
  </html>
  `;

  const blob = new Blob([content], { type: "text/html" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "chronicler_certificate.html";
  link.click();
}