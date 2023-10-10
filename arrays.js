const sedans = [
    {
        make: 'Alfa Romeo',
        model: 'Giulia',
        drivetrains: ['RWD', 'AWD'],
        transmissions: ['8AT'],
        engines: ['2.0T I4', '2.9TT V6'],
    },
    {
        make: 'Audi',
        model: 'A5 Sportback',
        drivetrains: ['AWD'],
        transmissions: ['7DCT, 8AT'],
        engines: ['2.0T I4', '3.0TT V6', '2.9TT V6'],
    },
    {
        make: 'BMW',
        model: '3-Series',
        drivetrains: ['RWD', 'AWD'],
        transmissions: ['6MT', '8AT'],
        engines: ['2.0T I4', '2.0T I4 + Plug-In Hybrid System', '3.0T I6', '3.0TT I6'],
    },
    {
        make: 'Cadillac',
        model: 'CT4',
        drivetrains: ['RWD', 'AWD'],
        transmissions: ['6MT', '10AT'],
        engines: ['2.0T I4', '2.7T I4', '3.0TT V6'],
    },
    {
        make: 'Lexus',
        model: 'IS',
        drivetrains: ['RWD', 'AWD'],
        transmissions: ['6AT','8AT'],
        engines: ['2.0T I4', '3.5NA V6', '5.0NA V8'],
    },
    {
        make: 'Mercedes-Benz',
        model: 'C-Class',
        drivetrains: ['RWD', 'AWD'],
        transmissions: ['9AT'],
        engines: ['2.0T I4', '2.0T I4', '2.0T I4 + Plug-In Hybrid System'],
    }
]
sedans.forEach((sedans) => console.log(sedans.make + sedans.model));