// TEMP DATABASE (you will expand this manually for now)

const database = {
  "CR-10001": {
    name: "turn PodPak",
    status: "Hall of Record",
    date: "2026"
  },
  "CR-10002": {
    name: "Sample Product",
    status: "Verified Entry",
    date: "2026"
  }
};

function verifyCert() {

  const input = document.getElementById("certInput").value.trim();
  const result = document.getElementById("result");

  if (database[input]) {
    const entry = database[input];

    result.innerHTML = `
      <h2>Verified</h2>
      <p><strong>Product:</strong> ${entry.name}</p>
      <p><strong>Status:</strong> ${entry.status}</p>
      <p><strong>Year:</strong> ${entry.date}</p>
    `;
  } else {
    result.innerHTML = `
      <h2>Not Found</h2>
      <p>This certificate ID does not exist or has not been registered.</p>
    `;
  }
}

"CR-1001": {
  name: "turn PodPak",
  status: "Hall of Record",
  date: "2026"
},