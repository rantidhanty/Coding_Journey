let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const displayChangeDue = document.getElementById("change-due");
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const priceScreen = document.getElementById("price-screen");
const cashDrawerDisplay = document.getElementById("cash-drawer-display");

const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>${status}</p>`;
  displayChangeDue.innerHTML += change
    .map(
      ([denominationName, amount]) =>
        `<p>${denominationName}: $${amount.toFixed(2)}</p>`
    )
    .join("");
};

const checkCashRegister = () => {
  const cashInCents = Math.round(Number(cash.value) * 100);
  const priceInCents = Math.round(price * 100);

  if (cashInCents < priceInCents) {
    alert("Customer does not have enough money to purchase the item");
    cash.value = "";
    return;
  }

  if (cashInCents === priceInCents) {
    displayChangeDue.innerHTML =
      "No change due - customer paid with exact cash";
    cash.value = "";
    return;
  }

  let changeDue = cashInCents - priceInCents;

  const denominations = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1],
  ];

  const cashDrawer = [...cid].map(([name, amount]) => [
    name,
    Math.round(amount * 100),
  ]);
  
  const totalCashInDrawer = cashDrawer.reduce(
    (sum, [_, amount]) => sum + amount,
    0
  );

  // Variabel untuk menyimpan kembalian
  const changeToReturn = [];
  let remainingChange = changeDue;

  // Proses mengembalikan uang
  for (let [name, value] of denominations) {
    // Cari jumlah denominasi yang tersedia di cash drawer
    const drawerItem = cashDrawer.find((item) => item[0] === name);
    const availableAmount = drawerItem[1];

    // Hitung berapa banyak denominasi yang bisa digunakan
    const maxUsable = Math.min(
      Math.floor(availableAmount / value),
      Math.floor(remainingChange / value)
    );

    if (maxUsable > 0) {
      const amountToUse = maxUsable * value;
      remainingChange -= amountToUse;

      // Kurangi dari cash drawer
      drawerItem[1] -= amountToUse;

      // Tambahkan ke kembalian
      changeToReturn.push([name, amountToUse / 100]);
    }
  }

  // Periksa apakah kembalian lengkap
  if (remainingChange > 0) {
    displayChangeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
    return;
  }

  // Tentukan status
  const status = totalCashInDrawer === changeDue ? "CLOSED" : "OPEN";

  // Format dan tampilkan hasil
  formatResults(`Status: ${status}`, changeToReturn);

  // Update UI
  updateUI(changeToReturn);
};

const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

const updateUI = (change) => {
  const currencyNameMap = {
    PENNY: "Pennies",
    NICKEL: "Nickels",
    DIME: "Dimes",
    QUARTER: "Quarters",
    ONE: "Ones",
    FIVE: "Fives",
    TEN: "Tens",
    TWENTY: "Twenties",
    "ONE HUNDRED": "Hundreds",
  };

  if (change) {
    change.forEach(([changeDenomination, changeAmount]) => {
      const targetArr = cid.find(
        ([denominationName]) => denominationName === changeDenomination
      );
      targetArr[1] = Number((targetArr[1] - changeAmount).toFixed(2));
    });
  }

  cash.value = "";
  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>  
    ${cid
      .map(
        ([denominationName, amount]) =>
          `<p>${currencyNameMap[denominationName]}: $${amount.toFixed(2)}</p>`
      )
      .join("")}  
  `;
};

purchaseBtn.addEventListener("click", checkResults);

cash.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkResults();
  }
});

updateUI();
