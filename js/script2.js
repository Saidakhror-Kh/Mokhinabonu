a=['Безоблачного счастья!',
    'Крепкого здоровья!',
    'Понимания и тепла!',
    ' Ясной улыбки!',
    ' Светлой судьбы!',
    'Свежего ветра!',
    ' Славы и признания!',
    'Фантастического везения!',
    'Доброты и нежности!',
    'Хрустальных надежд!',
    'Уверенности в себе!',
    'Отличного настроения!',
    'Тёплого отношения окружающих!',
    'Больших успехов!',
    'Оптимизма!',
    'Внимания и заботы!',
    'Увлекательной жизни!',
    'Приятных открытий!',
    'Замечательных друзей!',
    'Исполнения желаний!',
    'Вечной молодости!',
    'Чуткости!',
    'Побольше свободного времени!',
    'Волшебных рассветов!',
    'Прекрасных встреч!',
    'Веры в хорошее!',
    'Комфорта и уюта!',
    'Сияющего солнца!',
    'Максимум позитива!',
    'Нескучной повседневности!',
    'Интересных идей!',
    'Чувства полёта!',
    'Увлекательных воспоминаний!',
    'Радужной мечты!',
    'Подарков+ и побольше!',
    ' Красивых чувств!',
    'Ярких ощущений!',
    'Интересных бесед!',
    'Приятных людей рядом!',
    'Понимания и поддержки!',
    'Удачи во всех начинаниях!',
    'Лёгкого отношения к жизни!',
    'Потрясающих сюрпризов!',
    'Восхитительных закатов!',
    'Превосходных новостей!',
    'Кругосветных путешествий!',
    'Процветания!',
    'Дома, где любят и ждут!',
    'Чувства юмора!',
    'Красивых минут!',
    'Добрых слов!',
    'Благополучия!',
    'Бескорыстной дружбы!',
    'Вдохновения!',
    'Бодрости духа!',
    'Стабильности!',
    'Творчества и созидания!',
    'Много поводов отлично повеселиться',
    'Важных и желанных событий!',
    'Жизнелюбия!',
    'Сказочных мгновений!',
    'Свершений!',
    'Возможности почаще расслабиться!',
    'Понимания своей уникальности!',
    'Дерзких планов!',
    'Отличной формы!',
    'Активных и насыщенных дней!',
    'Цветущих садов и пения птиц!',
    'Только счастливых случаев!',
    'Мудрости и опыта!',
    'Душевной красоты!',
    'Столько денег, сколько захочется!',
    'Чистого неба!',
    'Улыбок Фортуны!',
    'Огонька и задора!',
    'Увлекательного общения!',
    'Хороших фильмов и книг!',
    'Превосходного самочувствия!',
    'Настойчивости и упорства!',
    'Желания идти вперёд!',
    'Интересных идей!',
    'Чувства полёта!',
    'Увлекательных воспоминаний!',
    'Радужной мечты!',
    'Подарков+ и побольше!',
    'Красивых чувств!',
    'Ярких ощущений!',
    'Интересных бесед!',
    'Приятных людей рядом!',
    'Понимания и поддержки!',
    'Отдыха на море!',
    'Уважения!',
    'Всего наилучшего - и по высшему классу!',
    ' Фейерверка эмоций!',
    'Весёлых и вкусных пиров!',
    'Бесценного вкуса жизни!',
    'Ласки и заботы!',
    'Широких возможностей!',
    'Долголетия!',
    'Прекрасного праздника!!!'];
    var text= document.querySelector('.text');
    var genBtn=document.querySelector('.gen_btn');
    
    genBtn.onclick=function(){
        var random =Math.floor(Math.random()*100 );
        text.innerHTML=a[random]
    }
        
    
    