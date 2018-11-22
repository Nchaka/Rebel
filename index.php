<?php
	header("Access-Control-Allow-Origin: https://www.mocky.io/v2/5bd897fc310000c73a474f59");
	header("Access-Control-Allow-Origin: https://www.mocky.io/v2/5bd89817310000c63a474f5b");
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>        
        <title>Rebel Node.js Form</title>
        <link href='css/styles.css' rel='stylesheet' text='text/css' />
        <script src='scripts/jquery-3.3.1.min.js'></script>
        <script src='scripts/jquery-validation-1.17.0.js'></script>
        <script src='scripts/forms.js'></script>
    </head>
    <body>
        <form id='form'>
            <fieldset>
                <legend><h1>Contact Us</h1></legend>
                <section>
                    <label>Name:</label>
                    <p><input type='text' id='iname' required /></p>
                </section>
                <section>
                    <label>Email:</label>
                    <p><input type='email' id='iemail' required /></p>
                </section>
                <br />
                <label>Message:</label>
                <p class='text'><textarea id='imsg' required></textarea></p>
                <div><input type='submit' value='Submit' /></div>
                <div id='response'></div>
            </fieldset>
        </form>
    </body>
</html>