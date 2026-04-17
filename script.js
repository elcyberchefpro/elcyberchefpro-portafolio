// script.js

// Efecto en la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(3, 3, 3, 0.95)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        nav.style.background = 'rgba(3, 3, 3, 0.8)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }
});

// Lógica del Chatbot AI
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatBody = document.getElementById('chat-body');

// Abrir/Cerrar la ventana del chat
chatToggle.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
        chatInput.focus();
    }
});

// Respuestas automáticas de la IA (simuladas)
const respuestasIA = [
    "Interesante. Dejaré este mensaje en el buzón de Pavel para cuando termine de configurar los servidores.",
    "Soy la IA de asistencia. Pavel me programó para recopilar información mientras él no está. ¿Te gustaría dejarle un contacto?",
    "Ese es un buen punto. El CyberChefPro responderá a tu solicitud tan pronto termine el servicio.",
    "> Error 404: Paciencia no encontrada. Broma. Le enviaré tu mensaje directo a su terminal.",
    "Recibido. Pavel revisa mis logs todas las noches. Él verá esto."
];

function enviarMensaje() {
    const texto = chatInput.value.trim();
    if (texto === '') return;

    // 1. Mostrar mensaje del usuario
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.innerHTML = `<p>${texto}</p>`;
    chatBody.appendChild(userMsg);
    
    // Limpiar input y hacer scroll hacia abajo
    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // 2. Simular que la IA está "pensando" y luego responder
    setTimeout(() => {
        const respuestaAleatoria = respuestasIA[Math.floor(Math.random() * respuestasIA.length)];
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message ai';
        aiMsg.innerHTML = `<p>${respuestaAleatoria}</p>`;
        chatBody.appendChild(aiMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1500); // Tarda 1.5 segundos en responder
}

// Enviar con el botón o presionando Enter
chatSend.addEventListener('click', enviarMensaje);
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        enviarMensaje();
    }
});
