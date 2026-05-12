document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    location: document.getElementById("location").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
  };

fetch("https://krishna-backend-41jq.onrender.com/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
 .then(() => {

  document.getElementById("successMsg").style.display = "block";

  document.getElementById("successMsg").innerText =
  "✅ Thank you! We will contact you soon.";

  document.getElementById("enquiryForm").reset();

})
    .catch(() => {
      alert("Error submitting enquiry");
    });
});
