<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * @return string
     */
    public function name(): string
    {
        return $this->name;
    }
}
