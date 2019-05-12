<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class DanceController extends Controller
{
    public function __construct()
    {
    }

    public function danceTypes()
    {
        return DB::table('dance_types')
            ->orderBy('id', 'asc')
            ->get();
    }

    public function dances($typeId)
    {
        return DB::table('dances')
            ->where('type_id', $typeId)
            ->orderBy('name', 'asc')
            ->get();
    }

    public function figures($danceId)
    {
        return DB::table('figures')
            ->select('id', 'name', 'description', 'level', 'video_url')
            ->where('dance_id', $danceId)
            ->orderBy('id', 'asc')
            ->get();
    }
}
