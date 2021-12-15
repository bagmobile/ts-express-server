@classDecorator
class Car {

    public color = 'white';

    get formattedColor(){
        console.log('Color ' + this.color);
        return 'Color ' + this.color
    }

    @methodDecorator('Fuck error!')
    drive(@parameterDecorator speed: string):void{
        console.log('I am driving', speed);
        throw new Error();
    }
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index)
    console.log(arguments);
}

function classDecorator(constructor: typeof Car) {
    console.log(constructor);
}

function methodDecorator(message: string) {
    return function logError(target: any, key: string, desc: TypedPropertyDescriptor<any>) {
        //console.log(target);
        //console.log(key);
        //console.log(desc);
        //target.drive();
        const method = desc.value;

        desc.value = function () {
            try {
                method();
            } catch (e) {
                console.log(message)
            }
        }
    }
}


const car = new Car();
car.drive('----');
