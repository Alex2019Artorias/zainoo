// // элемент, по которому кликаем
// let clicked = $(".scroll-up");

// // находим, как далеко прокручен html 
// // (ползунок в браузере справа)
// let htmlScrollTop = $('html').scrollTop();

// // и выводим результат
// console.log(htmlScrollTop);

// // вызываем клик с помощью jquery
// clicked.on("click", function () {

//   // обращаемся к html и находим его верхнюю точку
// 	$("html").animate({
//     scrollTop: 0,
//     // длинна анимации
//   }, 2000);
  
//   console.log(htmlScrollTop);
// });



// сделать так, что бы можно было нажать на scroll up
// подьём ввверз


  
$('#up').click(function() {
  $('html').animate({scrollTop: 0},500); //время прокрутки
  return false;
})



// $('.search').click(function() {
// 	if ($('.input-box').is(':visible')) {
// 		$('.input-box').hide('slow');
		// $(this).html/('Показать блок')
// 	}
// 	else {
// 		$('.input-box').show('slow');
// 		$(this).html('Скрыть блок')
// 	}
// });


$(".search").click(function() {
  $(".input-box").css("display", "block");
  $(".search").css("display", "none");
  return false;
})

$("header").siblings().click(function() {
  $(".input-box").css("display", "none");
  $(".search").css("display", "block");
  return false;
})


