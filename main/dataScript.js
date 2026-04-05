if(localStorage.getItem('data') === null){
    const questDatabase = [
    {
        id: 1,
        title: "Комплимент коллеге",
        description: "Сделайте искренний комплимент профессиональному качеству вашего коллеги или знакомого.",
        difficulty: "easy",
        category: "communication"
    },
    {
        id: 2,
        title: "Пять благодарностей",
        description: "Запишите 5 вещей, за которые вы благодарны сегодняшнему дню, и объясните почему.",
        difficulty: "easy",
        category: "introspection"
    },
    {
        id: 3,
        title: "Абстрактный натюрморт",
        description: "Нарисуйте любой предмет со стола, используя только геометрические фигуры (треугольники, круги).",
        difficulty: "middle",
        category: "creation"
    },
    {
        id: 4,
        title: "Разговор в очереди",
        description: "Заведите короткий непринужденный разговор с незнакомым человеком в общественном месте.",
        difficulty: "middle",
        category: "communication"
    },
    {
        id: 5,
        title: "Анализ привычки",
        description: "Выберите одну свою вредную привычку и распишите по пунктам: какой триггер её запускает и чем её можно заменить.",
        difficulty: "hard",
        category: "introspection"
    },
    {
        id: 6,
        title: "Сказка за 5 минут",
        description: "Придумайте и запишите короткую сказку, в которой главными героями будут вилка и кактус.",
        difficulty: "middle",
        category: "creation"
    },
    {
        id: 7,
        title: "Цифровой детокс",
        description: "Проведите 3 часа без использования любых гаджетов и интернета, наблюдая за своими ощущениями.",
        difficulty: "hard",
        category: "introspection"
    },
    {
        id: 8,
        title: "Слушатель",
        description: "В течение 10 минут внимательно слушайте собеседника, не перебивая и не давая советов, только задавая уточняющие вопросы.",
        difficulty: "middle",
        category: "communication"
    },
    {
        id: 9,
        title: "Новый логотип",
        description: "Придумайте и набросайте на бумаге новый логотип для вашего любимого фрукта.",
        difficulty: "easy",
        category: "creation"
    },
    {
        id: 10,
        title: "Карта страхов",
        description: "Составьте список из 3 своих главных страхов и напишите план из 2 шагов для преодоления каждого из них.",
        difficulty: "hard",
        category: "introspection"
    }
];
    localStorage.setItem('data', JSON.stringify(questDatabase))
    localStorage.setItem('activ', JSON.stringify([]))
    localStorage.setItem('skip', JSON.stringify([]))
    localStorage.setItem('complet', JSON.stringify([]))
}