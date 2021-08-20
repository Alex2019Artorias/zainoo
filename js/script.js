// элемент, по которому кликаем
let clicked = $(".scroll-up");

// находим, как далеко прокручен html 
// (ползунок в браузере справа)
let htmlScrollTop = $('html').scrollTop();

// и выводим результат
console.log(htmlScrollTop);

// вызываем клик с помощью jquery
clicked.on("click", function () {

  // обращаемся к html и находим его верхнюю точку
	$("html").animate({
    scrollTop: 0,
    // длинна анимации
  }, 2000);
  
  console.log(htmlScrollTop);
});

