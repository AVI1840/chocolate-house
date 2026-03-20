import { groups } from "@/lib/mock-data";

export default function ActiveGroups() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100">
      <h3 className="text-lg font-bold text-chocolate-800 mb-4">קבוצות פעילות</h3>
      <div className="space-y-3">
        {groups.map((group) => (
          <div
            key={group.id}
            className="flex items-center justify-between p-3 rounded-xl bg-cream"
          >
            <div>
              <p className="font-medium text-chocolate-800">{group.name}</p>
              <p className="text-sm text-chocolate-400">{group.type}</p>
            </div>
            <span className="bg-chocolate-100 text-chocolate-700 text-sm font-medium px-3 py-1 rounded-full">
              {group.students_count} תלמידים
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
