<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuoteTag extends Model
{
    protected $guarded = [] ;

    public function quotes()
    {
        return $this->belongsToMany('App\Quote', 'quote_tag', 'tag_id', 'quote_id');
    }
}
