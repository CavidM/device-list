import React from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@dl/components/common/Modal';
import { DeviceEditContainer } from './DeviceEdit.container';

export const DeviceEditModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push(router.pathname);
  };

  return (
    <Modal
      isActive
      renderBody={() => <DeviceEditContainer />}
      handleClose={handleClose}
      size="lg"
      modalTitle="Device info"
    />
  );
};
