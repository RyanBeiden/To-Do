<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Show the user's dashboard.
     *
     * @return Response
     */
    public function show(Request $request): Response
    {
        return Inertia::render('dashboard', [
            'tasks' => fn() => $request->user()?->tasks->select('id', 'description', 'complete'),
        ]);
    }
}
