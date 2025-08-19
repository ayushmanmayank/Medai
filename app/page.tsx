"use client"
import Navbar from '@/components/Navbar'
import CubeLogo from '@/components/CubeLogo'
import Card from '@/components/Card'
import { DemandChart } from '@/components/Charts'
import { alerts, demandSeries, stockLevels } from '@/lib/mock'
import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container pt-28 pb-10">
        <div className="flex flex-col items-center text-center gap-6">
          <CubeLogo size={140} />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            MedSecureAI
          </motion.h1>
          <p className="text-neutral-400 max-w-2xl">
            Predictive Medicine Demand & Anti-Corruption Tracking for Rural Healthcare
          </p>
          <button className="btn-gradient px-6 py-3">Connect System</button>
        </div>
      </section>

      <section className="container grid md:grid-cols-2 gap-6">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">Predicted Medicine Demand</h2>
          </div>
          <DemandChart data={demandSeries} />
        </Card>

        <Card className="p-5">
          <h2 className="text-lg font-medium mb-4">Real-time Stock Levels</h2>
          <div className="space-y-4">
            {stockLevels.map((m) => (
              <div key={m.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-300">{m.name}</span>
                  <span className="text-neutral-400">{m.level}%</span>
                </div>
                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500"
                    style={{ width: `${m.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="md:col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Alerts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {alerts.map((a) => (
              <div key={a.id} className="p-4 rounded-xl border border-red-500/30 bg-red-950/30">
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <AlertTriangle size={16} />
                  <span className="badge bg-red-500/20 text-red-300">{a.id}</span>
                </div>
                <p className="text-sm text-red-200">{a.message}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  )
}

