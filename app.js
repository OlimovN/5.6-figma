
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const action = {
    name: input1.value,
    fam: input2.value,
    email: input3.value,
    tel: input4.value,
    pass: input6.value,
  };

  console.log(action);
});
