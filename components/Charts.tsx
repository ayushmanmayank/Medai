"use client"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from 'recharts'

export function DemandChart({ data }: { data: Array<Record<string, number | string>> }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="name" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #27272a' }} />
          <Legend />
          <Line type="monotone" dataKey="demand" stroke="#10b981" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ForecastAreaChart({ data }: { data: Array<Record<string, number | string>> }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="name" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #27272a' }} />
          <Legend />
          <Area type="monotone" dataKey="weather" stroke="#6366f1" fillOpacity={1} fill="url(#colorB)" />
          <Area type="monotone" dataKey="outbreak" stroke="#f59e0b" fillOpacity={1} fill="url(#colorC)" />
          <Area type="monotone" dataKey="demand" stroke="#10b981" fillOpacity={1} fill="url(#colorA)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function DemandBarChart({ data }: { data: Array<Record<string, number | string>> }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="name" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #27272a' }} />
          <Legend />
          <Bar dataKey="demand" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

