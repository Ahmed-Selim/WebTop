<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['cors'], 'prefix' => 'users'], function () {
    Route::get('','UserController@index');
    Route::get('{user}','UserController@show');
    Route::get('{user}/memos','UserController@memos');
    Route::post('','UserController@store');
    Route::patch('{user}','UserController@update');
    Route::delete('{user}','UserController@destroy');
});

Route::group(['middleware' => ['cors'], 'prefix' => 'memos'], function () {
    Route::get('','MemoController@index');
    Route::get('{memo}','MemoController@show');
    Route::post('','MemoController@store');
    Route::patch('{memo}','MemoController@update');
    Route::delete('{memo}','MemoController@destroy');
});

Route::group(['middleware' => ['cors'], 'prefix' => 'quotes'], function () {
    Route::get('','QuoteController@index');
    Route::get('{quote}','QuoteController@show');
    Route::get('{quote}/tags','QuoteController@tags');
    Route::post('','QuoteController@store');
    Route::patch('{quote}','QuoteController@update');
    Route::delete('{quote}','QuoteController@destroy');
});

Route::group(['middleware' => ['cors'], 'prefix' => 'quote_user'], function () {
    Route::get('{user}/like','QuoteUserPivotController@likeQuotes');
    Route::get('{user}/fav','QuoteUserPivotController@favQuotes');
    Route::get('{user}/author={author}','QuoteUserPivotController@searchByAuthor');
    Route::get('{user}/tag={tag}','QuoteUserPivotController@searchByTag');
    Route::get('{user}/body={body}','QuoteUserPivotController@searchByBody');
    Route::get('{quote}/like','QuoteUserPivotController@usersLike');
    Route::get('{quote}/fav','QuoteUserPivotController@usersFav');
    Route::post('{user}/{quote}/like','QuoteUserPivotController@like');
    Route::post('{user}/{quote}/fav','QuoteUserPivotController@fav');
    Route::delete('{user}/{quote}/like','QuoteUserPivotController@disLike');
    Route::delete('{user}/{quote}/fav','QuoteUserPivotController@disFav');
});

Route::group(['middleware' => ['cors'], 'prefix' => 'loc'], function () {
    Route::get('country','LocationController@listAvailableCountries');
    Route::get('city','LocationController@listAvailableCities');
    Route::get('state','LocationController@listAvailableStates');
    Route::get('country/{id}','LocationController@getCountryStates');
    Route::get('state/{id}','LocationController@getStateCities');
});