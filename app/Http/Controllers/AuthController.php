<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    /**
     * @return Response
     */
    public function show(): Response
    {
        return Inertia::render('login');
    }
}
