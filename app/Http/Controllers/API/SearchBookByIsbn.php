<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use BookByISBN\Ketabir;
use BookByISBN\OpacNlai;
use Illuminate\Http\Request;

class SearchBookByIsbn extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($_ISBN)
    {
        $ketabir = new Ketabir($_ISBN);
        $book_picture = $ketabir->book_picture;
        $book_detail = $ketabir->book_detail;
        // $opac_nlai = new OpacNlai();
        // $book_detail = $opac_nlai->get_book_detail($_ISBN);
        return [
            "ok" => true,
            "picture" => $book_picture,
            "detail" => $book_detail
        ];
    }
}
