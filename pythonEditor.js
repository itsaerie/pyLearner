var myCodeMirror;

const createEditor = () => {
  window.myCodeMirror = CodeMirror.fromTextArea(document.getElementById("pythonCode"), {
    mode: "python",
    indentUnit: "4",
    lineNumbers: true,
    indentWithTabs: true,
    smartIndent: false,
    electricTabs: false,
  });
}

const save = () => {
  window.myCodeMirror.save();
  document.getElementById("pythonCode").innerHTML = window.myCodeMirror.getValue();
};

createEditor();
