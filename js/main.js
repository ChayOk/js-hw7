//Автомобиль
let carInfo = document.getElementById('carInfo');
let Car = function (name, model) {

    this.get = function () {
        this.name = name;
        this.model = model;
        if (confirm('Запустить двигатель?')) {
            if (confirm('Двигатель запущен! Сразу поехать(Ок), навести суету(Отмена)')) {
                this.distance = +prompt('Двигатель запущен. Какое растояние хотите проехать(км)?', 2000);
                this.speed = +prompt('С какой скоростью поедем(км/ч)?', 200);
            }else {
                this.sueta = true;
            }
        }else {
            this.distance = 0;
        }

        this.operation();
    }

    this.operation = function () {
        this.resultTime = this.distance / this.speed;

        if (this.resultTime < 1) {
            this.resultTime = this.resultTime * 60;
            this.resultTime = this.resultTime.toFixed(1) + ' минут';
        }else{            
            this.resultTime = this.resultTime.toFixed(1) + ' часов';
        }

        this.fuelConsumptio = this.fuel / 100 * this.distance;

        this.show();
    }

    this.show = function () {
        if (this.distance == 0 || this.distance == undefined && this.sueta == false) {
            console.log('Вы никуда не поехали');
            carInfo.innerHTML = '<img src="./img/no-move.gif">' + '<p>Вы никуда не поехали</p>';
        } else if (this.sueta == true) {
            console.log('РАТАТАТАТАТАТАТАТАТА');
            carInfo.innerHTML = '<img src="./img/200w.gif"><br>' + 'РАТАТАТАТАТАТАТАТАТА';
        } else{
            switch (true) {
                case this.speed <= 0:
                    console.log('Вы стоите на нейтральной передаче');
                    break;
                case this.speed <= 20:
                    console.log('Вы едете на первой передаче');
                    break;
                case this.speed <= 40:
                    console.log('Вы едете на второй передаче');
                    break;
                case this.speed <= 70:
                    console.log('Вы едете на третьей передаче');
                    break;
                case this.speed <= 100:
                    console.log('Вы едете на четвертой передаче');
                    break;
                case this.speed <= 260:
                    console.log('Вы едете на пятой передаче');
                    break;
                case this.speed <= 320:
                    console.log('Вы едете на шестой передаче');
                    break;
            
                default:
                    console.log('Машины так не ездят');
                    break;
            }

            // let char = 'Характеристики автомобиля ' + this.name + ' ' + this.model + ':<br>' + 'Мощность: ' + this.power + '<br>Объем двигателя: ' + this.volume + '<br>Цвет: ' + this.color;

            carInfo.innerHTML = '<img src="./img/finish.gif"><br>' + 'На машине ' + this.name + ' ' + this.model + ' вы проехали ' + this.distance + 'км' + ' co скоростью ' + this.speed + 'км/ч за ' + this.resultTime + '.<br><br> Потрачено топлива: ' + this.fuelConsumptio + 'л.';

            console.log('На машине ' + this.name + ' ' + this.model + ' вы проехали ' + this.distance + 'км' + ' co скоростью ' + this.speed + 'км/ч за ' + this.resultTime + '.' + '\nПотрачено топлива: ' + this.fuelConsumptio + 'л.');
        }
    }
}

let mercedes = new Car('Mercedes', 'C-class');
mercedes.fuel = 14;
mercedes.color = 'Белый';
mercedes.volume = 6.2;
mercedes.power = 457;

let nissan = new Car('Nissan', 'Silvia');
nissan.fuel = 9;
nissan.color = 'Синий';
nissan.volume = 2.0;
nissan.power = 250;

let toyota = new Car('Toyaota', 'Supra');
toyota.fuel = 13;
toyota.color = 'Черный';
toyota.volume = 3.0;
toyota.power = 280;