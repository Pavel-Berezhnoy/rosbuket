<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class Cors
{
    protected $domains = [
        'http://localhost:3000',
        'http://rosbackend/'
    ];
 
    /**
     * Метод, который обрабатывает все запросы, приходящие на сервер.
     *
     * @param \Illuminate\Http\Request $request
     * @param Closure $next
     * @return Response
     */
    public function handle($request, Closure $next)
    {
        // проверим, присутствует ли заголовок HTTP_ORIGIN в запросе
        // и разрешен ли домен
        $origin = $request->headers->get('Origin');
        if(!in_array($origin, $this->domains, true)) {
            return new Response('Forbidden', 403);
        }
 
        //если есть, то устанавливаем нужные заголовки
        return $next($request)
            ->header('Access-Control-Allow-Origin', $origin)
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            ->header('Access-Control-Allow-Credentials', 'true')
            ->header(
                'Access-Control-Allow-Headers',
                'Authorization, Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type'
            );
    }
}
