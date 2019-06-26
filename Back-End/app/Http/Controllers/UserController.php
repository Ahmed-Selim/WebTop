<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon ;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all() ;
        return $this->toArray($users);
    }

    public function store(UserRequest $request)
    {
        return User::create(
            array_merge( 
                $request->all(), 
                $this->imageUpload($request['profile_picture'], $request['gender']) 
            )
        );
    }

    public function show(User $user)
    {
        return $user ;
    }

    public function update(UserRequest $request, User $user)
    {
        $user->update(
            array_merge( 
                $request->all(), 
                $this->imageUpload($request['profile_picture'], $request['gender']) 
            )
        );
        return $user ;
    }

    public function destroy(User $user)
    {
        $user->delete() ;
        return "200" ;
    }

    public function memos(User $user) {
        return $user->memos ;
    }

    private function toArray ($user) {
        return UserResource::collection($user);
    }

    private function storeImage ($image) {
        $imagePath = $image->store('uploads', 'public') ;
        return '/storage/' . $imagePath ;
    }

    private function imageUpload ($image, $gender) : array {
        $path = ($image != null) ? $this->storeImage($image) : '/img/'.$gender.'.png' ;
        return ['profile_picture' => $path ] ;
    }
}
