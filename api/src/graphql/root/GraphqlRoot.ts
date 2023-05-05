import CartController from "../../controller/CartController";
import DeviceController from "../../controller/DeviceController";

const GraphqlRoot = () => {

    const device = new DeviceController();
    const cart = new CartController()

    return {
        deviceList: device.actionGetDeviceList,
        getDevice: device.actionGetDevice,
        addToCart: cart.actionAddToCart,
        removeFromCart: cart.actionRemoveFromCart
    }
};

export default GraphqlRoot;