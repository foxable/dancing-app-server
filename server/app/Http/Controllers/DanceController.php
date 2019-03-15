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
        return DB::table('dances')->get();
    }

    public function figures($dance)
    {
        return DB::table('figures')
            ->join('dances', 'figures.dance', '=', 'dances.id')
            ->where('dances.abbr', $dance)
            ->select('figures.*')
            ->get();
    }
}
