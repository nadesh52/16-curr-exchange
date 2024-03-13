const getHkd = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const URL = `https://api.frankfurter.app/latest?from=HKD`;
  const KS_URL = `http://localhost:8000/api/hkd`;

  const res = await fetch(URL);
  const data = await res.json();

  const newCur = {
    value: data.rates.THB,
    pair: data.base,
  };

  console.log("hkd", newCur);

  await fetch(KS_URL, {
    method: "POST",
    body: JSON.stringify(newCur),
    headers: myHeaders,
  });
};

module.exports = getHkd;
