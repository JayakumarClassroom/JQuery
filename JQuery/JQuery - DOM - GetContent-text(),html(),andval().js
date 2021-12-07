<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $("#btn1").click(function() {
                alert("Text: " + $("#test").text());
            });
            $("#btn2").click(function() {
                alert("HTML: " + $("#test").html());
            });
            $("#btn3").click(function() {
                alert("Value: " + $("#t1").val());
            });
        });
    </script>
</head>

<body>
    <p id="test">This is some <b>bold</b> text in a paragraph.</p>
    <button id="btn1">Show Text</button>
    <button id="btn2">Show HTML</button>
    <p>Name: <input type="text" id="t1" value="Jayakumar Sadhasivam"></p>
    <button id="btn3">Show Value</button>
</body>

</html>