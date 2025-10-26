const chat = document.getElementById('chat');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');

function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.textContent = `${text}`;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

// Mock reply function (you can connect backend later)
async function sendMessage() {
    const userMessage = input.value.trim();
    if (!userMessage) return;

    appendMessage('user', `You: ${userMessage}`);
    input.value = '';

    // Mock bot response
    setTimeout(() => {
        appendMessage('bot', `ChatNova: I received "${userMessage}"!`);
    }, 500);
}

// Event listeners
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

sendBtn.addEventListener('click', sendMessage);
