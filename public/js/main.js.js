$(document).ready(function(){
 $(window).on("scroll" , function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
        $('a').addClass('black');
        $('navbar-brand').addClass('black');
        $('.navbar-light .navbar-toggler').addClass('black');
    }

    else {
        $('nav').removeClass('black');
        $('a').removeClass('black');
        $('navbar-brand').removeClass('black');
        $('.navbar-light .navbar-toggler').removeClass('black');
    }
 });


 
  
  let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
});

// Обробник події на клік кнопки "Надіслати"
document.querySelector('.form-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Перешкоджаємо стандартній поведінці форми

  // Отримання значень полів форми
  var name = document.querySelector('input[name="name"]').value;
  var message = document.querySelector('textarea[name="message"]').value;
  document.getElementById('nameField').value="";
  document.getElementById('textArea').value="";
  // Створення об'єкта з даними форми
  var formData = {
    name: name,
    message: message
  };

  // Відправлення запиту на сервер
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/submit-form'); // URL серверного обробника форми
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Обробка успішної відправки форми
      alert('Повідомлення успішно відправлене!');
      // Додаткові дії після успішної відправки форми
    } else {
      // Обробка помилки відправки форми
      alert('Сталася помилка');
    }
  };
  xhr.send(JSON.stringify(formData));
});


// document.querySelectorAll(".form-btn")
// .forEach(function (elem) {
//   elem.onclick = function (e) {
//     let selector = this.dataset.clearSelector;
//     document.querySelectorAll(selector)
//     .forEach(function (item) {
//       item.value = "";
//     });
//   };
// });


// (function() {
//     const formEl = document.querySelector("#contactForm");
//     formEl.addEventListener("submit", function(event) {
//         event.preventDefault();

//         const body = {
//             name: event.target.name.value,
//             email: event.target.email.value,
//             message: event.target.message.value
//         }

//         fetch("https://stoliari-node.herokuapp.com/api", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"  
//             },
//             body: JSON.stringify(body)
//         }).then(r => r.text()).then(response => {
//             // TODO add alert about successful submit 
//             console.log(response, "from server")
//         });
//     });
//  })();

