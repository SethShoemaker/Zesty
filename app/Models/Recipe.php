<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'user_id',
        'servings',
        'image',
        'ingredients',
        'instructions',
        'created_by_user_id',
        'updated_by_user_id',
    ];

    /**
     * Post belongs to user.
     *
     * 
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
