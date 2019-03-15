<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class DanceController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        return DB::table('dances')
            ->orderBy('sort', 'asc')
            ->get();
    }

    public function figures($dance)
    {
        return DB::table('figures')
            ->select('figures.*')
            ->join('dances', 'figures.dance_id', '=', 'dances.id')
            ->where('dances.abbr', $dance)
            ->orderBy('level', 'asc')
            ->get();
    }
}
