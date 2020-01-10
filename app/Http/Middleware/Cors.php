<?php
namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $headers = [
            'Access-Control-Allow-Origin'      => env('CORS_ALLOW_ORIGIN', '*'),
            'Access-Control-Allow-Methods'     => env('CORS_ALLOW_METHODS', 'POST, GET, OPTIONS, PUT, DELETE'),
            'Access-Control-Allow-Credentials' => env('CORS_ALLOW_CREDENTIALS', 'true'),
            'Access-Control-Max-Age'           => env('CORS_MAX_AGE', '86400'),
            'Access-Control-Allow-Headers'     => env('CORS_ALLOW_HEADERS', 'Content-Type, Authorization, X-Requested-With')
        ];

        if ($request->isMethod('OPTIONS'))
        {
            return response()->json('{"method":"OPTIONS"}', 200, $headers);
        }

        $response = $next($request);
        foreach($headers as $key => $value)
        {
            $response->header($key, $value);
        }

        return $response;
    }
}