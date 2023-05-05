import { getConnection } from "typeorm";
import { IDevice } from "../../types/entity/IDevice";
import { Device } from "../../entity/device/Device";

export const seedDeviceList = async () => {
    const connection = getConnection();

    const deviceList: IDevice[] = [
        { title: 'Apple Iphone 11 red', price: 699, quantity: 10, description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ' },
        { title: 'Smartwatch', price: 599, quantity: 50, description: 'A wearable device that connects to your smartphone to provide notifications, fitness tracking, and other features to help you stay connected and active throughout the day.' },
        { title: 'Wireless Earbuds', price: 499, quantity: 100, description: 'These earbuds connect to your phone or other Bluetooth-enabled device to provide high-quality, wireless audio on the go. They come with a charging case and offer noise-cancellation and other advanced features.' },
    ];

    const deviceRepository = connection.getRepository(Device);
    const existingList = await deviceRepository.find();

    if (existingList.length > 0) {
        console.log('DeviceList table already seeded');
        return true;
    }

    for (const deviceData of deviceList) {
        const device = new Device();
        device.title = deviceData.title;
        device.price = deviceData.price;
        device.quantity = deviceData.quantity;
        device.description = deviceData.description;

        await deviceRepository.save(device);
    }
};

