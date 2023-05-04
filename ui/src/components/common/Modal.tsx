import BModal, { ModalProps as BModalProps } from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FC, ReactNode, useState } from 'react';

interface ModalProps extends BModalProps {
  isActive: boolean
  handleClose: () => void
  renderBody: () => ReactNode
  modalTitle: ReactNode
}

export const Modal: FC<ModalProps> = ({
  isActive,
  handleClose,
  renderBody,
  modalTitle,
  ...rest
}) => {

  const [show, setShow] = useState(isActive);

  return (
    <BModal
      show={show}
      onHide={handleClose}
      {...rest}
    >
      <BModal.Header closeButton>
        <BModal.Title>
          {modalTitle}
        </BModal.Title>
      </BModal.Header>
      <BModal.Body>
        {renderBody()}
      </BModal.Body>
      <BModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </BModal.Footer>
    </BModal>
  )
}