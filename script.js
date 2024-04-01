import "./utils/bling"

// toggle header on md
const header = $("header");
const headerStyle = getComputedStyle(header)
const toggleBtn = $("#toggle-header");

toggleBtn.on('click', () => {
    header.classList.toggle('show-header')

    if(headerStyle.display === 'none') {
        toggleBtn.style.transition = 'left 290ms'
        toggleBtn.style.left = '0rem'
    } else {
        toggleBtn.style.left = '8rem'
    }
})


// MEMBER 4 CODE

document.addEventListener("DOMContentLoaded", function() {
    // const messageForm = $('.input-container')
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const messagesContainer = document.getElementById("chats");
  
    sendButton.addEventListener("click", function(e) {
      e.preventDefault()
      const messageText = messageInput.value.trim();
      if (messageText !== "") {
        appendMessage(messageText);
        messageInput.value = "";
      }
    });
  
    function appendMessage(messageText) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerHTML = `
        <p>${messageText}</p>
        <span class="timestamp">${getCurrentTime()}</span>
        <span class="tick">&#10003;&#10003;</span>
      `;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    }
  });
  