"use client"
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { ForecastAreaChart } from '@/components/Charts'
import { forecastCompare } from '@/lib/mock'
import { motion } from 'framer-motion'

export default function ForecastPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container pt-24 pb-10">
        <div className="flex items-center justify-between mb-6">
          <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold">
            Forecast Analysis
          </motion.h1>
        </div>
        <Card className="p-5">
          <h2 className="text-lg font-medium mb-4">Weather vs Outbreaks vs Demand</h2>
          <ForecastAreaChart data={forecastCompare} />
        </Card>
      </section>
    </main>
  )
}

