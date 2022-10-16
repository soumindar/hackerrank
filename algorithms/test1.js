let devices = ['laptop asus',
                'smartphone samsung',
                'smartphone xiaomi',
                'laptop acer',
                'laptop lenovo'];

const isLaptop =
        device => device.includes('laptop');
const getLaptop =
        devices => devices.filter(isLaptop);

let laptops = getLaptop(devices);
console.log(laptops);