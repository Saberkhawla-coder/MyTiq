<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    public function buyTicket(Request $request)
{
    $request->validate([
        'event_id' => 'required|exists:events,id',
    ]);

    $event = Event::findOrFail($request->event_id);

    // Vérifier capacité
    $sold = Ticket::where('event_id', $event->id)->count();
    if ($sold >= $event->capacity) {
        return response()->json(['message' => 'Complet'], 400);
    }

    $ticket = Ticket::create([
        'user_id' => Auth::id(),
        'event_id' => $event->id,
    ]);

    return response()->json([
        'message' => 'Ticket acheté avec succès',
        'ticket' => $ticket
    ], 201);
}

}
