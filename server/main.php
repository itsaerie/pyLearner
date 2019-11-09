<!DOCTYPE html>
<script src="codemirror/lib/codemirror.js"></script>
<link rel="stylesheet" href="codemirror/lib/codemirror.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="codemirror/mode/python/python.js"></script>
<style>
  .content {
    margin: auto;
  }
</style>
<html>
  <body style="max-width:1200px; margin: auto">

  <div class="content" id="content" style="text-align: center">
    <h1>pyLearner</h1>
    <form name="editor" method="POST" action="main.php">
      <input type="submit" id="submitCode" name="submitCode" value="Try It">
    </form>
  </div>

  <script>
    function myFunction() {
      var myCodeMirror = CodeMirror(document.body, {
        mode:  "python",
        indentUnit: "4",
        lineNumbers: true,
        indentWithTabs: true,
        smartIndent: false,
        electricTabs: false
      });
    }
    myFunction();
  </script>

  <?php
    $pythonCode=$_POST["pythonCode"];
    print($pythonCode);
  ?>
  </body>
</html>