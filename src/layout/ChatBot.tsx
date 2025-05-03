import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import LogoLight from "@/assets/chaicode/chai-white.svg";
import LogoDark from "@/assets/chaicode/chai-gray.svg";
import Fuse from "fuse.js";
import { FaVolumeUp, FaVolumeMute, FaTimes } from "react-icons/fa";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // State to track mute status
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<{ from: "user" | "bot"; text: string }[]>(
    []
  );

  const suggestedQuestions = [
    { question: "What is ChaiCode?", answer: "ChaiCode is a platform to learn and build like a pro! We offer free courses, coding challenges, and a supportive community to help you learn and build your skills. We also have a YouTube channel where you can watch our tutorials and live streams. Also we have a discord server where you can join and ask questions. Even cohorts are available in minimal price." },
    { question: "How do I join a cohort?", answer: "You can join a cohort by visiting our website and clicking on the 'Join Now' button. Cohorts typically last 4-6 weeks and include live sessions, projects, and mentor support." },
    { question: "What programming languages do you teach?", answer: "We cover JavaScript, Python, TypeScript, and more. Our focus is on practical, hands-on learning with real-world projects." },
    { question: "Is ChaiCode free?", answer: "Yes, most of our resources and cohorts are completely free! We believe in making quality education accessible to everyone." },
    { question: "How can I contribute?", answer: "You can contribute by participating in open-source projects, sharing your knowledge with others, or joining our community discussions. Check out our GitHub repository to get started!" }
  ];

  const chatbotData: Record<string, string> = {
    // General Greetings
    hi: "Hello! How can I assist you today?",
    hello: "Hi there! Ask me anything about our platform.",
    hey: "Hey! How can I help you?",
    "good morning": "Good morning! How can I assist you today?",
    "good evening": "Good evening! What can I help you with?",
  
    // About ChaiCode
    "what is chai code?":
      "ChaiCode is a gamified frontend platform to learn and build like a pro!",
    "tell me about chai code":
      "ChaiCode is a learning platform that focuses on hands-on coding projects and gamified learning experiences.",
    "why should i join chai code?":
      "ChaiCode offers hands-on learning, gamified challenges, mentorship, and a supportive community—all for free! It's perfect for anyone looking to grow their skills.",
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
    "is chai code only for frontend?":
      "No, while ChaiCode emphasizes frontend development, it also covers backend, full-stack, and other technologies like AI/ML.",
  
    // Cohorts
    "what is a cohort?":
      "A cohort is a group-based learning program where participants learn together over a set period.",
    "how do i join a cohort?":
      "Go to the Join Cohort section and click on the 'Join Now' button.",
    "how does it work?":
      "You'll join a cohort, attend live sessions, complete projects, and get feedback from mentors.",
    "how long is a cohort?":
      "Cohorts typically last 4-6 weeks, depending on the topic.",
    "what if i miss a session?":
      "All sessions are recorded, so you can watch them later.",
    "is there mentor support?":
      "Yes, we provide mentorship and support throughout the cohort.",
    "can i get a certificate?":
      "Yes, participants who complete the cohort receive a certificate.",
  
    // Gamified Learning
    "what is gamified learning?":
      "Gamified learning uses game-like elements such as points, badges, and leaderboards to make learning fun and engaging.",
    "what kind of projects can i build?":
      "You can build websites, web applications, APIs, and even AI/ML models depending on the cohort you join.",
  
    // Programming Languages and Technologies
    "what programming languages do you teach?":
      "We cover JavaScript, Python, TypeScript, and more.",
    "what tech is used?":
      "We use React, TailwindCSS, TypeScript, and cutting-edge UI tools.",
    "is chai code free?":
      "Yes, most of our resources are completely free!",
  
    // Hitesh Choudhary
    "who is hitesh choudhary?":
      "Hitesh Choudhary is a renowned software developer, educator, and the founder of ChaiCode. He is passionate about teaching programming in a fun and engaging way.",
    "why did hitesh start chai code?":
      "Hitesh started ChaiCode to make learning programming accessible, interactive, and enjoyable for everyone, especially beginners.",
    "what is hitesh's background?":
      "Hitesh has a strong background in software development and education. He has worked on various projects and has a massive following on platforms like YouTube.",
    "where can i find hitesh choudhary?":
      "You can find Hitesh on YouTube, Twitter, and LinkedIn. He shares valuable content about programming, web development, and career advice.",
  
    // Community and Contributions
    "do you have a youtube channel?":
      "Yes! Check out our YouTube channel for tutorials and live streams.",
    "how can i contribute?":
      "You can contribute by participating in open-source projects or sharing your knowledge with others.",
    "how do i contact support?":
      "You can reach out to us via email or through our social media channels.",
  
    // Default Response
    default:
      "Sorry, I don't understand that yet. Could you rephrase your question?",
  };

  const speak = (text: string) => {
    const synth = window.speechSynthesis;

    // Stop any ongoing speech before starting a new one
    if (synth.speaking) {
      synth.cancel();
    }

    if (isMuted) {
      console.log("Muted: No sound will play.");
      return; // Do not speak if muted
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";

    // Dynamically check if muted during speech
    utter.onstart = () => {
      if (isMuted) {
        synth.cancel();
      }
    };

    synth.speak(utter);
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;

      // Cancel ongoing speech if muting
      if (newMutedState) {
        const synth = window.speechSynthesis;
        if (synth.speaking) {
          synth.cancel();
          console.log("Speech canceled due to mute.");
        }
      }

      console.log("Mute state:", newMutedState);
      return newMutedState;
    });
  };

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (!newState) {
      setChat([]);
      localStorage.removeItem("chatHistory");
      setIsMuted(true); // Mute the bot when the chat is closed
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input.trim().toLowerCase();

    const fuse = new Fuse(Object.keys(chatbotData), {
      includeScore: true,
      threshold: 0.4,
    });

    const result = fuse.search(userMsg);
    const matchedKey = result.length > 0 ? result[0].item : "default";
    const botMsg = chatbotData[matchedKey];

    const newChat = [
      ...chat,
      { from: "user", text: input },
      { from: "bot", text: botMsg },
    ] as { from: "user" | "bot"; text: string }[];

    setChat(newChat);
    if (!isMuted) {
      speak(botMsg);
    }
    setInput("");
    localStorage.setItem("chatHistory", JSON.stringify(newChat));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const handleQuestionClick = (question: string, answer: string) => {
    const newChat = [
      ...chat,
      { from: "user" as const, text: question },
      { from: "bot" as const, text: answer }
    ];
    setChat(newChat);
    if (!isMuted) {
      speak(answer);
    }
    localStorage.setItem("chatHistory", JSON.stringify(newChat));
  };

  useEffect(() => {
    const saved = localStorage.getItem("chatHistory");
    if (saved) {
      setChat(JSON.parse(saved));
    } else {
      // Add initial welcome message when chat is first opened
      const welcomeMessage = {
        from: "bot" as const,
        text: "Hi! My name is ChaiCodeBot. I'm here to answer your questions about ChaiCode. Here are some common questions you might want to ask:"
      };
      setChat([welcomeMessage]);
    }
  }, []);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50" 
      role="complementary"
      aria-label="ChaiCode AI ChatBot Assistant"
    >
      {/* Toggle Button */}
      <div className="relative group">
        <button
          onClick={toggleChat}
          aria-label={isOpen ? "Close ChatBot" : "Open ChatBot"}
          aria-expanded={isOpen}
          aria-controls="chatbot-dialog"
          className="rounded-full p-3 shadow-lg transition relative bg-orange-500 hover:scale-105 border dark:border-white border-black"
        >
          <img
            src={LogoDark}
            alt="ChaiCode Logo - Light"
            className="block dark:hidden"
            width={32}
            height={32}
            aria-hidden="true"
          />
          <img
            src={LogoLight}
            alt="ChaiCode Logo - Dark"
            className="hidden dark:block"
            width={32}
            height={32}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* ChatBox */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.3 }}
        className={`${isOpen ? "block" : "hidden"} mt-3 w-80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden`}
        role="dialog"
        id="chatbot-dialog"
        aria-label="ChatBot conversation"
        aria-modal="true"
      >
        {/* Header */}
        <div 
          className="flex justify-between items-center bg-orange-500 text-white px-4 py-2 font-semibold" 
          role="banner"
          aria-label="ChatBot header"
        >
          <span>ChaiCode Bot</span>
          <div className="flex items-center space-x-2">
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="text-white hover:text-black text-lg"
              aria-label={isMuted ? "Unmute Bot" : "Mute Bot"}
            >
              {isMuted ? <FaVolumeMute aria-hidden="true" /> : <FaVolumeUp aria-hidden="true" />}
            </button>
            {/* Close Button */}
            <button
              onClick={toggleChat}
              className="text-white hover:text-black text-lg"
              aria-label="Close Chat"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div 
          className="max-h-60 overflow-y-auto px-3 py-2 space-y-2"
          role="log"
          aria-label="Chat messages"
        >
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
              role="listitem"
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                  msg.from === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                }`}
                role={msg.from === "user" ? "user message" : "bot message"}
                aria-label={`${msg.from === "user" ? "You" : "Bot"} said: ${msg.text}`}
              >
                {msg.text}
                {msg.from === "bot" && index === 0 && (
                  <div className="mt-2 space-y-2">
                    {suggestedQuestions.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuestionClick(item.question, item.answer)}
                        className="w-full text-left px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors cursor-pointer"
                        aria-label={`Ask: ${item.question}`}
                      >
                        {item.question}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div 
          className="flex items-center border-t border-gray-200 dark:border-gray-700"
          role="form"
          aria-label="Chat input form"
        >
          <input
            type="text"
            className="w-full px-3 py-2 text-sm focus:outline-none dark:bg-gray-800 dark:text-white"
            placeholder="Ask me something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            aria-label="Chat input field"
            aria-required="true"
          />
          <button
            onClick={sendMessage}
            className="text-orange-500 font-bold px-3 py-2 hover:scale-105 cursor-pointer"
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