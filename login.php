<!DOCTYPE html>
<?php session_start();?>
<html>
	<head>
		<title>Login Page</title>
		<style type="text/css">
		#login-box{
			width: 100px;
			margin: 7em auto;
			border: 1px solid black;
			border-radius: 5px;
			padding: 10px;
		}
		#login-box>input{
			display: block;
			width: 80%;
			margin:0 auto;
			margin-bottom: 50px;


		}
		#login-box>span{
			display: block;
			text-align: center;
			margin-bottom: 10px;

		}
		</style>
	</head>
	<body>
		<?php
			if($_POST){
				$username=$_POST['username'];
				$pass=$_POST['pass'];
				if($username=="salman"&&$pass=="1234")
				{
					echo '<span>Login Successful!
							you will be resirected
							 to blog page';
					$_SESSION['user']=$username;
					$_SESSION['college']="AIKTC";
					$_SESSION['class']="T.E";
					$_SESSION['batch']="B1";
					header("Refresh: 3,url=blog.php");
				}
				else{
					echo '<span>Incorrect username or 
							password';
					}
				}
			?>
			<form method="post" action="logon.php">
				<div id="login-box">
					<span>Log in<span>
					<input type="text" name="username" id="username"
							placehorder="username" required="required"/>
					<input type="password" name="pass" id="pass"
							placehorder="password" required="required"/>
					<input type="submit" value="Log In">
				</div>
			</form>
		</body>
</html>
			