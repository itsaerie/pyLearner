var myCodeMirror;
function myFunction() {
  window.myCodeMirror = CodeMirror.fromTextArea(document.getElementById("pythonCode"), {
    mode: "python",
    indentUnit: "4",
    lineNumbers: true,
    indentWithTabs: true,
    smartIndent: false,
    electricTabs: false,
  });
}
function saveAndSubmit(){
  window.myCodeMirror.save();
  document.getElementById("pythonCode").innerHTML = window.myCodeMirror.getValue();
  alert(document.getElementById("pythonCode").innerHTML);
}
myFunction();