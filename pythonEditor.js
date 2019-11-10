var socket = io()
const update = (data) => {
  console.log(data)
  $("#solution").text(data)
}
socket.on('results', update)

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
  $("#results").hide()
  $("#solution").hide()
}
createEditor()

$(() => {
  $("#submitCode").click(()=>{
    window.myCodeMirror.save()
    $("#results").show()
    $("#solution").show()
    var code = { lesson: $("#lesson").attr("name"), problem: $("#problem").attr("name") , code: window.myCodeMirror.getValue() }
    postCode(code)
    console.log(code)
  })
})

postCode = (code) => {
  $.post('http://localhost:10000/code', code)
}
