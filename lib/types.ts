export interface Group {
  id: string;
  name: string;
  type: string;
  students_count: number;
}

export interface Session {
  id: string;
  group_id: string;
  date: string;
  topic: string;
  sel_focus: SELFocus;
  notes: string;
}

export type SELFocus = "שייכות" | "ויסות רגשי" | "עבודת צוות";

export interface SELScores {
  שייכות: number;
  "ויסות רגשי": number;
  "עבודת צוות": number;
}

export interface GroupKPI {
  group_id: string;
  before: SELScores;
  after: SELScores;
}

export interface InventoryItem {
  item: string;
  status: "תקין" | "חסר" | "מועט";
  quantity: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
