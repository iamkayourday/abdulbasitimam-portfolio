import { useEffect } from 'react';

const AIChatWidget = () => {
  useEffect(() => {
    // Dynamically load the AI script
    const script = document.createElement('script');
    script.src = "https://cdn.chatsimple.ai/chat-bot-loader.js"; // Updated script URL
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <chat-bot
      platform_id="da1d5ebc-37f6-4087-8c65-f3117bc13a2b"
      user_id="b8551be8-7244-4eef-b162-9e44e10b60e2"
      chatbot_id="0b5ba742-47dd-46f5-ac85-36c1a811d3e9"
    >
      <a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">
        chatsimple
      </a>
    </chat-bot>
  );
};

export default AIChatWidget;
