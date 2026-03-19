export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-bold mb-6">
        City of Sandy Oaks
      </h1>

      <p className="text-lg mb-8">
        Welcome to the official municipal platform. Access services,
        permits, meetings, and community updates.
      </p>

      <div className="grid gap-4">
        <a
          href="#"
          className="p-4 border rounded-xl hover:bg-gray-100"
        >
          📄 Apply for a Permit
        </a>

        <a
          href="#"
          className="p-4 border rounded-xl hover:bg-gray-100"
        >
          🏛 View Agendas & Meetings
        </a>

        <a
          href="#"
          className="p-4 border rounded-xl hover:bg-gray-100"
        >
          🏗 Community Development
        </a>
      </div>
    </main>
  );
}