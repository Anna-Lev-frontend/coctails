// "use strict";

// function HashStorage() {
//         storage = {};
//     }
//     this.addValue = function(key, value) {
//         this.storage[key] = value;
//     }
//     this.getValue = function(key) {
//         return this.storage[key];
//     }
//     this.deleteValue = function(key) {
//         return delete this.storage[key];
//     }
//     this.getKeys = function() {
//         return Object.keys(this.storage)
//     }

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
coctailsStorage.addValue('mahito', {
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