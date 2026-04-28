import * as localStorageFun from "./localStorafe.js";
import * as fun from "./fun.js";

if (localStorage.getItem("AboutTheUsers") === null) {
  window.location.href = "formRegistration.html";
}
//Находим нжные переменные
const greeting = document.getElementById("greeting-back");
const formLevel = document.getElementById("form-greeting");
const level = document.getElementById("complexity");
const inputCategoty = document.querySelectorAll(".category");
const createQuest = document.getElementById("get-a-quest");
const containerForQuest = document.getElementById("container-for-quest");
const butDoneQuests = document.getElementById("but-fo-done-cards");
const butActivQuests = document.getElementById("but-for-current-cards");
const butScipQuests = document.getElementById("but-for-skip-cards");

if (localStorage.getItem("activ") !== null) {
  fun.drawingCardQuest(containerForQuest, "activ");
}

//Если пользователь первый раз заходит вызываем приветствие
if (JSON.parse(localStorage.getItem("AboutTheUsers")).firstVisit === true) {
  greeting.style.display = "flex";
}

//Вызываем функцию сохранения настроек и выход из настроек при нажатии на кнопку на экране приветствия
formLevel.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorageFun.firstSettings(inputCategoty, level);
  greeting.style.display = "none";
  const dataUser = JSON.parse(localStorage.getItem("AboutTheUsers"));
  dataUser.firstVisit = false;
  localStorage.setItem("AboutTheUsers", JSON.stringify(dataUser));
});

//Обработчик для создания квестов
createQuest.addEventListener("click", () => {
  if (JSON.parse(localStorage.getItem("data")).length === 0) {
    if (
      window.confirm(
        "Вы выполнили все квесты! Хотите начать решать квесты повторно? Статистика не сбросится",
      )
    ) {
      const oldScript = document.getElementById("data");
      const newScript = document.createElement("script");
      newScript.id = "data";
      newScript.src = oldScript.src;
      newScript.defer = true;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    }
  } else {
    const data = fun.sortedQuests();
    if (data.length !== 0) {
      const numQuest = fun.randomQuest(0, data.length);
      const quest = data[Math.floor(numQuest)];
      const redactData = JSON.parse(localStorage.getItem("data"));
      const index = (el) => el.id === quest.id;
      const del = redactData.findIndex(index);
      redactData.splice(del, 1);
      localStorage.setItem("data", JSON.stringify(redactData));
      const questInLocal = JSON.parse(localStorage.getItem("activ"));
      questInLocal.push(quest);
      localStorage.setItem("activ", JSON.stringify(questInLocal));
      fun.drawingCardQuest(containerForQuest, "activ");
    } else {
      alert(
        "База квестов прилегла отдохнуть. Попробуйте поменять настройки квесты еще есть просто другой категории или сложности",
      );
    }
  }
});

//Обработчик для отображение выполненых квестов
butDoneQuests.addEventListener("click", () => {
  fun.drawingCardQuest(containerForQuest, "complet");
  const butQuestCondition = document.querySelectorAll(".container-for-but");
  const questCard = document.querySelectorAll(".card-quest");
  butQuestCondition.forEach((el) => {
    el.remove();
  });
  questCard.forEach((el) => {
    el.classList.add("green");
  });
});

butActivQuests.addEventListener("click", () => {
  fun.drawingCardQuest(containerForQuest, "activ");
});

//Обработчик для отображения пропущенных квестов
butScipQuests.addEventListener("click", () => {
  fun.drawingCardQuest(containerForQuest, "skip");
  const butQuestCondition = document.querySelectorAll(".container-for-but");
  const questCard = document.querySelectorAll(".card-quest");
  butQuestCondition.forEach((el) => {
    el.remove();
  });
  questCard.forEach((el) => {
    el.classList.add("red");
  });
});
