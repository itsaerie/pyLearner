var myCodeMirror
const createEditor = () => {
  window.myCodeMirror = CodeMirror.fromTextArea(document.getElementById("pythonCode"), {
    mode: "python",
    indentUnit: "4",
    lineNumbers: true,
    indentWithTabs: true,
    smartIndent: false,
    electricTabs: false,
  })
}
createEditor()

$(() => {
  $("#submitCode").click(()=>{
    window.myCodeMirror.save()
    var code = { code: window.myCodeMirror.getValue() }
    postCode(code)
    console.log(code.code)
  })
})

postCode = (code) => {
  $.post('http://localhost:3000/code', code)
}
