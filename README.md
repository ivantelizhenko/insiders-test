- Створив проєкт за допомогою Vite. Додатково додав React router для переходу між сторінками і Styled components для написання стилю.

- Будування системи React Router
- Верстка основної сторінки(11:30-12:45)
- Cтворення системи маніпуляції даними(12:54-14:05)
- Верстка сторінки Edit users(15:05-17:34)
- Додавання функція, яки беруть дані з сервера/деінде(17:35-17:45)
- Верстка сторінки Users (17:45-18:45)

  12.01

- Роблю функціонал зовнішнішнього відображення вибору фільтрів + рефакторинг Button + реорганізація файлів(16:00-17:35)
- Продовжую робити верстку сторінки Users(17:38-19:12)

  13.01

- Продовжую робити верстку сторінки Users(15:32-17:20)
- Роблю fake сервера за допомогою json-server(18:06-18:10)
- Інтегрувати у проєкт fake json-server(18:11-19:21 )

  **Завдання Edit User:**

- Встановлення id через react router та зчитування на сторінці edit user(20:19-20:54)
- Встановлення id під час вибору user на сторінці edit user(21:01-21:40)

  17.01

- Виправив трішечки верстку сторінки і головних елементів
- Зробив елемент Table за compound component pattern
- Передивляюся всю іншу верстку(21:53-23:09)

  18.01

- Верстка pop up вікна(70хв)
- Роблю елемент <Form> reusable(17:11-17:38)
- Встановлюю дефолтні значення в елеентів EditUserForm
- Зробити функцію додавання нового User(22:02-23:06)

  20.01

- Доробити функцію додавання user(11:48-13:45)
- Трішечки виправлень + функції для видалення user
- Роблю reusable Modal component
- Зробив функцію видалення користувача з можливістю підтвердеження

  21.01

- Працюю над функцією edit user

  22.01

- Роблю напис в списку користувачів, якщо нуль користувачів
- Роблю заборону на вхід на сторінку EditUsers, якщо нуль користувачів
- EditUser page. Роблю щоб кнопку Undo було, по-дефолту, не видно. Зʼявляється тільки тоді, коли ми щось змінюємо.
- Роблю, дизайна для кнопки, що вона вибрана
- Виправляю відтворення кнопок на EditUser

Робота з фільтрами:

- Встановлювати фільтри FilterContextAPI
- Зробити доступний тільки фільтр з departments, а коли буде обрано більше трьох департаментів, то зробити активними інші
- трішечки рефакторю функції встановлення або видалення фільтра
- Додати фільтри до посилання
- Рефакторю функцію додавання фільтрів до посилання
- Потрібно, щоб фільтри статусу і країни автоматично видалялися(з посилання і з AppState), коли фільтрів департаменту менше 3
- При натисканні на кнопку зі смітничком повертати всі фільтри до дефолтного значення
- Фільтрувати масив users за фільтрами
  Додатково:
- Створюю окремий ContextAPI для modal
- Створюю окремий ContextAPI для фільтрів
- Рефакторю функції взяття даних з полів
- Доробив зовнішню складову фільтра
- Додати правильний символ input:checked

Далі:
Робота з оптимізацією:

- Мемоізувати певні компоненти
- Split code
- Переглянути розташування файлів проєкта

Робота з сортування: **не зроблено**

- Кнопка сортування біля кожного заголовка в Table
- Щоб стрілочка на кнопці змінювалася(вниз/вверх)
- Темніший колір, якщо вибрано це сортування
- Cортувати users
