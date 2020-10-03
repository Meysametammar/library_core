@extends('layouts.app')

@section('content')
<div class="container">
    <h3>Books</h3>
    @if(count($books) > 0)
        @foreach ($books as $book)
            <div class="well">
                <h3><a href="/book/{{$book->id}}">{{$book->name}}</a></h3>
                <small>Made on {{$book->created_at}}</small>
            </div>
        @endforeach
    @else
        <p>No Book found</p>
    @endif
</div>
@endsection
