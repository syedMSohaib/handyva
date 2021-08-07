<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\SocialLife;
use App\Models\Travel;
use Illuminate\Http\Request;

class ProfileController extends Controller
{


    /**
     * getSocialLife
     *
     * @param  mixed $request
     * @return void
     */
    public function getSocialLife(Request $request) {
        return [
            'platform' => array_unique(SocialLife::$platform_list),
            'records' => SocialLife::whereClientId($request->user()->id)->latest()->get()
        ];
    }

    /**
     * saveSocialLife
     *
     * @param  mixed $request
     * @return void
     */
    public function saveSocialLife(Request $request){

        $request->validate([
            'platform_name' => "required",
            "username" => "required",
            "profile_link" => "required"
        ]);

        if($request->id) $social_life = SocialLife::find($request->id);

        else $social_life = new SocialLife();

        $data = $request->all();
        $data['client_id'] = $request->user()->id;

        ($social_life->fill($data))->save();

        return $this->responseSuccess("record is saved successfully");

    }

    /**
     * deleteSocialLife
     *
     * @param  mixed $id
     * @return void
     */
    public function deleteSocialLife($id){
        (SocialLife::find($id))->delete();
    }


    public function getContacts(Request $request) {
        return Contact::whereClientId($request->user()->id)->latest()->get();
    }

    public function saveContacts(Request $request){

        $request->validate([
            'address' => "required",
            "email" => "required|email",
            "name" => "required",
            "note" => "required",
            "contact_no" => "required",
        ]);

        if($request->id) $contact = Contact::find($request->id);

        else $contact = new Contact();

        $data = $request->all();
        $data['client_id'] = $request->user()->id;

        ($contact->fill($data))->save();

        return $this->responseSuccess("contact is saved successfully");

    }

    public function deleteContacts($id){
        (Contact::find($id))->delete();
    }
    public function getTravels(Request $request) {
        return Travel::whereClientId($request->user()->id)->latest()->get();
    }

    public function saveTravels(Request $request){

        $request->validate([
            'airline' => "required",
            "hotel" => "required",
            "name" => "required",
            "note" => "required",
            "number" => "required",
            "expiry_date" => "required",
        ]);

        if($request->id) $travel = Travel::find($request->id);

        else $travel = new Travel();

        $data = $request->all();
        $data['client_id'] = $request->user()->id;

        ($travel->fill($data))->save();

        return $this->responseSuccess("travel is saved successfully");
    }

    public function deleteTravels($id){
        (Travel::find($id))->delete();
    }
    /**
     * updateProfile
     *
     * @param  mixed $request
     * @return void
     */
    public function updateProfile(Request $request){

        $user = $request->user();

        $user->fill(collect($request->except('image', 'cover', 'email'))->toArray());

        $user->save();

        return $this->responseSuccess("Profile is updated successfully");

    }


    /**
     * updateCover
     *
     * @param  mixed $request
     * @return void
     */
    public function updateCover(Request $request){
        $user = $request->user();
        $path = $request->file('cover')->store('public/profile_covers');
        $path = str_replace('public/','',$path);
        $user->cover = $path;
        $user->save();

        return $this->responseSuccess("Profile cover is updated successfully");
    }

    /**
     * updateProfilePic
     *
     * @param  mixed $request
     * @return void
     */
    public function updateProfilePic(Request $request){
        $user = $request->user();
        $path = $request->file('image')->store('public/profile_pictures');
        $path = str_replace('public/','',$path);
        $user->image = $path;
        $user->save();

        return $this->responseSuccess("Profile photo is updated successfully");
    }

}
