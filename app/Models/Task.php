<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $fillable = ['description', 'complete'];

    /**
     * @return int
     */
    public function userId(): int
    {
        return $this->user_id;
    }
}
