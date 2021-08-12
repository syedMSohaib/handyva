<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;

class AccessController extends Controller
{
    /**
     * roles
     *
     * @param  mixed $request
     * @return void
     */
    public function roles(Request $request){
        return Role::with('permissions')->get();
    }

    /**
     * saveRoles
     *
     * @param  mixed $request
     * @return void
     */
    public function saveRoles(Request $request){
        $request->validate([
            'name' => 'required',
        ]);

        if($request->id) $role = Role::find($request->id);

        else $role = new Role();

        $role->fill($request->all());

        $role->save();

        $this->responseSuccess("Role is saved successfully");
    }

    /**
     * getPermissions
     *
     * @param  mixed $role_id
     * @return void
     */
    public function getPermissions($role_id){
        return Permission::whereRoleId($role_id)->get();
    }


    public function setPermissions(Request $request, $role_id){
        Permission::whereRoleId($role_id)->delete();

        foreach($request->p as $index => $p){
            Permission::create([
                'role_id' => $role_id,
                'permission_id' => $index,
                'status' => $p == 1 ? 1 : 0
            ]);
        }

        return $this->responseSuccess("Permissions are saved successfully");
    }
}
