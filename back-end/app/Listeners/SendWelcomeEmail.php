<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail implements ShouldQueue
{
        use InteractsWithQueue;

    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
   public function handle(UserRegistered $event)
    {
        $user = $event->user;

        Mail::html("<h1>Bienvenue {$user->name} sur MyTiq ! 🎉</h1>
                    <p>Merci pour votre inscription. Nous sommes ravis de vous compter parmi nos utilisateurs !</p>", 
                    function ($message) use ($user) {
            $message->to($user->email)
                    ->subject('Bienvenue sur MyTiq');
        });
    }
}
