import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Statistic() {
  return (
    <div className="p-6 space-y-8">

      {/* Title */}
      <h1 className="text-white text-3xl font-bold">Tableau de bord administrateur</h1>

      {/* 3 Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Nombre d'événements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billets vendus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">340</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Newsletter abonnés</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">89</p>
          </CardContent>
        </Card>

      </div>

      {/* Navigation Tabs */}
      {/* <div className="flex gap-4">

        <Link
          to="/dashboard/events"
          className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"
        >
          Événements
        </Link>

        <Link
          to="/dashboard/tickets"
          className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"
        >
          Billets
        </Link>

        <Link
          to="/dashboard/newsletter"
          className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"
        >
          Newsletter
        </Link>

      </div> */}
    </div>
  );
}
