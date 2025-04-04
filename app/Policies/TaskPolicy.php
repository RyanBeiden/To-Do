<?php

namespace App\Policies;

use App\Models\Role;
use App\Models\Task;
use App\Models\User;

class TaskPolicy
{
    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasRole(Role::EDITOR);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Task $task): bool
    {
        return $user->id() === $task->userId()
            && $user->hasRole(Role::EDITOR);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Task $task): bool
    {
        return $user->id() === $task->userId()
            && $user->hasRole(Role::EDITOR);
    }
}
