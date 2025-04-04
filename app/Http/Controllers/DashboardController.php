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
        // This could eventually cause long loadtimes when the task count gets high.
        // I would consider implementing something like WhenVisible so only the data
        // visible on the viewport loads.
        return Inertia::render('dashboard', [
            'tasks' => fn() => $request->user()?->tasks,
        ]);
    }
}
