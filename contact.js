document.getElementById("enquiryForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    location: document.getElementById("location").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("https://krishna-backend-4ijc.onrender.com/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      document.getElementById("successMsg").style.display = "block";
      document.getElementById("successMsg").innerText =
        "✅ Thank you! We will contact you soon.";

      document.getElementById("enquiryForm").reset();
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
    alert("Error submitting enquiry");
  }
});