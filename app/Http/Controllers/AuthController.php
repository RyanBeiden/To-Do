<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    /**
     * @return
     */
    public function show()
    {
        return Inertia::render(
            'welcome',
            [
                'user' => ['name' => 'Ryan'],
            ]
        );
    }
}
