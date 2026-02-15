export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="flex items-center justify-between border-b px-8 py-4">
        <h1 className="text-xl font-bold text-blue-600">Ledgerly</h1>

        <div className="space-x-4">
          <a href="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </a>
          <a
            href="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="text-4xl leading-tight font-bold md:text-5xl">
          Manage Your Finance <br />
          Smart & Simple
        </h2>

        <p className="mt-6 max-w-xl text-gray-600">
          Track income, expenses, invoices, and transactions in one powerful
          dashboard built for speed and clarity.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/register"
            className="rounded-lg bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700"
          >
            Start Free
          </a>

          <a
            href="/login"
            className="rounded-lg border px-6 py-3 text-lg hover:bg-gray-50"
          >
            Login
          </a>
        </div>
      </section>

      <section className="bg-gray-50 px-8 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <Feature
            title="Track Transactions"
            desc="Record income and expenses with full history and filtering."
          />
          <Feature
            title="Manage Cards"
            desc="Monitor balances and link spending sources easily."
          />
          <Feature
            title="Invoices & Reports"
            desc="Generate financial reports and invoice summaries."
          />
        </div>
      </section>

      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ledgerly. All rights reserved.
      </footer>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
