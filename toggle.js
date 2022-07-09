<!DOCTYPE html>
<html>
<head>
<title>Toggle Button</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div class="content">
    <p><button type="button" class="btn" onclick="myFunction()">CLICK</button></p>
    <p id="txt">
        HELLO
    </p>
</div>
<script>
function myFunction() {
    var x = document.getElementById("txt");
    if (x.innerHTML === "HELLO") {
        x.innerHTML = "BYE";
    } else {
        x.innerHTML = "HELLO";
    }
}
</script>
</body>
</html>
