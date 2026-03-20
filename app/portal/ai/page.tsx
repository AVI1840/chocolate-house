"use client";

import { useState } from "react";
import Image from "next/image";
import { aiResponses } from "@/lib/mock-data";
import { ChatMessage } from "@/lib/types";
import ProtocolLibrary from "@/components/portal/ProtocolLibrary";

const promptButtons = [
  "בנה מערך שיעור לעבודת צוות",
  "התאמות לתלמיד עם ויסות חושי",
  "רעיונות לשילוב תלמידים",
];

export default function AIPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);
  const [handoffText, setHandoffText] = useState("");
  const [handoffSent, setHandoffSent] = useState(false);

  const handlePrompt = async (prompt: string) => {
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: prompt,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response = aiResponses[prompt] || "מצטער, אין לי תשובה מוכנה לשאלה זו. נסה אחת מהאפשרויות המוצעות.";

    const assistantMessage: ChatMessage = {
      id: `msg-${Date.now() + 1}`,
      role: "assistant",
      content: response,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleHandoffSubmit = () => {
    if (!handoffText.trim()) return;
    setHandoffSent(true);
    setTimeout(() => {
      setShowHandoff(false);
      setHandoffText("");
      setHandoffSent(false);
    }, 3000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-chocolate-800 mb-2">העוזר הפדגוגי החכם</h1>
      <p className="text-chocolate-500 mb-6">
        כלי AI לסיוע בתכנון מפגשים, התאמות והנגשה
      </p>

      {/* Safety disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm text-yellow-800">
        <p className="font-semibold mb-1">⚠️ הערה חשובה</p>
        <p>
          העוזר הפדגוגי הוא כלי עזר לצוות המקצועי בלבד. הוא אינו מספק אבחון
          פסיכולוגי, התערבות במצבי משבר או ייעוץ רפואי. במצבי חירום או ספק - יש
          לפנות למנחה מקצועי.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat area */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-chocolate-100 flex flex-col h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-chocolate-300 mt-20">
                <p className="text-5xl mb-4">🍫</p>
                <p className="text-lg">בחר נושא מהכפתורים כדי להתחיל</p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    msg.role === "user"
                      ? "bg-chocolate-800 text-white"
                      : "bg-cream border border-chocolate-100 text-chocolate-800"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div
                      className="prose prose-sm max-w-none text-chocolate-800 whitespace-pre-wrap"
                      style={{ direction: "rtl" }}
                    >
                      {msg.content}
                    </div>
                  ) : (
                    <p>{msg.content}</p>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-cream border border-chocolate-100 rounded-2xl px-5 py-3 text-chocolate-400">
                  <span className="animate-pulse">מעבד תשובה...</span>
                </div>
              </div>
            )}
          </div>

          {/* Prompt buttons */}
          <div className="border-t border-chocolate-100 p-4">
            <p className="text-sm text-chocolate-400 mb-3">נושאים מוצעים:</p>
            <div className="flex flex-wrap gap-2">
              {promptButtons.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handlePrompt(prompt)}
                  disabled={isTyping}
                  className="bg-cream hover:bg-chocolate-100 text-chocolate-700 text-sm px-4 py-2 rounded-xl border border-chocolate-200 transition-colors disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Mentor profile card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-chocolate-100">
            <div className="relative aspect-[4/3] bg-[#FAF3E0]">
              <Image
                src="/images/mentor.png"
                alt="מנחה מקצועי - ליווי אנושי מאחורי ה-AI"
                fill
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/70 to-transparent" />
              <div className="absolute bottom-3 start-3 text-white">
                <p className="font-bold text-sm">ליווי אנושי מקצועי</p>
                <p className="text-xs text-white/70">תמיד זמין מאחורי ה-AI</p>
              </div>
            </div>
          </div>

          {/* Human Handoff button with mentor avatar */}
          <button
            onClick={() => setShowHandoff(true)}
            className="w-full bg-accent hover:bg-accent-light text-white font-bold py-4 px-5 rounded-2xl shadow-md transition-all hover:shadow-lg"
          >
            <div className="flex items-center gap-3 justify-center">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shrink-0">
                <Image
                  src="/images/mentor.png"
                  alt="מנחה"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-base">התייעצות עם מנחה מקצועי</span>
            </div>
          </button>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-chocolate-100">
            <h3 className="font-bold text-chocolate-800 mb-3">מתי לפנות למנחה?</h3>
            <ul className="space-y-2 text-sm text-chocolate-500">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">●</span>
                מצוקה רגשית של תלמיד
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">●</span>
                הסלמה התנהגותית
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">●</span>
                חוסר ודאות לגבי התאמות
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">●</span>
                צורך בליווי מקצועי אישי
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Protocol Library */}
      <ProtocolLibrary />

      {/* Handoff Modal */}
      {showHandoff && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl">
            <h2 className="text-xl font-bold text-chocolate-800 mb-2">
              🧑‍⚕️ התייעצות עם מנחה מקצועי
            </h2>
            <p className="text-chocolate-500 text-sm mb-4">
              תאר/י את המקרה בקצרה. הפנייה תועבר למנחה המקצועי של התכנית.
            </p>

            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-5">
              למצבים מורכבים — צוות קליני ופדגוגי זמין לליווי המורה תוך 24 שעות.
            </p>

            {handoffSent ? (
              <div className="text-center py-8">
                <p className="text-4xl mb-4">✅</p>
                <p className="text-lg font-semibold text-green-700">
                  הפנייה נשלחה בהצלחה!
                </p>
                <p className="text-sm text-chocolate-500 mt-2">
                  סטטוס: דורש התערבות אנושית
                </p>
              </div>
            ) : (
              <>
                <textarea
                  value={handoffText}
                  onChange={(e) => setHandoffText(e.target.value)}
                  rows={5}
                  placeholder="תאר/י את המצב, התלמיד/ה (ללא שם מלא), והשאלה שלך..."
                  className="w-full p-3 border border-chocolate-200 rounded-xl bg-cream text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none mb-4"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleHandoffSubmit}
                    className="flex-1 bg-accent hover:bg-accent-light text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    שלח פנייה
                  </button>
                  <button
                    onClick={() => setShowHandoff(false)}
                    className="px-6 py-3 bg-chocolate-100 text-chocolate-600 rounded-xl hover:bg-chocolate-200 transition-colors"
                  >
                    ביטול
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
