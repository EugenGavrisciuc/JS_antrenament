let move = document.getElementsByClassName("menu-item"),
    wrapper = document.querySelector(".wrapper"),
    menu = document.querySelector(".menu"),
    newAdd = document.createElement("li");

    newAdd.className = "menu-item";
    newAdd.textContent = "Пятый пункт";
    
    console.log(menu);
    console.log(move[2]);

    menu.insertBefore(move[2], move[1]);
    menu.appendChild(newAdd);

    document.body.style.backgroundImage ="url(img/apple_true.jpg)";

    var editElement = document.getElementById("title");
    console.log(editElement);
    editElement.textContent = "Мы продаем только подлинную технику Apple";

    var rootRemEl = document.querySelectorAll(".column"),
        removeElement = document.querySelector(".adv");
    rootRemEl[1].removeChild(removeElement);

    var question = prompt("What is your opinion about Apple"),
        questionAddIntoDiv = document.getElementById("prompt");

        questionAddIntoDiv.textContent = question;
        console.log(questionAddIntoDiv);
