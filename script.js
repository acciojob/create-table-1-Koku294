function insert_Row() {
    // Get the table by its ID
    var table = document.getElementById("sampleTable");
    
    // Create a new row (<tr>)
    var newRow = table.insertRow(0); // Insert at index 1 to add it at the top
    
    // Create the first cell (<td>) for the left side
    var cell1 = newRow.insertCell(0);
    cell1.textContent = "New Cell1";  // Set the text content for this cell
    
    // Create the second cell (<td>) for the right side
    var cell2 = newRow.insertCell(1);
    cell2.textContent = "New Cell2";  // Set the text content for this cell
}
