<?php

namespace Database\Seeders;

use App\Models\Recipe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class RecipeSeederThree extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(20)->create();

        $json = Storage::disk('local')->get('/recipe-seeds/recipes.3.json');
        $recipes = json_decode($json);

        foreach ($recipes as $recipe) {
            Recipe::create(array(
                'title' => $recipe->title,
                'user_id' => rand(41, 60),
                'ingredients' => json_encode($recipe->ingredients),
                'instructions' => $recipe->instructions ?? null,
            ));
        }
    }
}
