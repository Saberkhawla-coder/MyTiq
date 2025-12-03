import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardTickets() {
  const tickets = [
    { id: 1, event: "Conférence IA", price: "150 DH" },
    { id: 2, event: "Hackathon Dev", price: "120 DH" },
    { id: 3, event: "Workshop Laravel", price: "200 DH" },
  ];

  return (
    <div className="p-6 space-y-6">

      <h2 className="text-2xl font-bold">Liste des billets</h2>

      <Card>
        <CardHeader>
          <CardTitle>Billets</CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Événement</th>
                <th className="p-3">Prix</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-t">
                  <td className="p-3">{ticket.id}</td>
                  <td className="p-3">{ticket.event}</td>
                  <td className="p-3">{ticket.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

    </div>
  );
}
