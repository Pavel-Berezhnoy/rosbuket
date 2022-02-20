<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Settings;

class SettingsController extends Controller
{
    public function index()
    {
        return Settings::all();
    }

    public function create(Request $request)
    {
        $fields = $request->all();
        $setting = new Settings($fields);
        $setting->save();
        return Settings::all();
    }

    public function update(Request $request)
    {
        if ($request['type'] === "logo") {
            if ($request->file('logo')) {
                $logo = Settings::where('id', $request['id'])->first();
                $logo->value = $logo->saveImage($request->file('logo'));
                $logo->save();
                return Settings::all();
            }
        } else {
            Settings::where('id', $request['id'])->update($request->all());
            return Settings::all();
        }
    }

    public function delete(Request $request)
    {
        Settings::destroy($request['id']);
        return Settings::all();
    }
}
