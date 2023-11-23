// иконка для ссылок с подменю
   // Получаем все элементы li с классом 'sub-menu'
   var subMenuItems = document.querySelectorAll('li.sub-menu a');

   // Проходим по каждому элементу и добавляем символ
   subMenuItems.forEach(function(item) {
     // Добавляем символ к тексту элемента
     item.innerHTML += ' &#8250;';
   });

