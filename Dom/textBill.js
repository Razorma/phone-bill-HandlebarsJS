document.addEventListener('DOMContentLoaded', function(){

const textBill = textBillTotal();
let billTypeText = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const resetBillBtn = document.querySelector(".resetBillBtn");

const message = document.querySelector(".error");


function createTable(calls, sms, total, color) {
  const data = { callTotal: calls, smsTotal: sms, total: total, color: color };
  var templateSource = document.querySelector(".userTemplate").innerHTML;
  var template = Handlebars.compile(templateSource);
  const theTable = template(data);
  const tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = theTable;
}
let initial = 0;

const calls = initial.toFixed(2) 
const sms = initial.toFixed(2)
const total = initial.toFixed(2)
createTable(calls, sms, total, "");

addToBillBtn.addEventListener('click',function(){
  let allowed = /^call|sms$/
  if(allowed.test(billTypeText.value.toLowerCase())){
  
  const billType = billTypeText.value;
  textBill.calculateBill(billType);
  const { calls, sms, total } = textBill.getTotals();
  const color = textBill.getColor();
  createTable(calls, sms, total, color);
}else{
  message.innerHTML = "please enter call or sms above"
      setTimeout(function(){
        message.innerHTML = ""
      },2500)
}
});


resetBillBtn.addEventListener('click',function add(){
  createTable(initial.toFixed(2), initial.toFixed(2), initial.toFixed(2), "");
    billTypeText.value = "";
    textBill.resetTotals()
})


});