$(document).ready(function () {
  $('#ice-cream-form').submit(function (event) {
    event.preventDefault();
    var myArr = []
    for (var i = 1; i <= 3; i++) {
      myArr.push($(`#in${i}`).val())
    }
    console.log(myArr);
    myArr.forEach(function (arrayItem) {
      $('#list').append(`<li>${arrayItem}</li>`)
    })
  })
})