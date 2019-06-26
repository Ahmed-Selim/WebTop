<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Location\CityResource;
use App\Http\Resources\Location\CountryResource;
use App\Http\Resources\Location\StateResource;

class LocationController extends Controller
{
    public function listAvailableCountries() {
        $country = DB::table('countries')->get();
        // return CountryResource::collection($country) ;
		return $country ;
    }
    
    public function listAvailableCities() {
        $city = DB::table('cities')->get();
        // return CityResource::collection($city) ;
		return $city ;
    }
    
    public function listAvailableStates() {
        $state = DB::table('states')->get();
        // return StateResource::collection($state) ;
		return $state ;
    }
    
    public function getCountryStates($id) {
        $state = DB::table('states')->where('country_id', '=', $id)->get();
        // return StateResource::collection($state) ;
		return $state ;
    }
 
    public function getStateCities($id) {
        $city = DB::table('cities')->where('state_id', '=', $id)->get();
        // return CityResource::collection($city) ;
		return $city ;
    }
}
