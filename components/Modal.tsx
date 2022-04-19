import React from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>MODAL</>
    </MuiModal>
  )
}

export default Modal
