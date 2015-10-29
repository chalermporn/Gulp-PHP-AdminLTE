<html>
<head>
<title>Start on Laravel</title>
<link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
<link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet" type="text/css" />
<style>
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		color: #B0BEC5;
		display: table;
		font-weight: 100;
		font-family: 'Lato';
	}

	.container {
		text-align: center;
		display: table-cell;
		vertical-align: middle;
	}

	.content {
		text-align: center;
		display: inline-block;
	}

	.title {
		font-size: 96px;
	}

	.subtitle {
		font-size: 48px;
		margin-bottom: 40px;
	}

	.quote {
		font-size: 24px;
		margin: 0 0 40px 0;
	}
</style>
</head>
<body>

<div class="container">
	<div class="content">
		<div class="title">Start on the Laravel</div>
		<div class="subtitle">by Laravel 5.1.11</div>
		<div class="quote">{{ Inspiring::quote() }}</div>
		<button class="btn btn-primary" style="width:200px" onclick="location.href = '/home'">{{ _('START') }}</button>
	</div>
</div>

</body>
</html>
