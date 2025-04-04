<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    private const EDITOR = 1;
    private const READ_ONLY = 2;

    /**
     * @return string
     */
    public function name(): string
    {
        return $this->name;
    }

    /**
     * @return bool
     */
    public function isEditor(): bool
    {
        return $this->id === static::EDITOR;
    }

    /**
     * @return bool
     */
    public function isReadOnly(): bool
    {
        return $this->id === static::READ_ONLY;
    }
}
