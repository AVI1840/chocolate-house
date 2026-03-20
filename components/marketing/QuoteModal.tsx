"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialForm = {
  fullName: "",
  role: "",
  schoolName: "",
  municipality: "",
  studentCount: "",
  schoolType: "",
  primaryNeed: "",
  notes: "",
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toLocaleString("he-IL") }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-chocolate-900/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-l from-chocolate-900 to-chocolate-700 text-white px-8 py-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-chocolate-300 text-xs font-semibold tracking-widest uppercase mb-1">
                    מרחב יוצר — המעבדה לקקאו
                  </p>
                  <h2 className="text-2xl font-bold">בקשה להצעת מחיר</h2>
                  <p className="text-chocolate-300 text-sm mt-1">
                    נחזור אליך עם הצעה מותאמת לבית הספר ולסלי גפ״ן הרלוונטיים
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white text-2xl leading-none transition-colors"
                  aria-label="סגור"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="px-8 py-7">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-chocolate-800 mb-3">
                    הבקשה התקבלה!
                  </h3>
                  <p className="text-chocolate-600 text-lg mb-2">
                    נחזור אליך עם הצעה מותאמת בתוך 1-2 ימי עסקים.
                  </p>
                  <p className="text-chocolate-400 text-sm mb-8">
                    ההצעה תכלול התאמה לסלי גפ״ן הרלוונטיים לבית ספרך.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-accent text-white font-bold px-8 py-3 rounded-xl hover:bg-accent-light transition-colors"
                  >
                    סגור
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-chocolate-700 mb-1.5">
                        שם מלא <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="ישראל ישראלי"
                        className="w-full border border-chocolate-200 rounded-xl px-4 py-3 text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-chocolate-700 mb-1.5">
                        תפקיד <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        required
                        placeholder="מנהל/ת בית ספר"
                        className="w-full border border-chocolate-200 rounded-xl px-4 py-3 text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-chocolate-700 mb-1.5">
                        שם בית הספר <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        value={form.schoolName}
                        onChange={handleChange}
                        required
                        placeholder='בית ספר "שם"'
                        className="w-full border border-chocolate-200 rounded-xl px-4 py-3 text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-chocolate-700 mb-1.5">
                        רשות מקומית <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="municipality"
                        value={form.municipality}
                        onChange={handleChange}
                        required
                        placeholder="עיריית / מועצת..."
                        className="w-full border border-chocolate-200 rounded-xl px-4 py-3 text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-chocolate-700 mb-1.5">
                        מספר תלמידים
                      </label>
                      <input
                        type="number"
                        name="studentCount"
                        value={form.studentCount}
                        onChange={handleChange}
                        placeholder="450"
                        className="w-full border border-chocolate-200 rounded-xl px-4 py-3 text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-chocolate-700 mb-1.5">
                        סוג מסגרת <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="schoolType"
                        value={form.schoolType}
                        onChange={handleChange}
                        required
                        className="w-full border border-chocolate-200 rounded-xl px-4 py-3 text-chocolate-800 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all bg-white"
                      >
                        <option value="">בחר...</option>
                        <option value="יסודי">יסודי</option>
                        <option value="חטיבה">חטיבת ביניים</option>
                        <option value="חינוך מיוחד">חינוך מיוחד</option>
                        <option value="תיכון">תיכון</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-chocolate-700 mb-1.5">
                        צורך מרכזי <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="primaryNeed"
                        value={form.primaryNeed}
                        onChange={handleChange}
                        required
                        className="w-full border border-chocolate-200 rounded-xl px-4 py-3 text-chocolate-800 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all bg-white"
                      >
                        <option value="">בחר...</option>
                        <option value="הכלה והשתלבות">הכלה והשתלבות</option>
                        <option value="ויסות רגשי">ויסות רגשי</option>
                        <option value="אקלים בית ספרי">אקלים בית ספרי</option>
                        <option value="שילוב כלל בית ספרי">שילוב כלל בית ספרי</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-chocolate-700 mb-1.5">
                      הערות נוספות
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="פרטים נוספים על הצורך, תקציב, לוח זמנים..."
                      className="w-full border border-chocolate-200 rounded-xl px-4 py-3 text-chocolate-800 placeholder:text-chocolate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none"
                    />
                  </div>

                  {/* Regulatory trust badge */}
                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3">
                    <span className="text-green-600 text-lg">🔒</span>
                    <p className="text-green-800 text-xs font-medium">
                      המידע ישמש לצורך הכנת הצעת מחיר בלבד | בהלימה לחוזר מנכ״ל 0402 ולמדיניות גפ״ן
                    </p>
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm text-center">
                      אירעה שגיאה. נסה שנית או פנה אלינו ישירות.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-accent hover:bg-accent-light disabled:opacity-60 text-white text-lg font-bold py-4 rounded-2xl shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {status === "sending" ? "שולח..." : "שלח בקשה"}
                  </button>
                  <p className="text-chocolate-400 text-xs text-center">
                    ללא התחייבות | נחזור אליך בתוך יום עסקים אחד
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
