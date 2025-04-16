document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let errors = [];

        // Проверка имени
        if (name === '') {
            errors.push('Имя не должно быть пустым.');
        }

        if (email === '') {
            errors.push('Email не должен быть пустым.');
        }
        // Проверка email
        // const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
       
        // } else if (!emailPattern.test(email)) {
        //     errors.push('Введите корректный email.');
        // }

        // Проверка сообщения
        if (message === '') {
            errors.push('Сообщение не должно быть пустым.');
        }

        // Вывод ошибок или успешная отправка
        if (errors.length > 0) {
            alert(errors.join('\n')); // Показываем ошибки пользователю
        } else {
            alert('Форма успешно отправлена!'); 
            // form.submit(); 
        }
    });
});
