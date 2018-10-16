@extends('template')

@section('title','Home Page')

@section('navbar')
	@include('partials.navbar')
@endsection

@section('content')
	<main>
		<div class="myphoto">
			<figure>
				<img src="img/mobile.jpg"/>
			</figure>
			<h1>
				Android
			</h1>	
		</div>

		
		<p class="about" id="about">
			I am in the learning state,I love to learn new thing and implement it were ever it is possible.
			Android is use in mobile development and I love to learn or create the app.
		</p>
		<div>
			<a href="resume.html">Know More About Me!</a>
		</div>
		<div>
			<a href="contact.html">Contact Me</a>
		</div>
		<div>
			<a href="blog.html">See my writings</a>
		</div>
		<div>
			<a href="gallery.html">Take a look of my world</a>
		</div>
	</main>
@endsection


@section('footer')
	@include('partials.footer')
@endsection	