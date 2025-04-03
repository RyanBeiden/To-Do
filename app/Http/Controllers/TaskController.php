<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Store a task for the user.
     *
     * @param Request $request
     * 
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $task = $request->validate([
            'description' => ['required'],
        ]);

        $request->user()->tasks()->create($task);

        return to_route('dashboard');
    }
}
