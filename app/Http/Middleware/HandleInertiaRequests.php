<?php

namespace App\Http\Middleware;

use App\Models\Role;
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
                'role' => fn() => [
                    'name' => $request->user()?->role->name(),
                    // I was unable to add the Update/Delete policies since they expect
                    // a specific task model, which I don't have since I render all
                    // user tasks vs. having a route return one task at a time.
                    // So I just went with a role check here.
                    'canEdit' => $request->user()?->hasRole(Role::EDITOR),
                ],
            ],
        ];
    }
}
