//your JS code here. If required.
function httpLogger(){
fetch("https://example.com/api/endpoint").then(response => response.json()).then(data => console.log("API Response:", data)).catch(error => console.error("Error:", error));
}
httpLogger();