setInterval(() => {
  document.querySelectorAll('[class*="repliedTextPlaceholder-"]')
    .forEach(reply => {
      if (reply.innerHTML === "Blocked message.") {
        reply.classList.add('reply-from-blocked');
      }
    });
}, 5000);
