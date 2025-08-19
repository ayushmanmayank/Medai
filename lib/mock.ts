export const demandSeries = [
  { name: 'Mon', demand: 120 },
  { name: 'Tue', demand: 160 },
  { name: 'Wed', demand: 180 },
  { name: 'Thu', demand: 140 },
  { name: 'Fri', demand: 220 },
  { name: 'Sat', demand: 260 },
  { name: 'Sun', demand: 200 }
]

export const stockLevels = [
  { name: 'Paracetamol', level: 70 },
  { name: 'ORS', level: 45 },
  { name: 'Antibiotics', level: 30 }
]

export const alerts = [
  {
    id: 'AL-2391',
    message: 'Unusual surge in antibiotics demand detected in Ward 7',
    severity: 'high' as const
  },
  {
    id: 'AL-2392',
    message: 'Duplicate batch logs from supplier S-101 observed',
    severity: 'high' as const
  },
  {
    id: 'AL-2393',
    message: 'Pending deliveries exceeding 48 hours in Clinic C-12',
    severity: 'medium' as const
  }
]

export const logs = [
  {
    id: 'B-0001',
    supplier: 'S-101',
    clinic: 'C-12',
    timestamp: '2025-08-19 10:22',
    status: 'Delivered' as const
  },
  {
    id: 'B-0002',
    supplier: 'S-222',
    clinic: 'C-41',
    timestamp: '2025-08-19 11:05',
    status: 'Pending' as const
  },
  {
    id: 'B-0003',
    supplier: 'S-101',
    clinic: 'C-12',
    timestamp: '2025-08-18 17:41',
    status: 'Suspicious' as const
  },
  {
    id: 'B-0004',
    supplier: 'S-303',
    clinic: 'C-09',
    timestamp: '2025-08-18 14:12',
    status: 'Delivered' as const
  }
]

export const forecastCompare = [
  { name: 'W1', weather: 30, outbreak: 20, demand: 100 },
  { name: 'W2', weather: 40, outbreak: 35, demand: 120 },
  { name: 'W3', weather: 50, outbreak: 60, demand: 180 },
  { name: 'W4', weather: 35, outbreak: 40, demand: 140 },
  { name: 'W5', weather: 60, outbreak: 75, demand: 220 },
  { name: 'W6', weather: 55, outbreak: 45, demand: 190 }
]

