// In AddUser.js
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      onAddUser(user); // Update local state
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
