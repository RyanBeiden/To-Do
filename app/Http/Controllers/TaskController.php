<?php

namespace App\Http\Controllers;

use App\Models\Task;
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

    /**
     * Update a task for the user.
     *
     * @param Request $request
     * 
     * @return RedirectResponse
     */
    public function update(Request $request, Task $task): RedirectResponse
    {
        $data = $request->validate([
            'description' => ['required'],
            'complete' => ['required', 'boolean'],
        ]);

        $task->update($data);

        return back();
    }
}
