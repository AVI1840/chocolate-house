"use client";

import { useState } from "react";
import { groups, sessions as mockSessions } from "@/lib/mock-data";
import { Session, SELFocus } from "@/lib/types";

const selOptions: SELFocus[] = ["שייכות", "ויסות רגשי", "עבודת צוות"];

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>(mockSessions);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [selFocus, setSelFocus] = useState<SELFocus>("עבודת צוות");
  const [notes, setNotes] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGroup || !date || !topic) return;

    const newSession: Session = {
      id: `s${sessions.length + 1}`,
      group_id: selectedGroup,
      date,
      topic,
      sel_focus: selFocus,
      notes,
    };

    setSessions([...sessions, newSession]);
    setSelectedGroup("");
    setDate("");
    setTopic("");
    setNotes("");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getGroupName = (groupId: string) =>
    groups.find((g) => g.id === groupId)?.name || "";

  return (
    <div>
      <h1 className="text-3xl font-bold text-chocolate-800 mb-8">ניהול מפגשים</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100">
          <h2 className="text-xl font-bold text-chocolate-800 mb-6">מפגש חדש</h2>

          {showSuccess && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
              ✅ המפגש נשמר בהצלחה!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Group selector */}
            <div>
              <label className="block text-sm font-medium text-chocolate-700 mb-2">
                בחירת קבוצה
              </label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full p-3 border border-chocolate-200 rounded-xl bg-cream text-chocolate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              >
                <option value="">בחר קבוצה...</option>
                {groups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-chocolate-700 mb-2">
                תאריך
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border border-chocolate-200 rounded-xl bg-cream text-chocolate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
            </div>

            {/* Topic */}
            <div>
              <label className="block text-sm font-medium text-chocolate-700 mb-2">
                נושא המפגש
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="לדוגמה: עבודת צוות בהכנת טראפלס"
                className="w-full p-3 border border-chocolate-200 rounded-xl bg-cream text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
            </div>

            {/* SEL Focus */}
            <div>
              <label className="block text-sm font-medium text-chocolate-700 mb-2">
                מיקוד SEL
              </label>
              <div className="flex gap-3">
                {selOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelFocus(option)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      selFocus === option
                        ? "bg-accent text-white"
                        : "bg-cream text-chocolate-600 hover:bg-chocolate-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-chocolate-700 mb-2">
                הערות
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="הערות על המפגש..."
                className="w-full p-3 border border-chocolate-200 rounded-xl bg-cream text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-chocolate-800 hover:bg-chocolate-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              שמור מפגש
            </button>
          </form>
        </div>

        {/* Sessions list */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100">
          <h2 className="text-xl font-bold text-chocolate-800 mb-6">
            מפגשים שתועדו ({sessions.length})
          </h2>
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {sessions
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((session) => (
                <div
                  key={session.id}
                  className="p-4 rounded-xl bg-cream border border-chocolate-100"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-chocolate-800">{session.topic}</h3>
                    <span className="text-sm text-chocolate-400">{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-chocolate-100 text-chocolate-600 px-2 py-0.5 rounded-full">
                      {getGroupName(session.group_id)}
                    </span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                      {session.sel_focus}
                    </span>
                  </div>
                  {session.notes && (
                    <p className="text-sm text-chocolate-500 mt-2">{session.notes}</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
