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
            ->selectRaw('CAST(id as CHAR) as id, name')
            ->orderBy('id', 'asc')
            ->get();
    }

    public function dances($typeId)
    {
        return DB::table('dances')
            ->selectRaw('CAST(id as CHAR) AS id, CAST(type_id AS CHAR) as type_id, name')
            ->where('type_id', $typeId)
            ->orderBy('name', 'asc')
            ->get();
    }

    public function figures($danceId)
    {
        return DB::table('figures')
            ->selectRaw('CAST(id AS CHAR) AS id, name, description, level, video_url')
            ->where('dance_id', $danceId)
            ->orderBy('id', 'asc')
            ->get();
    }
}
