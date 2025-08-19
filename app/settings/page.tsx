"use client"
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { useState } from 'react'

type FormData = {
  medicine: string
  demand: number
  location: string
  threshold: number
}

export default function SettingsPage() {
  const [form, setForm] = useState<FormData>({ medicine: '', demand: 0, location: '', threshold: 30 })
  const [items, setItems] = useState<Array<FormData>>([])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setItems((prev) => [...prev, form])
    setForm({ medicine: '', demand: 0, location: '', threshold: form.threshold })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container pt-24 pb-10 grid md:grid-cols-2 gap-6">
        <Card className="p-5">
          <h2 className="text-lg font-medium mb-4">Add Clinic Data</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-neutral-300">Medicine Name</label>
              <input
                value={form.medicine}
                onChange={(e) => setForm({ ...form, medicine: e.target.value })}
                className="w-full mt-1 rounded-xl bg-neutral-800 border border-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Paracetamol"
                required
              />
            </div>
            <div>
              <label className="text-sm text-neutral-300">Demand</label>
              <input
                type="number"
                value={form.demand}
                onChange={(e) => setForm({ ...form, demand: Number(e.target.value) })}
                className="w-full mt-1 rounded-xl bg-neutral-800 border border-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="150"
                required
              />
            </div>
            <div>
              <label className="text-sm text-neutral-300">Location</label>
              <input
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full mt-1 rounded-xl bg-neutral-800 border border-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Ward 7"
                required
              />
            </div>
            <div>
              <label className="text-sm text-neutral-300">Shortage Alert Threshold: {form.threshold}%</label>
              <input
                type="range"
                min={0}
                max={100}
                value={form.threshold}
                onChange={(e) => setForm({ ...form, threshold: Number(e.target.value) })}
                className="w-full mt-1"
              />
            </div>
            <div className="flex justify-end">
              <button className="btn-gradient px-5 py-2">Save</button>
            </div>
          </form>
        </Card>

        <Card className="p-5">
          <h2 className="text-lg font-medium mb-4">Mock Data Entries</h2>
          <div className="space-y-3">
            {items.length === 0 && <p className="text-sm text-neutral-400">No entries yet.</p>}
            {items.map((it, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-300">{it.medicine}</span>
                  <span className="text-neutral-400">{it.demand}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>{it.location}</span>
                  <span>Threshold {it.threshold}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  )
}

