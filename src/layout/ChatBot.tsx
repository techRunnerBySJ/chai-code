import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoLight from "@/assets/chaicode/chai-white.svg";
import LogoDark from "@/assets/chaicode/chai-gray.svg";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<{ from: "user" | "bot"; text: string }[]>(
    []
  );

  // ✅ Expanded Chatbot Data with Hitesh Choudhary and ChaiCode Benefits
  const chatbotData: Record<string, string> = {
    hi: "Hello! How can I assist you today?",
    hello: "Hi there! Ask me anything about our platform.",
    "what is chai code?":
      "ChaiCode is a gamified frontend platform to learn and build like a pro!",
    "how do i join a cohort?":
      "Go to the Join Cohort section and click on the 'Join Now' button.",
    "what tech is used?":
      "We use React, TailwindCSS, TypeScript, and cutting-edge UI tools.",
    "who are you?": "I am ChaiBot, your friendly AI assistant for ChaiCode.",
    "tell me about chai code":
      "ChaiCode is a learning platform that focuses on hands-on coding projects and gamified learning experiences.",
    "what is a cohort?":
      "A cohort is a group-based learning program where participants learn together over a set period.",
    "how does it work?":
      "You’ll join a cohort, attend live sessions, complete projects, and get feedback from mentors.",
    "is it free?": "Yes, most of our resources and cohorts are completely free!",
    "do you have a youtube channel?":
      "Yes! Check out our YouTube channel for tutorials and live streams.",
    "how can i contribute?":
      "You can contribute by participating in open-source projects or sharing your knowledge with others.",
    "what programming languages do you teach?":
      "We cover JavaScript, Python, TypeScript, and more.",
    "can i get a certificate?":
      "Yes, participants who complete the cohort receive a certificate.",
    "what is gamified learning?":
      "Gamified learning uses game-like elements such as points, badges, and leaderboards to make learning fun and engaging.",
    "how long is a cohort?":
      "Cohorts typically last 4-6 weeks, depending on the topic.",
    "what if i miss a session?":
      "All sessions are recorded, so you can watch them later.",
    "is there mentor support?":
      "Yes, we provide mentorship and support throughout the cohort.",
    "how do i contact support?":
      "You can reach out to us via email or through our social media channels.",
    "default":
      "Sorry, I don't understand that yet. Could you rephrase your question?",

    // ✅ New Questions About Hitesh Choudhary
    "who is hitesh choudhary?":
      "Hitesh Choudhary is a renowned software developer, educator, and the founder of ChaiCode. He is passionate about teaching programming in a fun and engaging way.",
    "why did hitesh start chai code?":
      "Hitesh started ChaiCode to make learning programming accessible, interactive, and enjoyable for everyone, especially beginners.",
    "what is hitesh's background?":
      "Hitesh has a strong background in software development and education. He has worked on various projects and has a massive following on platforms like YouTube.",
    "where can i find hitesh choudhary?":
      "You can find Hitesh on YouTube, Twitter, and LinkedIn. He shares valuable content about programming, web development, and career advice.",

    // ✅ New Questions About Why ChaiCode and Its Benefits
    "why should i join chai code?":
      "ChaiCode offers hands-on learning, gamified challenges, mentorship, and a supportive community—all for free! It’s perfect for anyone looking to grow their skills.",
    "what makes chai code different?":
      "ChaiCode stands out because of its gamified learning approach, real-world projects, and active community-driven ecosystem.",
    "what are the benefits of joining chai code?":
      "Benefits include free access to high-quality resources, cohort-based learning, mentorship, certificates, and a chance to collaborate with like-minded developers.",
    "is chai code good for beginners?":
      "Absolutely! ChaiCode is designed to help beginners learn programming step-by-step in an engaging and supportive environment.",
    "does chai code help with job opportunities?":
      "While ChaiCode focuses on skill-building, completing cohorts and projects can enhance your portfolio, making you more employable.",
    "how does chai code help me grow?":
      "ChaiCode helps you grow by providing structured learning paths, hands-on projects, mentorship, and a vibrant community to learn from.",
    "what kind of projects can i build?":
      "You can build websites, web applications, APIs, and even AI/ML models depending on the cohort you join.",
    "is chai code only for frontend?":
      "No, while ChaiCode emphasizes frontend development, it also covers backend, full-stack, and other technologies like AI/ML.",
  };

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    synth.speak(utter);
  };

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (!newState) {
      setChat([]);
      localStorage.removeItem("chatHistory");
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    const botMsg =
      chatbotData[userMsg.toLowerCase()] || chatbotData["default"];

    const newChat = [
      ...chat,
      { from: "user", text: userMsg },
      { from: "bot", text: botMsg },
    ] as { from: "user" | "bot"; text: string }[];

    setChat(newChat);
    speak(botMsg);
    setInput("");
    localStorage.setItem("chatHistory", JSON.stringify(newChat));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    const saved = localStorage.getItem("chatHistory");
    if (saved) setChat(JSON.parse(saved));
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50" aria-label="ChaiCode AI ChatBot Assistant">
      {/* Toggle Button with Tooltip */}
      <div className="relative group">
        <button
          onClick={toggleChat}
          aria-label="Toggle ChaiCode Chatbot"
          className="rounded-full p-3 shadow-lg transition relative bg-orange-500 hover:scale-105 border dark:border-white border-black"
        >
          <img
            src={LogoDark}
            alt="ChaiCode Logo - Light"
            className="block dark:hidden"
            width={32}
            height={32}
          />
          <img
            src={LogoLight}
            alt="ChaiCode Logo - Dark"
            className="hidden dark:block"
            width={32}
            height={32}
          />
        </button>

        {/* Tooltip - Only on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100"
          role="tooltip"
        >
          ChaiCode Chatbot: Ask me anything!
        </motion.div>
      </div>

      {/* ChatBox */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.3 }}
        className={`${isOpen ? "block" : "hidden"} mt-3 w-80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden`}
        aria-live="polite"
        role="dialog"
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-orange-500 text-white px-4 py-2 font-semibold" role="heading">
          <span>ChaiCode Bot</span>
          <button
            onClick={toggleChat}
            className="text-white hover:text-black text-lg"
            aria-label="Close Chat"
          >
            ✕
          </button>
        </div>

        {/* Chat Messages */}
        <div className="max-h-60 overflow-y-auto px-3 py-2 space-y-2">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                  msg.from === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                }`}
                aria-label={`${msg.from === "user" ? "You" : "Bot"} said: ${msg.text}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center border-t border-gray-200 dark:border-gray-700">
          <input
            type="text"
            className="w-full px-3 py-2 text-sm focus:outline-none dark:bg-gray-800 dark:text-white"
            placeholder="Ask me something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            aria-label="Chat input field"
          />
          <button
            onClick={sendMessage}
            className="text-orange-500 font-bold px-3 py-2 hover:scale-105"
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ChatBot;