<?php

namespace App\Http\Controllers;

use App\Quote;
use Illuminate\Http\Request;
use App\Http\Requests\QuoteRequest;

class QuoteController extends Controller
{
    public function index()
    {
        return Quote::all();
    }

    public function store(QuoteRequest $request)
    {
        return Quote::create($request->all());
    }

    public function show(Quote $quote)
    {
        return $quote ;
    }

    public function update(QuoteRequest $request, Quote $quote)
    {
        $quote->update($request->all()) ;
        return $quote ;
    }

    public function destroy(Quote $quote)
    {
        $quote->delete() ;
        return "200" ;
    }

    public function tags(Quote $quote) {
        return $quote->tags ;
    }

    public function users(Quote $quote) {
        return $quote->users ;
    }
}
