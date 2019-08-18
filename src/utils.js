export const fetchData = async (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({
      Token: token
    })
  }).then(response => response.json);

const getDay = givenDate => {
  let date = new Date(givenDate).toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return date;
};

const getAmount = givenAmount => {
  return givenAmount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN"
  });
};

export const prepareApplications = application => {
  const Data = [];
  application.map((app, index) => {
    const SN = parseInt(index) + 1;
    const date = getDay(app.createdDate);
    const amount = getAmount(app.amount);
    const status = app.complete;
    const action = app.complete;
    const insuranceType = app.insuranceType;
    Data.push({ SN, insuranceType, amount, date, status, action });
  });
  return Data;
};

export const prepareStats = statistics => {
  // Object.keys(statistics).map(key => console.log(key));

  return Object.entries(statistics);
};
