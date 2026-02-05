// ============================================
// OPENROUTER API CONFIGURATION (DeepSeek R1)
// ============================================
// Get your FREE API key at: https://openrouter.ai/keys
const OPENROUTER_API_KEY = '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';

// OpenRouter API endpoint
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// DeepSeek R1 model - FREE and powerful!
const MODEL_NAME = 'deepseek/deepseek-r1';

// ============================================
// CHAT HISTORY MANAGEMENT
// ============================================
let savedChats = JSON.parse(localStorage.getItem('safarnama_chats') || '[]');
let currentChatId = null;

function generateChatId() {
    return 'chat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function saveCurrentChat() {
    if (chatHistory.length === 0) return;
    
    // Get first user message as title
    const firstUserMsg = chatHistory.find(msg => msg.role === 'user');
    const title = firstUserMsg ? firstUserMsg.content.substring(0, 50) : 'New Chat';
    
    const chatData = {
        id: currentChatId || generateChatId(),
        title: title,
        messages: chatHistory,
        timestamp: new Date().toISOString(),
        preview: firstUserMsg ? firstUserMsg.content.substring(0, 100) : ''
    };
    
    // Update existing or add new
    const existingIndex = savedChats.findIndex(chat => chat.id === chatData.id);
    if (existingIndex >= 0) {
        savedChats[existingIndex] = chatData;
    } else {
        savedChats.unshift(chatData);
        currentChatId = chatData.id;
    }
    
    // Keep only last 50 chats
    if (savedChats.length > 50) {
        savedChats = savedChats.slice(0, 50);
    }
    
    localStorage.setItem('safarnama_chats', JSON.stringify(savedChats));
}

function loadChat(chatId) {
    const chat = savedChats.find(c => c.id === chatId);
    if (!chat) return;
    
    // Clear current chat
    const messagesWrapper = document.querySelector('.messages-wrapper');
    if (messagesWrapper) {
        messagesWrapper.remove();
    }
    
    // Hide greeting
    greetingContainer.style.display = 'none';
    
    // Load chat history
    chatHistory = [...chat.messages];
    currentChatId = chat.id;
    
    // Display messages
    chat.messages.forEach(msg => {
        if (msg.role === 'user' || msg.role === 'assistant') {
            addMessage(msg.content, msg.role === 'user');
        }
    });
    
    // Close popup
    closeHistoryPopup();
}

function deleteChat(chatId) {
    if (confirm('Are you sure you want to delete this chat?')) {
        savedChats = savedChats.filter(chat => chat.id !== chatId);
        localStorage.setItem('safarnama_chats', JSON.stringify(savedChats));
        
        // If deleted current chat, start new
        if (currentChatId === chatId) {
            startNewChat();
        }
        
        // Refresh popup
        displayChatHistory();
    }
}

function startNewChat() {
    chatHistory = [];
    currentChatId = null;
    
    const messagesWrapper = document.querySelector('.messages-wrapper');
    if (messagesWrapper) {
        messagesWrapper.remove();
    }
    
    greetingContainer.style.display = 'block';
    chatInput.value = '';
    chatInput.style.height = 'auto';
    chatInput.focus();
}

function displayChatHistory() {
    const chatList = document.getElementById('chatList');
    
    if (savedChats.length === 0) {
        chatList.innerHTML = `
            <div class="empty-chat-list">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3>No Chats Yet</h3>
                <p>Your conversation history will appear here.<br>Start chatting to save your conversations!</p>
            </div>
        `;
        return;
    }
    
    chatList.innerHTML = savedChats.map(chat => {
        const date = new Date(chat.timestamp);
        const dateStr = date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `
            <div class="chat-item" data-chat-id="${chat.id}">
                <div class="chat-item-header">
                    <div class="chat-item-title">
                        <svg class="chat-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        ${chat.title}
                    </div>
                    <div class="chat-item-date">${dateStr}</div>
                </div>
                <div class="chat-item-preview">${chat.preview}${chat.preview.length >= 100 ? '...' : ''}</div>
                <div class="chat-item-actions">
                    <button class="chat-item-btn load-chat-btn" onclick="loadChat('${chat.id}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                        Load Chat
                    </button>
                    <button class="chat-item-btn delete-chat-btn" onclick="deleteChat('${chat.id}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        Delete
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function openHistoryPopup() {
    displayChatHistory();
    document.getElementById('chatHistoryOverlay').classList.add('active');
}

function closeHistoryPopup() {
    document.getElementById('chatHistoryOverlay').classList.remove('active');
}


// ============================================
// BACKGROUND PARTICLE ANIMATION
// ============================================
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let animationActive = true;
let animationId;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    if (!animationActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });
    animationId = requestAnimationFrame(animate);
}

initParticles();
animate();

function stopBackgroundAnimation() {
    animationActive = false;
    if (animationId) cancelAnimationFrame(animationId);
    canvas.style.transition = 'opacity 1s ease';
    canvas.style.opacity = '0';
    setTimeout(() => canvas.style.display = 'none', 1000);
}

// ============================================
// WELCOME SOUND
// ============================================
const welcomeSound = document.getElementById('welcomeSound');
welcomeSound.volume = 0.2;

window.addEventListener('load', () => {
    setTimeout(() => {
        const playPromise = welcomeSound.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                const playOnInteraction = () => welcomeSound.play().catch(() => {});
                document.addEventListener('click', playOnInteraction, { once: true });
                document.addEventListener('keydown', playOnInteraction, { once: true });
            });
        }
    }, 300);
});

// ============================================
// TIME AND GREETING
// ============================================
function updateTimeAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    
    document.getElementById('timeDisplay').textContent = `${displayHours}:${displayMinutes} ${ampm}`;
    
    const greetingElement = document.getElementById('timeGreeting');
    let greeting;
    if (hours >= 5 && hours < 12) greeting = "What's Up Early Bird";
    else if (hours >= 12 && hours < 17) greeting = "What's Up Daytime Performer";
    else if (hours >= 17 && hours < 21) greeting = "What's Up Evening Performer";
    else greeting = "What's Up Night Owl";
    greetingElement.textContent = greeting;
}

updateTimeAndGreeting();
setInterval(updateTimeAndGreeting, 1000);

// ============================================
// SIDEBAR TOGGLE
// ============================================
const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const sidebar = document.getElementById('sidebar');
const superman = document.getElementById('superman');
const supermanSound = document.getElementById('supermanSound');
let isAnimating = false;

sidebarToggleBtn.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    
    if (sidebar.classList.contains('collapsed')) {
        superman.classList.remove('flying-back');
        superman.classList.add('flying-to-sidebar');
        supermanSound.currentTime = 0;
        supermanSound.volume = 0.7;
        supermanSound.play().catch(() => {});
        setTimeout(() => {
            sidebar.classList.remove('collapsed');
            sidebarToggleBtn.classList.add('rotated');
            isAnimating = false;
        }, 1500);
    } else {
        sidebar.classList.add('collapsed');
        sidebarToggleBtn.classList.remove('rotated');
        superman.classList.remove('flying-to-sidebar');
        superman.classList.add('flying-back');
        setTimeout(() => isAnimating = false, 1500);
    }
});

// ============================================
// CHAT FUNCTIONALITY
// ============================================
const chatInput = document.getElementById('chatInput');
const submitBtn = document.querySelector('.submit-btn');
const newChatBtn = document.querySelector('.new-chat-btn');
const chatContainer = document.querySelector('.chat-container');
const greetingContainer = document.querySelector('.greeting-container');

let chatHistory = [];
let isProcessing = false;

function autoResizeTextarea() {
    chatInput.style.height = 'auto';
    chatInput.style.height = chatInput.scrollHeight + 'px';
}

chatInput.addEventListener('input', () => {
    autoResizeTextarea();
    stopBackgroundAnimation();
});

chatInput.addEventListener('paste', () => {
    setTimeout(() => {
        autoResizeTextarea();
        stopBackgroundAnimation();
    }, 0);
});

// ============================================
// OPENROUTER API (DeepSeek R1)
// ============================================
async function getAIResponse(userMessage) {
    try {
        console.log('🚀 Calling OpenRouter API with DeepSeek R1...');
        console.log('📝 User Message:', userMessage);
        
        // Build conversation history for context
        const messages = [
            {
                role: 'system',
                content: 'You are Safarnama AI, a friendly and helpful study assistant. Help students with Math, Science, History, English, and study tips. Be clear, encouraging, and educational. Provide detailed explanations when needed.'
            },
            ...chatHistory.filter(msg => msg.role !== 'system'),
            {
                role: 'user',
                content: userMessage
            }
        ];

        const requestBody = {
            model: MODEL_NAME,
            messages: messages,
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 0.9,
        };

        console.log('📤 Request Body:', JSON.stringify(requestBody, null, 2));

        const response = await fetch(OPENROUTER_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.href,
                'X-Title': 'Safarnama AI Chatbot'
            },
            body: JSON.stringify(requestBody)
        });

        console.log('📊 Response Status:', response.status);
        console.log('📊 Response OK:', response.ok);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ API Error Response:', errorText);
            
            let errorData;
            try {
                errorData = JSON.parse(errorText);
            } catch (e) {
                errorData = { message: errorText };
            }

            if (response.status === 401) {
                return "❌ **Authentication Error (401)**\n\nYour API key is invalid or missing.\n\n**How to fix:**\n1. Go to: https://openrouter.ai/keys\n2. Sign up or log in\n3. Create a new API key\n4. Copy it carefully\n5. Replace 'YOUR_OPENROUTER_API_KEY_HERE' in the JavaScript file\n6. Refresh the page";
            } else if (response.status === 402) {
                return "❌ **Payment Required (402)**\n\nYour OpenRouter account needs credits.\n\n**Note:** DeepSeek R1 is FREE, but you may need to:\n1. Add a payment method (won't be charged for free models)\n2. Check your credit balance at: https://openrouter.ai/credits\n\nOr try a different free model!";
            } else if (response.status === 429) {
                return "⏰ **Rate Limit Exceeded**\n\nYou've sent too many requests.\n\nPlease wait a moment and try again.";
            } else if (response.status === 400) {
                return `❌ **Bad Request (400)**\n\n${errorData.error?.message || 'Invalid request format'}\n\nPlease check:\n- Your API key is correct\n- The model name is valid`;
            }
            
            return `❌ **API Error (${response.status})**\n\n${errorData.error?.message || 'Unknown error occurred'}\n\nPlease check the browser console for details.`;
        }

        const data = await response.json();
        console.log('✅ API Response:', JSON.stringify(data, null, 2));

        // Extract the response text
        if (data.choices && data.choices.length > 0) {
            const choice = data.choices[0];
            
            if (choice.message && choice.message.content) {
                const content = choice.message.content;
                
                // Log usage stats if available
                if (data.usage) {
                    console.log('📊 Token Usage:', data.usage);
                }
                
                return content;
            }
        }
        
        if (data.error) {
            return `❌ **Error:** ${data.error.message}`;
        }
        
        return "❌ Unexpected response format. The API returned data but it couldn't be parsed.\n\nCheck the browser console for details.";
        
    } catch (error) {
        console.error('💥 Fetch Error:', error);
        console.error('Error details:', error.message);
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            return "🌐 **Network Error**\n\nCannot connect to OpenRouter API.\n\n**Please check:**\n1. Your internet connection\n2. CORS/browser restrictions\n3. Try opening in a new tab\n4. Check if OpenRouter.ai is accessible";
        }
        
        return `🌐 **Network Error**\n\n${error.message}\n\nPlease check your internet connection and try again.`;
    }
}

function addMessage(message, isUser = false) {
    // Create messages wrapper if it doesn't exist
    let messagesWrapper = document.querySelector('.messages-wrapper');
    if (!messagesWrapper) {
        messagesWrapper = document.createElement('div');
        messagesWrapper.className = 'messages-wrapper';
        
        // Insert after greeting container
        const greetingContainer = document.querySelector('.greeting-container');
        const inputContainer = document.querySelector('.input-container');
        chatContainer.insertBefore(messagesWrapper, inputContainer);
    }

    // Hide greeting when first message is sent
    if (chatHistory.length === 0) {
        greetingContainer.style.display = 'none';
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    // Support markdown-style formatting
    let formattedMessage = message
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
        .replace(/`(.*?)`/g, '<code>$1</code>') // Inline code
        .replace(/\n/g, '<br>'); // Line breaks
    
    messageContent.innerHTML = formattedMessage;
    
    messageDiv.appendChild(messageContent);
    messagesWrapper.appendChild(messageDiv);
    
    // Scroll to bottom smoothly
    setTimeout(() => {
        messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }, 100);
}

function showTypingIndicator() {
    let messagesWrapper = document.querySelector('.messages-wrapper');
    if (!messagesWrapper) {
        messagesWrapper = document.createElement('div');
        messagesWrapper.className = 'messages-wrapper';
        
        const inputContainer = document.querySelector('.input-container');
        chatContainer.insertBefore(messagesWrapper, inputContainer);
    }

    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    const dotsDiv = document.createElement('div');
    dotsDiv.className = 'typing-dots';
    dotsDiv.innerHTML = '<span></span><span></span><span></span>';
    
    typingDiv.appendChild(dotsDiv);
    messagesWrapper.appendChild(typingDiv);
    
    // Scroll to bottom
    setTimeout(() => {
        messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }, 100);
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) typingIndicator.remove();
}

submitBtn.addEventListener('click', async () => {
    if (isProcessing) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    addMessage(message, true);
    chatHistory.push({ role: 'user', content: message });
    
    chatInput.value = '';
    chatInput.style.height = 'auto';
    stopBackgroundAnimation();
    
    isProcessing = true;
    showTypingIndicator();
    
    const aiResponse = await getAIResponse(message);
    
    removeTypingIndicator();
    addMessage(aiResponse, false);
    chatHistory.push({ role: 'assistant', content: aiResponse });
    
    // Auto-save chat after each response
    saveCurrentChat();
    
    isProcessing = false;
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitBtn.click();
    }
});

newChatBtn.addEventListener('click', () => {
    startNewChat();
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '0') {
        e.preventDefault();
        startNewChat();
    }
});

// ============================================
// CHAT HISTORY POPUP EVENT LISTENERS
// ============================================
document.getElementById('yourChatsBtn').addEventListener('click', openHistoryPopup);
document.getElementById('closePopupBtn').addEventListener('click', closeHistoryPopup);

// Close popup when clicking outside
document.getElementById('chatHistoryOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'chatHistoryOverlay') {
        closeHistoryPopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeHistoryPopup();
    }
});

// ============================================
// VOICE RECOGNITION
// ============================================
const micBtn = document.querySelector('.mic-btn');
let isRecording = false;
let recognition = null;
let accumulatedTranscript = '';

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-IN';
    
    recognition.onresult = (event) => {
        let interimTranscript = '';
        stopBackgroundAnimation();
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                accumulatedTranscript += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }
        
        chatInput.value = interimTranscript ? accumulatedTranscript + interimTranscript + ' [listening...]' : accumulatedTranscript.trim();
        autoResizeTextarea();
    };
    
    recognition.onend = () => {
        chatInput.value = accumulatedTranscript.trim();
        if (isRecording) {
            try {
                recognition.start();
            } catch (e) {
                isRecording = false;
                micBtn.classList.remove('recording');
            }
        } else {
            micBtn.classList.remove('recording');
        }
    };
    
    recognition.onerror = (event) => {
        if (event.error !== 'no-speech' && event.error !== 'aborted') {
            isRecording = false;
            micBtn.classList.remove('recording');
        }
    };
    
    recognition.onstart = () => {
        isRecording = true;
        micBtn.classList.add('recording');
        stopBackgroundAnimation();
    };
}

micBtn.addEventListener('click', () => {
    if (!recognition) {
        alert('❌ Speech Recognition Not Supported!\n\nPlease use Chrome, Edge, or Safari.');
        return;
    }
    
    if (isRecording) {
        try {
            recognition.stop();
        } catch (e) {}
        isRecording = false;
        micBtn.classList.remove('recording');
        chatInput.value = accumulatedTranscript.trim();
        accumulatedTranscript = '';
    } else {
        const existingText = chatInput.value.trim();
        accumulatedTranscript = existingText ? existingText + ' ' : '';
        try {
            recognition.start();
        } catch (error) {
            isRecording = false;
            micBtn.classList.remove('recording');
            accumulatedTranscript = '';
        }
    }
});

// ============================================
// IMAGE UPLOAD
// ============================================
const attachBtn = document.querySelector('.attach-btn');
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.multiple = true;
fileInput.style.display = 'none';
document.body.appendChild(fileInput);

fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        stopBackgroundAnimation();
        let fileNames = [];
        for (let i = 0; i < files.length; i++) {
            fileNames.push(files[i].name);
        }
        alert('✅ Image(s) selected:\n\n' + fileNames.join('\n') + '\n\nNote: Image analysis requires vision-capable models.');
        chatInput.value = chatInput.value ? chatInput.value + ' [' + files.length + ' image(s)]' : '[' + files.length + ' image(s)]';
    }
    fileInput.value = '';
});

attachBtn.addEventListener('click', () => fileInput.click());

window.addEventListener('load', () => chatInput.focus());

console.log('✅ Safarnama AI Ready with DeepSeek R1!');
console.log('🔑 API Key:', OPENROUTER_API_KEY === 'YOUR_OPENROUTER_API_KEY_HERE' ? '❌ NOT SET - Please add your key!' : '✓ Configured');
console.log('🌐 API Endpoint:', OPENROUTER_API_URL);
console.log('🤖 Model:', MODEL_NAME);
console.log('\n📚 To get your FREE API key:');
console.log('1. Visit: https://openrouter.ai/keys');
console.log('2. Sign up/Login');
console.log('3. Create a new API key');
console.log('4. Replace YOUR_OPENROUTER_API_KEY_HERE in the code');











/* ========================================
   ADD THIS JAVASCRIPT TO YOUR safarnama-ai-script.js
   Add it at the END of your file
======================================== */

// ========================================
// LOGIN BUTTON FUNCTIONALITY
// ========================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Get the login menu item
    const loginMenuItem = document.getElementById('loginMenuItem');
    
    if (loginMenuItem) {
        // Add click event listener
        loginMenuItem.addEventListener('click', function() {
            console.log('Login button clicked!'); // For debugging
            // Redirect to login page
            window.location.href = 'login.html';
        });
        
        // Add keyboard navigation (Enter key)
        loginMenuItem.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                window.location.href = 'login.html';
            }
        });
        
        // Make it focusable for accessibility
        loginMenuItem.setAttribute('tabindex', '0');
        
        console.log('Login button initialized successfully!'); // For debugging
    } else {
        console.error('Login button element not found!'); // For debugging
    }
});



























