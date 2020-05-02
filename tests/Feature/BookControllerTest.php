<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BookControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testSetData()
    {
        $response = $this->postJson('/api/books/', ["isbn" => "964-5600-97-4"]);

        $response->assertStatus(200);
    }
}
