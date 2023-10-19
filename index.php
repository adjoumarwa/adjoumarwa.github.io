<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my first php page</title>
    
</head>
<body>

<h1 align="center"> Exemple menu.php</h1>

<?php
$menu[0]["title"]="home";
$menu[0]["url"]="index.php";
$menu[1]["title"]="Links";
$menu[1]["url"]="links.php";
$menu[2]["title"]="Contact";
$menu[2]["url"]="contact.php";
$menu[3]["title"]="News";
$menu[3]["url"]="news.php";
for ($i=0;$i<4;$i++){
    echo "<a href=\"".$menu[$i]["url"]."\">".$menu[$i]["title"]."</a><br/>";
}

?>



</body>
</html>