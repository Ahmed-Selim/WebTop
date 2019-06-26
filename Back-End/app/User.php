<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $guarded = [];
    // protected $hidden = ['password'];
    protected $attributes = ['auth' => 'user'];

    // public function quotes () {
    //     return $this->belongsToMany('App\Quote', 'quote_user');
    // }

    public function favQuotes()
    {
        return $this->belongsToMany('App\Quote', 'quote_user')->wherePivot('type', '=', 'fav');
    }
    
    public function likeQuotes()
    {
        return $this->belongsToMany('App\Quote', 'quote_user')->wherePivot('type', '=', 'like');
    }

    public function memos()
    {
        return $this->hasMany('App\Memo');
    }

}
