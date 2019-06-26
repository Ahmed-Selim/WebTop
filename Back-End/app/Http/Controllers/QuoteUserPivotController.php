<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quote;
use App\User;

class QuoteUserPivotController extends Controller
{

    public function like (User $user, Quote $quote) {
        $quote->usersLike()->attach($user->id, ['type' => 'like']) ;
        $quote->upvotes_count += 1 ;
        $quote->push() ;
    }
    public function fav (User $user, Quote $quote) {
        $quote->usersFav()->attach($user->id, ['type' => 'fav']) ;
        $quote->favorites_count += 1 ;
        $quote->push() ;
    }
    
    public function disLike (User $user, Quote $quote) {
        $quote->usersLike()->dettach($user->id, ['type' => 'like']) ;
        $quote->upvotes_count -= 1 ;
        $quote->push() ;
    }
    public function disFav (User $user, Quote $quote) {
        $quote->usersFav()->dettach($user->id, ['type' => 'fav']) ;
        $quote->favorites_count -= 1 ;
        $quote->push() ;
    }

    public function searchByAuthor (User $user, string $authorName) {
        $like = $user->likeQuotes()->where('author', 'like', '%'.$authorName.'%') ->get() ;
        $fav = $user->favQuotes()->where('author', 'like', '%'.$authorName.'%') ->get() ;
        $all = Quote::where('author', 'like', '%'.$authorName.'%') ->get() ;

        return $like->merge($fav)->merge($all) ;
    }

    public function searchByTag (User $user, string $tag) {
        $likeId = $user->likeQuotes()->with('tags')->where('tag', 'like', '%'.$tag.'%')
            ->get()->pluck('id')->toArray() ;
        $favId = $user->favQuotes()->with('tags')->where('tag', 'like', '%'.$tag.'%')
            ->get()->pluck('id')->toArray() ;
        $allId = \App\QuoteTag::where('tag', 'like', '%'.$tag.'%')
            ->get()->pluck('id')->toArray() ;

        return 
        \App\QuoteTag::whereIn('id', 
        array_merge($favId, $likeId, $allId)
        )->get() ;
    }

    public function searchByBody (User $user, string $body) {
        $like = $user->likeQuotes()->where('body', 'like', '%'.$body.'%') ->get() ;
        $fav = $user->favQuotes()->where('body', 'like', '%'.$body.'%') ->get() ;
        $all = Quote::where('body', 'like', '%'.$body.'%') ->get() ;

        return $like->merge($fav)->merge($all) ;
    }


    public function usersFav(Quote $quote) {
        return $quote->usersFav ;
    }

    public function usersLike(Quote $quote) { 
        return $quote->usersLike ;
    }


    public function likeQuotes(User $user) { 
        return $user->likeQuotes ;
    }

    public function favQuotes(User $user) {
        return $user->favQuotes ;
    }
}
