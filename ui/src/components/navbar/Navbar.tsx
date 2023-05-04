import { useAppSelector } from '@dl/hooks/useAppSelector'
import styles from './Navbar.module.css'
import { selectCartDeviceQuantity } from '@dl/store/cart'

export const Navbar = () => {

  const quantity = useAppSelector(selectCartDeviceQuantity);

  return (
    <div className="d-flex justify-content-between">
      <h4>Test application</h4>
  
      <div className={styles.quantity}>
        <span className='label'>Total in cart:</span>
        <span className='value'>{quantity} item(s)</span></div>
    </div>
  )
}