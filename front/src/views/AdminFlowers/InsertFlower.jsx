import React, { useContext } from 'react'
import { api } from '../../api/api.get';
import GlossaryForm from '../../components/admin/form/GlossaryForm'
import InsertUpdateForm from '../../components/admin/form/InsertUpdateForm'
import { OpenModal } from '../../components/messages/SuccessMessage';

export default function InsertFlower() {
  const { setOpenedState } = useContext(OpenModal);

  const submitFlowerHandle = async (e) => {
    e.preventDefault();
    const form = new FormData(document.forms.addUpdate);
    await api.post("/api/admin/glossary", form);
    setOpenedState({
      open: true,
      text: 'Глоссарий пополнен новой записью!',
    });
  }
  return (
    <InsertUpdateForm titleAdd="Добавить информацию в глоссарий" titleUpdate="Обновить информацию в глоссарии" submitHandle={submitFlowerHandle}>
      <GlossaryForm />
    </InsertUpdateForm>
  )
}
