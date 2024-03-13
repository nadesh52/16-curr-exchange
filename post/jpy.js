const getJpy = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const URL = `https://api.frankfurter.app/latest?from=JPY`;
  const KS_URL = `http://localhost:8000/api/jpy`;

  const res = await fetch(URL);
  const data = await res.json();

  const newCur = {
    value: data.rates.THB,
    pair: data.base,
  };

  console.log("jpy", newCur);

  await fetch(KS_URL, {
    method: "POST",
    body: JSON.stringify(newCur),
    headers: myHeaders,
  });
};

module.exports = getJpy;
