# Приложение с авторизацией по JWT/Google Sign In

## Описание приложения

1. Приложение с формой авторизации и регистрации по логину / паролю, а также по google. Форма не пропускает невалидные данные.
2. С кэшированием токена, полученного от сервиса авторизации. 
3. Есть выпадающий список в котором можно будет выбрать один из трёх языков. 
4. При смене языка меняются названия кнопок и полей на названия на выбранном языке.
5. Реализована кнопка смены стиля.
6. Добавление нового стиля или языка не заставляют переписывать всё приложение.
7. Код покрыт тестами на 65+%
8. Присутствует адаптивная вёрстка.
9. Реализованы оповещения в виде тоастов.
10. Выбранные язык и стиль сохраняются и применяются даже при перезагрузке страницы.

## От авторов

Стоит отметить, что основной упор мы делали на front часть приложения, посему было решено не делать большой акцент на серверной части, что сказывается: провека и по почте, и по паролю одновременно; отсутствие БД; декодинг токена на клиенте. 

Главными же достоинством нашего приложения считаем его маштабируемость, достаточно приятный дизайн и корректная работа всех его элементов(По крайней мере, все известные нам баги мы пофикили :D)

__© Илья Константинов (IliaKonstantinov)__
__© Андрей Худяков (AnKhudyakov)__

## Используемые технологии и библиотеки:

* HTML5
* CSS3
* JavaScript (ES6)
* Next.js
* Redux
* Express.js
* Node.js
* Jest
* React testing library
* Axios
* React hook form
* Sass(его scss версия)
* React toastify
* JWT
* Google Sign In
* I18n

## Как запустить приложение

1. Клонировать себе этот репозиторий
2. В папки __path/sfera__1/frontend__ и __path/sfera__1/backend__ установить все зависимости командой __npm i__
3. Запустить сервер, написав __npm run start-auth__ в терминале папки __path/sfera__1/backend__
4. Запустить приложение в браузере, написав __npm run dev__ в терминале папки __path/sfera__1/frontend__
5. НЕОБЯЗАТЕЛЬНО: в терминале папки __path/sfera__1/frontend__ можно ввести команду __npm run test__ и увидеть процент покрытия кода и ошибки в тестах, если таковые имеются.
6. Пользоваться :)