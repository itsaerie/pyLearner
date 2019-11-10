<!DOCTYPE html>
<script src="codemirror/lib/codemirror.js"></script>
<link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet">
<link rel="stylesheet" href="codemirror/lib/codemirror.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="codemirror/mode/python/python.js"></script>
<script>
</script>
<style>
.content {
  margin: auto;
}
</style>
<html>
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
</nav>
<body style="max-width:100%; margin: auto">


<div class="content" style="text-align: center">
	<h1>pyLearner</h1>
	<div id="stuff"></div>
</div>

<textarea id="hello">hello</textarea>

<script>
var myCodeMirror;
function myFunction() {
	window.myCodeMirror = CodeMirror.fromTextArea(document.getElementById("hello"), {
	  mode: "python",
	  indentUnit: "4",
	  lineNumbers: true,
	  indentWithTabs: true,
	  smartIndent: false,
	  electricTabs: false,
	});

}
function save(){
	window.myCodeMirror.save();
	document.getElementById("hello").innerHTML = window.myCodeMirror.getValue();
	alert(document.getElementById("hello").innerHTML);
}

myFunction();
</script>

<?php
?>

<div class="content" style="text-align: center">
	<br><br>
	<button onclick="save()" class="btn btn-success">Try it</button>
</div>

</body>
</html>