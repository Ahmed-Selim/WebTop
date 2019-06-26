<?php

namespace App\Http\Controllers;

use App\Memo;
use Illuminate\Http\Request;
use App\Http\Requests\MemoRequest;

class MemoController extends Controller
{
    public function index()
    {
        return Memo::all() ;
    }

    public function show (Memo $memo) 
    {
        return $memo ;
    }

    public function store(MemoRequest $request)
    {
        return Memo::create($request->all());
    }

    public function update(MemoRequest $request, Memo $memo)
    {
        $memo->update($request->all());
        return $memo ;
    }

    public function destroy(Memo $memo)
    {
        $memo->delete() ;
        return "200" ;
    }
}
