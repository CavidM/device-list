import { FC } from "react"
import styles from './DeviceEdit.module.css'
import { DeviceProps } from "@dl/types/device.type";
import { DeviceCart } from "../device-cart/DeviceCart";

interface DeviceEditHtmlProps extends DeviceProps {
  quantityUpdates: boolean
  itemsInCart: number
}


export const DeviceEditHtml: FC<DeviceEditHtmlProps> = ({
  id,
  title,
  description,
  price,
  quantity,
  quantityUpdates,
  itemsInCart
}) => {

  const quantityClassname = `${styles.quantity} ${quantityUpdates ? styles.quantityLoads : ''}`

  return (
    <>
      <div className="d-flex justify-content-between mb-4">

        <h4><small>#id:</small> {id}</h4>

        <h3>{title}</h3>

        <h3>{price ? `$${price}` : null}</h3>

        <div className={quantityClassname}>{quantity}</div>

      </div>

      <div className="d-flex justify-content-between">

        <h5 className="me-3 w-75 fw-normal">
          {description}
        </h5>

        <div className="w-25 row">
          <DeviceCart />

          <div className="fs-5">
            this items in cart:
            <span data-testid="item-quantity">{itemsInCart}</span>
          </div>
        </div>

      </div>
    </>
  );
}