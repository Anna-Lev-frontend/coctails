const mainContainer = document.getElementById('mainContainer');
const btnAdd = document.getElementById('add');
const btnRecepte = document.getElementById('recepte');
const btnDelete = document.getElementById('delete');
const btnList = document.getElementById('list');

const defaultCoctails = [{
    name: 'махито',
    alcogol: true,
    engradience: [{
        name: 'белый ром',
        amount: 50,
        unit: 'мл',
    },
    {
        name: 'сахарный сироп',
        amount: 15,
        unit: 'мл',
    },
    {
        name: 'содовая',
        amount: 100,
        unit: 'мл',
    },
    {
        name: 'лайм',
        amount: 80,
        unit: 'г',
    },
    {
        name: 'мята',
        amount: 3,
        unit: 'г',
    },
    {
        name: 'дробленый лед',
        amount: 200,
        unit: 'г',
    }
    ],

    recept: ['Положи в хайбол лайм 3 дольки и подави мадлером, ', 'возьми мяту 10 листиков в одну руку и хлопни по ним другой рукой', 'положи мяту в хайбол, ', 'наполни бокал дробленым льдом доверху, ', 'добавь сахарный сироп 15 мл и белый ром 50 мл, ', 'долей содовую доверху и аккуратно размешай коктейльной ложкой, ', 'досыпь немного дробленого льда, ', 'укрась веточкой мяты и долькой лайма.'],
}, {
    name: 'маргарита',
    alcogol: true,
    engradience: [{
        name: 'серебрянная текила',
        amount: 50,
        unit: 'мл',
    },
    {
        name: 'трипл сек Fruko Schulz',
        amount: 25,
        unit: 'мл',
    },
    {
        name: 'сахарный сироп',
        amount: 10,
        unit: 'мл',
    },
    {
        name: 'лаймовый сок',
        amount: 30,
        unit: 'мл',
    },
    {
        name: 'лайм',
        amount: 10,
        unit: 'г',
    },
    {
        name: 'соль',
        amount: 2,
        unit: 'г',
    },
    {
        name: 'лед в кубиках',
        amount: 200,
        unit: 'г',
    }
    ],

    recept: ['Сделай на бокале для маргариты соленую окаемку, ', 'налей в шейкер лаймовый сок 30 мл, сахарный сироп 10 мл, ликер трипл сек 25 мл и серебряную текилу 50 мл, ', 'наполни шейкер кубиками льда и взбей, ', 'перелей через стрейнер в охлажденный бокал для маргариты, ', 'укрась кружком лайма.'],
}, {
    name: 'негрони',
    alcogol: true,
    engradience: [{
        name: 'лондонский сухой джин',
        amount: 30,
        unit: 'мл',
    },
    {
        name: 'красный вермут',
        amount: 30,
        unit: 'мл',
    },
    {
        name: 'красный биттер',
        amount: 30,
        unit: 'мл',
    },
    {
        name: 'апельсиновая цедра',
        amount: 1,
        unit: 'шт',
    },
    {
        name: 'лёд в кубиках',
        amount: 120,
        unit: 'г',
    }
    ],

    recept: ['Наполни рокс кубиками льда доверху, ', 'налей в бокал красный вермут 30 мл и красный биттер 30 мл, ', 'добавь джин 30 мл и размешай коктейльной ложкой, ', 'укрась апельсиновой цедрой.'],
}, {
    name: 'секс на пляже',
    alcogol: true,
    engradience: [{
        name: 'водка царская',
        amount: 50,
        unit: 'мл',
    },
    {
        name: 'персиковый ликёр fruko schulz',
        amount: 25,
        unit: 'мл',
    },
    {
        name: 'клюквенный сок',
        amount: 40,
        unit: 'мл',
    },
    {
        name: 'ананасовый сок',
        amount: 40,
        unit: 'мл',
    },
    {
        name: 'ананас',
        amount: 15,
        unit: 'г',
    },
    {
        name: 'коктельная вишня красная',
        amount: 5,
        unit: 'г',
    },
    {
        name: 'лёд в кубиках',
        amount: 350,
        unit: 'г',
    }
    ],

    recept: ['Наполни слинг кубиками льда доверху, ', 'налей в шейкер клюквенный сок 40 мл, ананасовый сок 40 мл, персиковый ликер 25 мл и водку 50 мл, ', 'наполни шейкер кубиками льда и взбей, ', 'нерелей через стрейнер в слинг, ', 'укрась кусочком ананаса и коктейльной вишней на шпажке.'],
}]

class HashStorage {
    constructor() {
        this.storage = {}

    }
    //добавить коктель
    addValue(key, value) {
        value.name = key
        this.storage[key] = value;
    }
    //получить коктель по имени
    getValue(key) {
        return this.storage[key];
    }
    //удалить коктель
    deleteValue(key) {
        if (this.getValue(key)) {
            delete this.storage[key];
            return true
        } else {
            return false;
        }
    }
    //получить список названий всех коктелей
    getKeys() {
        return Object.keys(this.storage)
    }
}

const addEvents = function () {

    btnDelete.onclick = function () {
        mainContainer.innerHTML = '';
        const answer = prompt('Введите название напитка для удаления');

        const isDelete = coctailsStorage.deleteValue(answer);
        console.log(isDelete)
        if (isDelete) {
            alert('коктель удален')
        } else {
            alert('коктель не обнаружен')
        }
    }

    btnList.onclick = function () {
        mainContainer.innerHTML = '';
        
        const headerList = createElement('h1', 'hHeader', 'Список всех коктелей:');
        const divList = createElement('div','classList',headerList);

        const ulList = document.createElement('ul');
        ulList.classList.add('ulList');
        divList.append(ulList);

        const liList = document.createElement('li');
        liList.classList.add('liList');
        liList.innerHTML = coctailsStorage.getKeys();
        ulList.append(liList);

        mainContainer.append(divList);
        console.log(coctailsStorage.getKeys())
    }
}

const creatDefaultCoctailStorage = function () {
    const coctailsStorage = new HashStorage();
    defaultCoctails.forEach(coctail => {
        coctailsStorage.addValue(coctail.name, coctail)
    });
    return coctailsStorage;
}
// тут мое хранилище коктелей
const coctailsStorage = creatDefaultCoctailStorage();
//тут формируем наши степы(steps,result)
btnAdd.onclick = function () {
    const result = {};
    const steps = [
        {
            header: "введите название", inputs: [{
                type: 'input', value: '', label: 'название', name: 'name'
            }
            ]
        },
        {
            header: 'алкогольный', inputs: [
                { type: 'checkbox', value: true, label: 'да', name: 'alcogol' },
                { type: 'checkbox', value: false, label: 'нет', name: 'alcogol' }
            ]
        },
        {
            header: 'ингредиенты', inputs: [
                { type: 'input', value: '', label: 'ингредиент', name: 'engradience', added: true },
            ]
        },
        {
            header: 'рецепт', inputs: [
                { type: 'textarea', value: '', label: 'описание', name: 'recept' },

            ]
        }
    ]
    creatStape(steps, 0, result);

}
btnRecepte.onclick = function () {
    mainContainer.innerHTML = '';
    const askDrink = prompt('Введите название напитка');
    const isRecepte = coctailsStorage.getValue(askDrink);
    const header = createElement('h1', 'header', isRecepte.name)
    const textAlcogol = createElement('h2', 'subHeader', 'алкогольный:')
    const pAlcogol = createElement('p', 'pAlcogol', isRecepte.alcogol ? 'да' : 'нет')
    const textEngradience = createElement('h2', 'textHeader', 'Необходимые ингредиенты:')
    const liEngradience = isRecepte.engradience.map((item) => createElement('li', 'liEngradience', `${item.name} ${item.amount} ${item.unit}`));
    const ulEngradience = createElement('ul', 'ulEngradience', liEngradience)
    const textRecepte = createElement('h2', 'textRecepte', 'Рецепт приготовления:');
    const p = createElement('p', 'pRecept', isRecepte.recept);
    //помещаем содержимое div в main
    const div = createElement('div', 'wrapper', [header, textAlcogol, pAlcogol, textEngradience, ulEngradience, textRecepte, p])
    mainContainer.append(div);

    console.log(isRecepte);
}
const createElement = function (tag, className, child) {

    const element = document.createElement(tag);
    //console.log(element)
    element.classList.add(className);
    if (Array.isArray(child)) {
        element.append(...child)
    } else {
        element.append(child)
    }
    return element
}
const creatInput = function (value, labelText, type, name) {
    const label = document.createElement('label');

    let input;
    if (type === 'textarea') {
        input = document.createElement('textarea')
    } else {
        input = document.createElement('input');
    }

    input.type = type;
    input.name = name;
    input.value = value;
    input.className = 'input';
    label.append(labelText, input)

    return label;
}
//Все input только здесь
const creatStape = function (steps, index, result) {
    const currentStape = steps[index];
    //создание элементов
    if (!currentStape) {
        coctailsStorage.addValue(result.name, result);
        console.log(coctailsStorage.getKeys());
        mainContainer.innerHTML = '';
        return
    }
    let inputElements;
    mainContainer.innerHTML = '';
    const addName = document.createElement('h1');
    addName.innerText = currentStape.header;

    if (currentStape.inputs[0].added) {
        const container = document.createElement('div');
        const input = creatInput(currentStape.inputs[0].value, currentStape.inputs[0].label, currentStape.inputs[0].type, currentStape.inputs[0].name);
        const btnAddInput = document.createElement('button');
        btnAddInput.innerText = '+';
        btnAddInput.onclick = function () {
            const input = creatInput(currentStape.inputs[0].value, currentStape.inputs[0].label, currentStape.inputs[0].type, currentStape.inputs[0].name);
            container.querySelector('input:last-child').after(input)
        }
        container.append(input, btnAddInput);
        inputElements = [container];
    } else {
        inputElements = currentStape.inputs.map((input) => {
            return creatInput(input.value, input.label, input.type, input.name)
        })
    }
    // создание элементов

    const btnNext = document.createElement('button');
    btnNext.innerText = 'далее';
    btnNext.onclick = function () {
        //получение значений
        Array.from(mainContainer.querySelectorAll('.input')).forEach((item) => {
            if (item.name === 'alcogol' && item.checked || item.name === 'name' || item.name === 'recept') {
                //console.log(item.value);
                result[item.name] = item.value;
                return
            }
            if (item.name === 'engradience') {
                if (!result[item.name]) {
                    result[item.name] = [];
                }
                result[item.name].push(item.value);
            }
        })
        creatStape(steps, index + 1, result)
    }
    mainContainer.append(addName, ...inputElements, btnNext);
}
addEvents();


