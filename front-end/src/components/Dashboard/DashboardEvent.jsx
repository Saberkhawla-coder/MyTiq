import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardEvent() {
  const events = [
    { id: 1, name: "Conférence IA", date: "2025-01-20" },
    { id: 2, name: "Hackathon Dev", date: "2025-02-10" },
    { id: 3, name: "Workshop Laravel", date: "2025-03-05" },
  ];

  return (
    <div className="p-6 space-y-6">

      <h2 className="text-2xl font-bold">Liste des événements</h2>

      <Card>
        <CardHeader>
          <CardTitle>Événements</CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Nom</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-t">
                  <td className="p-3">{event.id}</td>
                  <td className="p-3">{event.name}</td>
                  <td className="p-3">{event.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

    </div>
  );
}
