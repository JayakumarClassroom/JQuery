<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
    </script>
    <script>
        $(document).ready(function() {
            $(".heading").add("#para1").add("#span1").css("background-color", "lightgreen");
            $("#span1").css("background-color", "lightblue");
        });
    </script>
</head>

<body>
    <p style="color:green" class="heading">New Paragraph-1 with class!!!</p>
    <p style="color:green" id="para1">New Paragraph-2 with Id !!!</p> <span style="color:blue" id="span1">Article 1
        !!!.</span>
    <div>This example adds the different css style for both "p" and "span" elements, using its class and id name!!!
    </div>
</body>

</html>