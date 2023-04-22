function updateOutput() {
  // Get the input value
  var input = document.getElementById("input").value;

  // Split the input string on new lines
  var inputArr = input.split("\n");

  // Clear the output element
  var output = document.getElementById("output");
  output.innerHTML = "";

  // Loop through the input array and split each line on the pipe character
  for (var i = 0; i < inputArr.length; i++) {
    var line = inputArr[i];
    var itemArr = line.split("|");
    var item = itemArr[0].trim();
    var div = document.createElement("div");
    div.innerHTML = item;
    output.appendChild(div);
  }
}