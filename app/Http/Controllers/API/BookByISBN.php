<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use BookByISBN\Ketabir;
use BookByISBN\OpacNlai;

class BookByISBN extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($_isbn)
    {
        $ketabir = new Ketabir($_isbn);
        // $opac = new OpacNlai();
        // $opac_detail = $opac->get_book_detail($_isbn);

        if (empty($ketabir->book_picture)) {
            return $this->error("book picture undefined");
        }
        if (!isset($ketabir->book_detail["title"])) {
            return $this->error("book title undefined");
        }

        return [
            "ok" => true,
            "data" => [
                "title" => $ketabir->book_detail["title"],
                "picture" => $ketabir->book_picture,
            ],
        ];
    }

    public function error($_message)
    {
        return [
            "ok" => false,
            "message" => $_message,
        ];
    }
}
