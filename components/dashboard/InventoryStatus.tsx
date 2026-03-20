import { inventory } from "@/lib/mock-data";

const statusColors: Record<string, string> = {
  תקין: "bg-green-100 text-green-700",
  חסר: "bg-red-100 text-red-700",
  מועט: "bg-yellow-100 text-yellow-700",
};

export default function InventoryStatus() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100">
      <h3 className="text-lg font-bold text-chocolate-800 mb-4">סטטוס מלאי</h3>
      <div className="space-y-2">
        {inventory.map((item) => (
          <div
            key={item.item}
            className="flex items-center justify-between p-3 rounded-xl bg-cream"
          >
            <div className="flex items-center gap-3">
              <span className="font-medium text-chocolate-800">{item.item}</span>
              <span className="text-sm text-chocolate-400">{item.quantity}</span>
            </div>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                statusColors[item.status] || ""
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
