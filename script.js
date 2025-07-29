$(document).ready(function () {
  function sendMessage() {
    let message = $('#chat-input').val().trim();
    if (message !== '') {
      let time = new Date().toLocaleTimeString();
      let userMsg = $('<div class="chat-message user"></div>').html(
        message + ' <span style="font-size:10px; color:gray;">[' + time + ']</span>'
      );
      $('#chat-box').append(userMsg);
      $('#chat-input').val('');
      scrollToBottom();

      setTimeout(function () {
        generateBotReply(message);
      }, 1000);
    }
  }

  function generateBotReply(userInput) {
    let botReply;
    userInput = userInput.toLowerCase();

    if (userInput.includes("hello") || userInput.includes("hi")) {
      botReply = "Hello! How can I help you today?";
    } else if (userInput.includes("price")) {
      botReply = "Please check our pricing page or ask for a specific item.";
    } else if (userInput.includes("bye")) {
      botReply = "Goodbye! Have a nice day!";
    } else {
      botReply = "I'm just a bot 😅, but I'm here to help!";
    }

    let time = new Date().toLocaleTimeString();
    let botMsg = $('<div class="chat-message bot"></div>').html(
      botReply + ' <span style="font-size:10px; color:gray;">[' + time + ']</span>'
    );
    $('#chat-box').append(botMsg);
    scrollToBottom();
  }

  function scrollToBottom() {
    $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
  }

  $('#send-btn').click(sendMessage);
  $('#chat-input').keypress(function (e) {
    if (e.which === 13) sendMessage();
  });

  $('#toggle-chat').click(function () {
    $('#chat-box').slideToggle();
  });
});
