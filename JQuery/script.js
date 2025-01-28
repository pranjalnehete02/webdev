$(document).ready(function () {
  $("#showBtn").click(function () {
    // Clear previous errors
    $("#errorMsg").html("");

    // Get values
    const bookName = $("#bookName").val().trim();
    const author = $("#author").val().trim();
    const publishDate = $("#publishDate").val();
    const price = parseFloat($("#price").val());
    const languages = [];

    // Language validation
    $('input[type="checkbox"]:checked').each(function () {
      languages.push($(this).val());
    });

    // Validation checks
    let errors = [];

    // a) Book name length
    if (bookName.length < 3) {
      errors.push("Book name must be at least 3 characters");
    }

    // c) Price validation
    if (isNaN(price) || price <= 200) {
      errors.push("Price must be greater than ₹200");
    }

    // d) Language selection
    if (languages.length < 2) {
      errors.push("Select at least 2 languages");
    }

    // Show errors or table
    if (errors.length > 0) {
      $("#errorMsg").html(errors.join("<br>"));
    } else {
      $("#bookTable").removeClass("d-none");
      $("#bookTable tbody").append(`
                <tr>
                    <td>${bookName}</td>
                    <td>${author}</td>
                    <td>${publishDate}</td>
                    <td>₹${price.toFixed(2)}</td>
                    <td>${languages.join(", ")}</td>
                </tr>
            `);
    }
  });
});
