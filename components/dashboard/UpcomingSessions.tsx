import { sessions, groups } from "@/lib/mock-data";

export default function UpcomingSessions() {
  const upcoming = sessions
    .filter((s) => new Date(s.date) >= new Date("2026-03-20"))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const getGroupName = (groupId: string) =>
    groups.find((g) => g.id === groupId)?.name || "";

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100">
      <h3 className="text-lg font-bold text-chocolate-800 mb-4">מפגשים קרובים</h3>
      {upcoming.length === 0 ? (
        <p className="text-chocolate-400 text-sm">אין מפגשים קרובים</p>
      ) : (
        <div className="space-y-3">
          {upcoming.map((session) => (
            <div
              key={session.id}
              className="p-3 rounded-xl bg-cream flex items-start justify-between"
            >
              <div>
                <p className="font-medium text-chocolate-800">{session.topic}</p>
                <p className="text-sm text-chocolate-400">{getGroupName(session.group_id)}</p>
              </div>
              <div className="text-start">
                <p className="text-sm font-medium text-accent">{session.date}</p>
                <span className="inline-block mt-1 text-xs bg-chocolate-100 text-chocolate-600 px-2 py-0.5 rounded-full">
                  {session.sel_focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
