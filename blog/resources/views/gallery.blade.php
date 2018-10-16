@extends('template')

@section('title','Gallery')

@section('navbar')
	@include('partials.navbar')
@endsection

@section('content')
		<main id="main_gallery">
		<h1>Gallery</h1>
		<div class="gallery">
			<div>
		<figure>
			<img src="img/sea.jpg" alt="A Nature">
			<figcaption>A Nature</figcaption>
		</figure>
			</div>
			<div>
		<figure>
			<img src="img/beach.jpg" alt="A Flower">
			<figcaption>A beach</figcaption>
		</figure>
			</div>
			<div>
		<figure>
			<img src="img/mountain.jpg" alt="A Autumn">
			<figcaption>A Mountain</figcaption>
		</figure>
			</div>
			<div>
		<figure>
			<img src="img/land.jpeg" alt="A sunset">
			<figcaption>A Land</figcaption>
		</figure>
		</div>
		</div>
	</main>
@endsection


@section('footer')
	@include('partials.footer')
@endsection	