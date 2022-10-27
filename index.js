class HashStorage {
    constructor() {
        this.storage = {}

    }
    addValue(key, value) {
        value.name = key
        this.storage[key] = value;
    }
    getValue(key) {
        return this.storage[key];
    }
    deleteValue(key) {
        if (this.getValue(key)) {
            delete this.storage[key];
            return true
        } else {
            return false;
        }
    }
    getKeys() {
        return Object.keys(this.storage)
    }
}


const coctailsStorage = new HashStorage();
coctailsStorage.addValue('Махито', {
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
});
coctailsStorage.addValue('Маргарита', {
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
});
coctailsStorage.addValue('Негрони', {
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
});
coctailsStorage.addValue('Секс на пляже', {
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
});


document.querySelector('.button-add').addEventListener('click', () => {
    const radio = document.querySelectorAll('.rad');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            data = radio[i].value
        break;
        }
    }
    document.querySelector('.out-add').innerHTML = data;
})

const btnDelete = document.getElementById('delete');
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

const btnList = document.getElementById('list');
btnList.onclick = function () {

    alert(coctailsStorage.getKeys())
}