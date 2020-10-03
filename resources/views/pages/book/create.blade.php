@extends('layouts.app')

@section('content')
<div class="container">
    <h3>create new book</h3>

    {!! Form::open(['action' => 'App\Http\Controllers\BooksController@store', 'method' => 'POST']) !!}
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="form-group">
                    {{Form::label('name', "Name")}}
                    {{Form::text('name', '', ['class' => 'form-control', 'placeholder' => 'Good Book'])}}
                </div>
                <div class="form-group">
                    {{Form::label('isbn', "ISBN")}}
                    <div class="row">
                        <div class="col-9">
                            {{Form::text('isbn', '', ['id' => 'ISBN','class' => 'form-control', 'placeholder' => '964-2793-03-2'])}}

                        </div>
                        <div class="col-3">
                            <button type="button" class="btn btn-primary w-100 h-100" onclick="fillByISBN()">Check ISBN</button>
                        </div>
                </div>
                </div>
                <div class="form-group">
                    <div class="col-2">
                        {{Form::label('image', "Image")}}
                    </div>
                    <div class="col-6">
                        {{Form::file('image')}}
                    </div>
                    <div class="col-12">
                        <img>
                    </div>
                </div>
                <br>
                <div class="col-4 offset-4">
                    {{Form::submit("Submit", ['class' => 'btn btn-primary w-100'])}}
                </div>
            </div>    
        </div>    
    {!! Form::close() !!}
</div>
@endsection


<script>
    const fillByISBN = ()=>{
        const isbn = document.getElementById('ISBN').value;
        console.log(isbn);
    }
</script>