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
        $opac = new OpacNlai();
        $opac_detail = $opac->get_book_detail($_isbn);
        $status_code = empty($ketabir->book_picture) ? false : true;
        return ["ok" => $status_code, "ketabir" => (array) $ketabir, "opac" => $opac_detail];
    }
}
