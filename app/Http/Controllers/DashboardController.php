<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Show the user's dashboard.
     *
     * @return Response
     */
    public function show(): Response
    {
        return Inertia::render('dashboard');
    }
}
