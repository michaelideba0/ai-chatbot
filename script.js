const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  // Display user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  userInput.value = "";

  // Simulate AI reply
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.textContent = generateResponse(message);
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

function generateResponse(input) {
  input = input.toLowerCase();
  
  if (input.includes("hello") || input.includes("hi")) return "Hi there! 👋 How are you today?";
  if (input.includes("your name")) return "I'm Michael's AI Assistant 🤖";
  if (input.includes("help")) return "Sure! I can help with study tips, coding info, or fun facts.";
  if (input.includes("weather")) return "☀️ It's always sunny in your code world!";
  if (input.includes("bye")) return "Goodbye! 👋 Have a great day!";
  
  return "Hmm... interesting! Tell me more.";
}