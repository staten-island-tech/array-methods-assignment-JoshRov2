const cars = [
    {
        make: 'Audi',
        model: 'TT',
        awd: 'Yes',
        seats: 4,
        transmissions: ['7DCT'],
        engines: ['228-288hp 2.0T I4','394hp 2.5T I5'],
    },
    {
        make: 'BMW',
        model: '2-Series',
        awd: 'Yes',
        seats: 4,
        transmissions: ['6MT', '8AT'],
        engines: ['255hp 2.0T I4', '382hp 3.0T I6','453hp 3.0TT I6'],
    },
    {
        make: 'Chevrolet',
        model: 'Camaro',
        awd: 'No',
        seats: 4,
        transmissions: ['6MT','10AT'],
        engines: ['275hp 2.0T I4','335HP 3.6NA V6','455hp 6.2NA V8'],
    },
    {
        make: 'Ford',
        model: 'Mustang',
        awd: 'No',
        seats: 4,
        transmissions: ['6MT','10AT'],
        engines: ['315hp 2.3T I4','480-500hp 5.0NA V8'],
    },
    {
        make: 'Mazda',
        model: 'MX-5 Miata',
        awd: 'No',
        seats: 2,
        transmissions: ['6MT','6AT'],
        engines: ['181hp 2.0NA I4'],
    },
    {
        make: 'Nissan',
        model: 'Z',
        awd: 'No',
        seats: 2,
        transmissions: ['6MT','9AT'],
        engines: ['400-420hp 3.0TT V6'],
    },
    {
        make: 'Porsche',
        model: '718 Cayman',
        awd: 'No',
        seats: 2,
        transmissions: ['6MT','7DCT'],
        engines: ['300-350hp 2.0T H4','394-493hp 4.0NA H6'],
    },
    {
        make: 'Subaru',
        model: 'BRZ',
        awd: 'No',
        seats: 4,
        transmissions: ['6MT','6AT'],
        engines: ['228hp 2.4NA H4'],
    },
    {
        make: 'Toyota',
        model: 'Supra',
        awd: 'No',
        seats: 2,
        transmissions: ['6MT', '8AT'],
        engines: ['255hp 2.0T I4', '382hp 3.0T I6'],
    }
]

cars.forEach((cars) => console.log(cars.make + " " + cars.model)); 

cars.forEach((car) => {
    console.log(car.make + " " + car.model + ' transmissions:');
    car.transmissions.forEach((transmission) => {
    console.log(transmission);
    });
});

cars.forEach((car) => {
    console.log(car.make + " " + car.model + ' engines:');
    car.engines.forEach((engine) => {
    console.log(engine);
    });
});

const fourseaters = cars.filter((car) => car.seats === 4);
console.log(fourseaters);