@extends('template')

@section('title','Reach me')

@section('navbar')
	@include('partials.navbar')
@endsection

@section('content')
		<main>
		<div class="contact-form" id="con">
			<h3>Contact Me</h3>
			<form action="" method="post">
				<label>
					<div>
						Email
					</div>
					<input id= 'user-email' type="email" name="user-email" value="" placeholder="username@example.com">
				</label>
				<label>
					<div>
						Subject
					</div>
					<input id='subject' type="text" name="subject" value="" placeholder="A short description about the matter">
				</label>
				<label>
					<div>
						Message
					</div>
					<textarea id='message' name="message"></textarea>
				</label>
				<div>
					<input id='submit-btn'type="submit" name="submit" value="Submit">		
				</div>
				
			</form>	
		</div>
		
		<div class="social-media">
			<h3>Get Connected</h3>
			<a href="https://facebook.com"><i class="fab fa-facebook fa-2x"></i> Facebook</a>
			<a href="https://linkedin.com"><i class="fab fa-linkedin fa-2x"></i> Linkedin</a>
			<a href="https://twitter.com"><i class="fab fa-twitter fa-2x"></i> Twitter</a>
			<a href="https://stackoverflow.com"><i class="fab fa-stack-overflow fa-2x"></i> StackoverFlow</a>
			<a href="https://github.com"><i class="fab fa-github fa-2x"></i> github.com</a>
		</div>
	</main>
	
@endsection


@section('footer')
	@include('partials.footer')
@endsection	