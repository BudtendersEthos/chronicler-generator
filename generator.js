function generate() {

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

  const output = `
<header class="hero">
  <h1>${title}</h1>
  <p>${subtitle}</p>
</header>

<section class="card">
  <h2>Executive Summary</h2>
  <p>${summary}</p>
</section>

<section class="card">
  <h2>Historical Context</h2>
  <p>${history}</p>
</section>

<section class="card">
  <h2>Product Architecture</h2>
  <ul>${productList}</ul>
</section>

<section class="card">
  <h2>Chronicler Contribution</h2>
  <p>${contribution}</p>
</section>

<section class="card">
  <h2>Market Impact</h2>
  <ul>${impactList}</ul>
</section>

<section class="card">
  <h2>Strategic Interpretation</h2>
  <p>${authority}</p>
</section>
`;

  document.getElementById("output").value = output;
}
