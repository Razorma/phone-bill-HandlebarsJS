
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const errorMessage = document.querySelector(".error2");

const radioBill = radioBillTotal();

document.addEventListener('DOMContentLoaded', function(){
 
  function createTableRadio(calls, sms, total, color) {
    const data = { callTotal: calls, smsTotal: sms, total: total, color: color };
    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var template = Handlebars.compile(templateSource);
    const theTable = template(data);
  
    const tableContainer2 = document.getElementById("table-containerOne");
    tableContainer2.innerHTML = theTable;
  }
  let initial = 0;
  
  const calls = initial.toFixed(2) 
  const sms = initial.toFixed(2)
  const total = initial.toFixed(2)
  createTableRadio(calls, sms, total, "");
  

  radioBillAddBtn.addEventListener("click", function () {
    const checkedRadioBtn = document.querySelector(
      "input[name='billItemTypeRadio']:checked"
    );
    if (checkedRadioBtn) {
      const billItemType = checkedRadioBtn.value;
      radioBill.calculateBill(billItemType);
      const { calls, sms, total } = radioBill.getTotals();
      const color = radioBill.getColor();
      createTableRadio(calls, sms, total, color);
    }else{
      errorMessage.innerHTML = "select call or sms above"
      setTimeout(function(){
        errorMessage.innerHTML = ""
      },2500)
    }

    
  });
 
  
  const resetRadioBillBtn = document.querySelector(".resetRadioBillBtn");
  resetRadioBillBtn.addEventListener('click',function(){
    const checkedRadioBtnReset = document.querySelector(
      "input[name='billItemTypeRadio']:checked "
    );
    createTableRadio(initial.toFixed(2), initial.toFixed(2), initial.toFixed(2), "");
    radioBill.resetTotals()
    checkedRadioBtnReset.checked = false;
  })
  

 
});