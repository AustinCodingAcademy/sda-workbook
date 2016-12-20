<?php 
$ua = $_SERVER['HTTP_USER_AGENT'];

{print"


<html>

<head>

<title>Browser detection with PHP</title>

</head>

<body>

<h1>
Hello, World!
</h1>

Your user agent is:
<strong>
{$ua}.
</strong>

</body>

</html>

";
}

?>
