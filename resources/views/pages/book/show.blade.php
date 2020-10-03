@extends('layouts.app')

@section('content')
<div class="container">
    @if(!empty($book))
    <div class="well">
        <h3><a href="/book/{{$book->id}}">{{$book->name}}</a></h3>
        <small>Made on {{$book->created_at}}</small>
    </div>
    @else
    <p>No Book found</p>
    @endif
</div>
@endsection
