<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $("#p1").mouseenter(function() {
                alert("You entered p1!");
            });
        });
    </script>
</head>

<body>
    <p id="p1">Enter this paragraph.</p>
</body>

</html>