export type RepairStatus = 'in_progress' | 'ready' | 'diagnostic' | 'waiting_parts';

export interface RepairTicket {
  id: string;
  customerName: string;
  customerPhone?: string;
  deviceType: string;
  deviceModel: string;
  color?: string;
  receivedDate: string;
  completedDate?: string;
  issueDescription: string;
  repairCost: number;
  currency: string;
  status: RepairStatus;
  statusLabel: string;
  technicianNotes: string;
  replacedParts?: string[];
  warrantyDays: number;
  currentStepIndex: number; // 0: استلام, 1: فحص مجهري, 2: قيد اللحام والإصلاح, 3: جاهز للاستلام
}

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: 'cpu' | 'usb' | 'monitor' | 'sparkles' | 'shield' | 'gauge';
  avgTime: string;
  warranty: string;
}

export interface SparePart {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  price: number;
  currency: string;
  compatibility: string[];
  inStock: boolean;
  quality: 'أصلي 100%' | 'درجة أولى OEM';
}
