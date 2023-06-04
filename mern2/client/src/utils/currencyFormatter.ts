export const currencyFormatter = (value: number) => {
  const options = {
    style: "currency",
    currency: "MNT",
    minimumFractionDigits: 0,
  };
  return value.toLocaleString("en-US", options).replace("MNT", "");
};
