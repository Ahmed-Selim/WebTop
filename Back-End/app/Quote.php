<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    protected $guarded = [] ;

    protected $attributes = [
        'favorites_count' => 0,
        'upvotes_count' => 0,
        'downvotes_count' => 0
    ] ;

    public function tags()
    {
        return $this->belongsToMany('App\QuoteTag', 'quote_tag', 'quote_id', 'tag_id');
    }

    // public function users()
    // {
    //     return $this->belongsToMany('App\User', 'quote_user')->withPivot('type');
    // }

    public function usersFav()
    {
        return $this->belongsToMany('App\User', 'quote_user')->wherePivot('type', '=', 'fav');
    }
    
    public function usersLike()
    {
        return $this->belongsToMany('App\User', 'quote_user')->wherePivot('type', '=', 'like');
    }
}
