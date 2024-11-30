import { useEffect } from 'react';

const AIChatWidget = () => {
  useEffect(() => {
    // Dynamically load the AI script
    const script = document.createElement('script');
    script.src = "https://cdn.chatsimple.ai/ai-loader.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <co-pilot
      platform-id="6e75b160-23f0-465b-a3f1-b0b8e7a5e7ee"
      user-id="b8551be8-7244-4eef-b162-9e44e10b60e2"
      chatbot-id="0b5ba742-47dd-46f5-ac85-36c1a811d3e9"
      is-local="false"
    >
      <a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">AI Nav</a>
    </co-pilot>
  );
};

export default AIChatWidget;
