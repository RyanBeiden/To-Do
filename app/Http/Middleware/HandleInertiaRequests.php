<?php

namespace App\Http\Middleware;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'role' => fn() => $request->user()?->role,
                'permissions' => fn() => [
                    'task' => [
                        // I was unable to add the Update/Delete policies since they expect
                        // a specific task model, which I don't have since I render all
                        // user tasks vs. having a route return one task at a time.
                        'can_edit' => $request->user()->can('create', Task::class),
                    ],
                ],
            ],
        ];
    }
}
