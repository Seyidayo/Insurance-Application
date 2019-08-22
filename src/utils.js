export const fetchData = async (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({
      Token: token
    })
  }).then(response => response.json);

const getDay = givenDate => {
  let date = new Date(givenDate).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return date;
};

const getAmount = givenAmount => {
  return givenAmount
    .toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN"
    })
    .slice(0, -3);
};

export const prepareApplications = application => {
  const Data = [];
  application.map((app, index) => {
    const SN = parseInt(index) + 1;
    const date = getDay(app.createdDate);
    // const amount = getAmount(app.amount);
    const amount = getAmount(21400000);
    const status = app.complete;
    const action = app.complete;
    const insuranceType = app.insuranceType;
    Data.push({ SN, insuranceType, amount, date, status, action });
  });
  return Data;
};

export const prepareStats = statistics => {
  console.log(typeof statistics);
  let insuranceBought = statistics.totalInsurancesBought,
    insuranceClaims = statistics.totalInsuranceClaims;

  // const totalInsurancesBought =
  //   insuranceBought < 10 ? "0" + insuranceBought : insuranceBought;
  // const totalInsuranceClaims =
  //   insuranceClaims < 10 ? "0" + insuranceClaims : insuranceClaims;
  // const totalInsuranceAmount = getAmount(statistics.totalInsuranceAmount);
  // const totalClaimsAmount = getAmount(statistics.totalClaimsAmount);

  const totalInsurancesBought = "06";
  const totalInsuranceClaims = "03";
  const totalInsuranceAmount = getAmount(21400000);
  const totalClaimsAmount = getAmount(1400000);

  const Data = [
    totalInsurancesBought,
    totalInsuranceAmount,
    totalInsuranceClaims,
    totalClaimsAmount
  ];
  return Data;
};
