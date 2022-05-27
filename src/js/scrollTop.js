// сделать так, что бы можно было нажать на scroll up
// подьём ввверх
$('#up').on("click", function () {
    $('html').animate({ scrollTop: 0 }, 500); //время прокрутки
    return false;
  })