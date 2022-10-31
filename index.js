
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
    accessories: {
        unit: 'шт',
        things: [
            {
                name: 'хайбол',
                amoutn: 1,
            },
            {
                name: 'мадлер',
                amoutn: 1,
            },
            {
                name: 'джиггер',
                amoutn: 1,
            },
            {
                name: 'коктельная ложка',
                amoutn: 1,
            },
            {
                name: 'трубочка',
                amoutn: 2,
            },
        ],
    },
    recept: ['Положи в хайбол лайм 3 дольки и подави мадлером', 'Возьми мяту 10 листиков в одну руку и хлопни по ним другой рукой', 'Положи мяту в хайбол', 'Наполни бокал дробленым льдом доверху', 'Добавь сахарный сироп 15 мл и белый ром 50 мл', 'Долей содовую доверху и аккуратно размешай коктейльной ложкой', 'Досыпь немного дробленого льда', 'Укрась веточкой мяты и долькой лайма'],
}, {
    name: 'Маргарита',
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
    accessories: {
        unit: 'шт',
        things: [
            {
                name: 'бокал маргарита',
                amoutn: 1,
            },
            {
                name: 'шейкер',
                amoutn: 1,
            },
            {
                name: 'стрейнер',
                amoutn: 1,
            },
            {
                name: 'джиггер',
                amoutn: 1,
            },
            {
                name: 'пресс для цитрусовых',
                amoutn: 1,
            },
        ],
    },
    recept: ['Сделай на бокале для маргариты соленую окаемку', 'Налей в шейкер лаймовый сок 30 мл, сахарный сироп 10 мл, ликер трипл сек 25 мл и серебряную текилу 50 мл', 'Наполни шейкер кубиками льда и взбей', 'Перелей через стрейнер в охлажденный бокал для маргариты', 'Укрась кружком лайма'],
}, {
    name: 'Негрони',
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
    accessories: {
        unit: 'шт',
        things: [
            {
                name: 'рокс',
                amoutn: 1,
            },
            {
                name: 'джиггер',
                amoutn: 1,
            },
            {
                name: 'коктельная ложка',
                amoutn: 1,
            },
        ],
    },
    recept: ['Наполни рокс кубиками льда доверху', 'Налей в бокал красный вермут 30 мл и красный биттер 30 мл', 'Добавь джин 30 мл и размешай коктейльной ложкой', 'Укрась апельсиновой цедрой'],
}, {
    name: 'Секс на пляже',
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
    accessories: {
        unit: 'шт',
        things: [
            {
                name: 'слинг',
                amoutn: 1,
            },
            {
                name: 'шейкер',
                amoutn: 1,
            },
            {
                name: 'стрейнер',
                amoutn: 1,
            },
            {
                name: 'джиггер',
                amoutn: 1,
            },
            {
                name: 'трубочки',
                amoutn: 2,
            },
            {
                name: 'коктельная шпажка',
                amoutn: 2,
            }
        ],
    },
    recept: ['Наполни слинг кубиками льда доверху', 'Налей в шейкер клюквенный сок 40 мл, ананасовый сок 40 мл, персиковый ликер 25 мл и водку 50 мл', 'Наполни шейкер кубиками льда и взбей', 'Перелей через стрейнер в слинг', 'Укрась кусочком ананаса и коктейльной вишней на шпажке'],
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


    btnRecepte.onclick = function () {
        const askDrink = prompt('Введите название напитка');
        const isRecepte = coctailsStorage.getValue(askDrink);
        console.log(isRecepte);
    }

    btnDelete.onclick = function () {
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

        alert(coctailsStorage.getKeys())
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

