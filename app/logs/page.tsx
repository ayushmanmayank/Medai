"use client"
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { logs } from '@/lib/mock'

const badgeColor = (status: string) =>
  status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-300' : status === 'Pending' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-red-500/20 text-red-300'

export default function LogsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container pt-24 pb-10">
        <h1 className="text-2xl font-semibold mb-6">Blockchain Logs</h1>
        <Card className="p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900/80">
              <tr>
                <th className="text-left p-4">Batch ID</th>
                <th className="text-left p-4">Supplier</th>
                <th className="text-left p-4">Clinic/Pharmacy</th>
                <th className="text-left p-4">Timestamp</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l, i) => (
                <tr key={l.id} className={i % 2 === 0 ? 'bg-neutral-900/50' : ''}>
                  <td className="p-4">{l.id}</td>
                  <td className="p-4">{l.supplier}</td>
                  <td className="p-4">{l.clinic}</td>
                  <td className="p-4">{l.timestamp}</td>
                  <td className="p-4"><span className={`badge ${badgeColor(l.status)}`}>{l.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>
    </main>
  )
}

