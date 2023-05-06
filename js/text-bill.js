

function textBillTotal() {
  let callsTotal = 0;
  let smsTotal = 0;

  function calculateBill(billItemType) {
    if (billItemType.toLowerCase() === "call") {
      callsTotal += 2.75;
    } else if (billItemType.toLowerCase() === "sms") {
      smsTotal += 0.75;
    }
  }

  function getTotals() {
    return {
      calls: callsTotal.toFixed(2),
      sms: smsTotal.toFixed(2),
      total: (callsTotal + smsTotal).toFixed(2),
    };
  }

  function getColor() {
    const totalCost = callsTotal + smsTotal;
    if (totalCost >= 50) {
      return "danger";
    } else if (totalCost >= 30) {
      return "warning";
    } else {
      return "";
    }
  }
  function resetTotals() {
    callsTotal = 0;
    smsTotal = 0;
  }

  return {
    calculateBill,
    getTotals,
    getColor,
    resetTotals,
  };
}
