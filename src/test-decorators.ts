class Car {

    public color = 'white';

    get formattedColor(){
        console.log('Color ' + this.color);
        return 'Color ' + this.color
    }

    @logError
    drive(){
        throw new Error('123123123');
        console.log('I am drive');
    }
}

function logError(target: any, key: string, desc: TypedPropertyDescriptor<any>) {
    //console.log(target);
    //console.log(key);
    //console.log(desc);
    //target.drive();
    const method =  desc.value;

    desc.value = function (args: []) {
        try {
            method(args);
        } catch (e) {
            console.log(e)
        }
    }


}

const car = new Car();
car.drive();
