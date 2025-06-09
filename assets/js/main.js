// Navbar fixed 
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      document.getElementById("navbar_top").classList.add("fixed-top");

      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");

      document.body.style.paddingTop = "0";
    }
  });
});


  const buttons = document.querySelectorAll('.filter-buttons .btn');
  const courses = document.querySelectorAll('.course-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('btn-dark'));
      buttons.forEach(btn => btn.classList.add('btn-outline-dark'));

      // Add active class to clicked button
      button.classList.remove('btn-outline-dark');
      button.classList.add('btn-dark');

      const filter = button.getAttribute('data-filter');

      courses.forEach(course => {
        const category = course.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          course.style.display = 'block';
        } else {
          course.style.display = 'none';
        }
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector("#phone");
  intlTelInput(phoneInput, {
    initialCountry: "auto",
    geoIpLookup: function (callback) {
      fetch("https://ipinfo.io?token=<YOUR_TOKEN>")
        .then((response) => response.json())
        .then((data) => callback(data.country))
        .catch(() => callback("us"));
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const readMoreElements = document.querySelectorAll(".read-more");

  readMoreElements.forEach((element) => {
    element.addEventListener("click", function () {
      const parentParagraph = this.parentElement;
      const fullText = this.getAttribute("data-full-text");
      const shortText = this.getAttribute("data-short-text");

      if (this.textContent === "Read More") {
        parentParagraph.innerHTML = `${fullText} <span class="read-more" data-short-text="${shortText}" data-full-text="${fullText}">Read Less</span>`;
      } else {
        parentParagraph.innerHTML = `${shortText} <span class="read-more" data-short-text="${shortText}" data-full-text="${fullText}">Read More</span>`;
      }

      // Reattach the event listener to the new "Read More" or "Read Less" element
      const newElement = parentParagraph.querySelector(".read-more");
      newElement.addEventListener("click", arguments.callee);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-toggle-icon");

    question.addEventListener("click", function () {
      const isVisible = answer.style.display === "block";

      // Toggle answer visibility
      answer.style.display = isVisible ? "none" : "block";

      // Toggle icon between + and -
      icon.classList.toggle("fa-plus", isVisible);
      icon.classList.toggle("fa-minus", !isVisible);
    });
  });
});


