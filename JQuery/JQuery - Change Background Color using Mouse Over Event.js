<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $("p").on({
                mouseenter: function() {
                    $(this).css("background-color", "lightgray");
                },
                mouseleave: function() {
                    $(this).css("background-color", "lightblue");
                },
                click: function() {
                    $(this).css("background-color", "yellow", "font-size", "200%");
                }
            });
        });
    </script>
</head>

<body>
    <p>Click or move the mouse pointer over this paragraph.</p>
</body>

</html>