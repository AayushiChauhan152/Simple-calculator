function calc() {
      var frst = document.getElementById('frst').value
      var second = document.getElementById('second').value
      var op = document.getElementById('op').value

      if (op == '+') {
        var res = parseInt(frst) + parseInt(second)
      }
      if (op == '-') {
        var res = parseInt(frst) - parseInt(second)
      }
      if (op == '*') {
        var res = parseInt(frst) * parseInt(second)
      }
      if (op == '/') {
        var res = parseInt(frst) / parseInt(second)
      }
      document.getElementById('res').value = res
}
function clearAll(){
   for(var i=0;i<document.querySelectorAll('.input').length;i++){
      document.querySelectorAll('.input')[i].value='';
   }
}
