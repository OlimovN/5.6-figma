document.getElementById("myForm").addEventListener("submit", function (event) {
  const inputs = document.querySelectorAll(
    '#myForm input[type="text"], #myForm input[type="email"], #myForm input[type="tel"]'
  );
  const allErr = Array.from(inputs).every(function (input) {
    return input.value !== "";
  });

  if (!allErr) {
    event.preventDefault();
    document.getElementById("alert").style.display = "block";
  }
});
