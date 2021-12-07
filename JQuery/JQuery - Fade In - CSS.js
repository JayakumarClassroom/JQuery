<!DOCTYPE html>
<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $("button").click(function() {
                $("#div1").fadeIn();
                $("#div2").fadeIn("slow");
                $("#div3").fadeIn(5000);
            });
        });
    </script>
</head>

<body>

    <p>Demonstrate fadeIn() with different parameters.</p>

    <button>Click to fade in boxes</button><br><br>

    <div id="div1" style="width:100px;height:100px;display:none;background-color:red;"></div><br>
    <div id="div2" style="width:100px;height:100px;display:none;background-color:green;"></div><br>
    <div id="div3" style="width:100px;height:100px;display:none;background-color:blue;"></div>

</body>

</html>