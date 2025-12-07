// Function to create a YouTube-style video card dynamically
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Convert numeric views to a readable string format (e.g., K for thousand, M for million)
  let viewStr;
  if (views < 1000) {
    viewStr = views; // Less than 1000, show full number
  } else if (views > 1000000) {
    viewStr = (views / 1000000).toFixed(1) + "M"; // Greater than 1M, show in millions
  } else {
    viewStr = (views / 1000).toFixed(1) + "K"; // Between 1K and 1M, show in thousands
  }

  // Create HTML structure for the card
  let html = `<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} · ${viewStr} views · ${monthsOld} months ago</p>
        </div> 
    </div>`;

  // Append the new card to the container
  document.querySelector(".container").innerHTML += html;
}

// Example usage: Create a video card
createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

// Placeholder for a sum function (currently incomplete)
// You can define sum(a, b) to return a + b
function sum(a, b) {
  return a + b; // Example implementation
}
