$(document).ready(function() {
    $("#submit").click(function() {
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
      const sex = $("#sex").val();
      const age = $("#age").val();
  
      // Display the user data in the table with a "Delete" button
      const table = $("#userData tbody");
      const row = $("<tr></tr>").appendTo(table);

      if (!firstName || !lastName || !sex || !age ) {
        alert('Please fill in all required fields.');
        return;
    }
  
      $("<td></td>").text(firstName).appendTo(row);
      $("<td></td>").text(lastName).appendTo(row);
      $("<td></td>").text(sex).appendTo(row);
      $("<td></td>").text(age).appendTo(row);
  
      const cell5 = $("<td></td>").appendTo(row);
      const deleteButton = $("<button>Delete</button>").click(function() {
        deleteRow(row);
      });
      cell5.append(deleteButton);

      if (!firstName || !lastName || !sex || !age ) {
        alert('Please fill in all required fields.');
        return;
    }

      // Clear the form fields
      $("#userForm")[0].reset();
      alert("The data is successfully saved");
    });
  
    function deleteRow(row) {
      const table = $("#userData tbody");
      row.remove();
    }

  });
  