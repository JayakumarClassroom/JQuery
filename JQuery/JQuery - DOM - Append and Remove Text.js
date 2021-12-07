<!DOCTYPE html>
<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        function appendText() {
            var txt1 = "<p>Text1.</p>"; // Create text with HTML
            var txt2 = $("<p></p>").text("Text2."); // Create text with jQuery 
            txt2.attr({
                class: "p1"
            });
            var txt3 = document.createElement("p");
            txt3.innerHTML = "Text3."; // Create text with DOM
            $("body").append(txt1, txt2, txt3); // Append new elements 
        }

        function removeText() {
            $("p").remove(".p1"); // remove p elements with class name p1 
        }
    </script>
</head>

<body>
    <p>This is a paragraph.</p>
    <h4> Appendend Text </h4>
    <button onclick="appendText()">Append text</button>
    <button onclick="removeText()">Remove text</button>
</body>

</html>