import "./utils/bling"

// member 1 code
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

// prevent default on search form
const searchForm = $('.search');
searchForm.on('submit', (e) => e.preventDefault());
//

// switch between chat mates
const chatBoxes = $$('.chat-box');

const chatBoxProfilePic = $('.profile-content img');
const chatBoxProfileName = $('.profile-content h3');
const chatBoxProfileOnlineStatus = $('.profile-content p');

chatBoxes.forEach(chatBox => {

  // test loop...should be changed when online status is grab from a database
  chatBoxes.forEach((chatB, index) => {
    const onlineStatus = chatB.querySelector('.profile-box .elipse');

    if (index % 2 !== 0) {
      onlineStatus.style.backgroundColor = "#27ae60";
    } else {
      onlineStatus.style.backgroundColor = "#bab9b9";
    }
  })
  //

  chatBox.on('click', () => {
    chatBoxes.forEach(box => {
      box.setAttribute('aria-current', box === chatBox ? 'true' : 'false')
    })
    const profileImgOfChatMate = chatBox.querySelector("img").src;
    const nameOfChatMate = chatBox.querySelector("h5").textContent;
    const onlineStatusOfChatMate = chatBox.querySelector(".profile-box .elipse");
    // const messageOfChatMate = chatBox.querySelector("p").textContent;

    chatBoxProfilePic.src = profileImgOfChatMate;
    chatBoxProfileName.textContent = nameOfChatMate;
    
    let onlineBg = window.getComputedStyle(onlineStatusOfChatMate).backgroundColor;

    if (onlineBg === "rgb(39, 174, 96)") {
      chatBoxProfileOnlineStatus.textContent = "online";
      chatBoxProfileOnlineStatus.style.color = "rgb(39, 174, 96)";
    } 
    else if (onlineBg === "rgb(186, 185, 185)") {
      chatBoxProfileOnlineStatus.textContent = "offline";
      chatBoxProfileOnlineStatus.style.color = "rgb(186, 185, 185)";
    }
  })
});
//

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
  