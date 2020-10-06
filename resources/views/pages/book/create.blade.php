@extends('layouts.app')

@section('content')
    <h3>create new book</h3>

    {!! Form::open(['action' => 'App\Http\Controllers\BooksController@store', 'method' => 'POST']) !!}
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="form-group">
                    {{Form::label('name', "Name")}}
                    {{Form::text('name', '', ['id' => "title",'class' => 'form-control', 'placeholder' => 'Good Book'])}}
                </div>
                <div class="form-group">
                    {{Form::label('isbn', "ISBN")}}
                    <div class="row">
                        <div class="col-9">
                            {{Form::text('isbn', '', ['id' => 'ISBN','class' => 'form-control', 'placeholder' => '964-2793-03-2'])}}

                        </div>
                        <div class="col-3">
                            <button id="IsbnButton" type="button" class="btn btn-primary w-100 h-100 " onclick="fillByISBN()">Check ISBN</button>
                        </div>
                </div>
                </div>
                <div class="form-group">
                        {{Form::label('image', "Image")}}
                        {{Form::text('image', '', ['id' => 'image','class' => 'form-control', 'placeholder' => 'http://example.com/book.jpg'])}}
                    <div class="col-12">
                        <br>
                        <img id="picture">
                    </div>
                </div>
                <br>
                <div class="col-4 offset-4">
                    {{Form::submit("Submit", ['class' => 'btn btn-primary w-100'])}}
                </div>
            </div>    
        </div>    
    {!! Form::close() !!}

<script>
// show image if input has any value
const image = document.getElementById("image").value;
document.getElementById("picture").src = image;

const loadingHandle = (loading) => {
    if (loading) {
        document.getElementById("IsbnButton").innerHTML =
            '<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div>';
    } else {
        document.getElementById("IsbnButton").innerHTML = "Check ISBN";
    }
};

const fillByISBN = () => {
    loadingHandle(true);
    const isbn = document.getElementById("ISBN").value;
    fetch(`/api/isbn/${isbn}`)
        .then((res) => res.json())
        .then((book) => {
            loadingHandle(false);

            // fill title
            document.getElementById("title").value = book.data.title;
            // fill picture
            document.getElementById("picture").src = book.data.picture;
            document.getElementById("image").value = book.data.picture;
        });
    console.log(isbn);
};

</script>
@endsection