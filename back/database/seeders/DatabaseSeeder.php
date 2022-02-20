<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create( [
            'name' => 'Павел менеджер',
            'email' => 'pavlikberezhnoy@mail.ru',
            'email_verified_at' => null,
            'password' => Hash::make('P725345wP')
        ]);
    }
}
