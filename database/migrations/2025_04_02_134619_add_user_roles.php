<?php

use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * @var array
     */
    private array $roles = ['Editor', 'Read-Only'];

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        foreach ($this->roles as $roleName) {
            DB::table('roles')->insert(['name' => $roleName]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('roles')
            ->whereIn('name', $this->roles)
            ->delete();
    }
};
