import React from 'react'
import { useDispatch } from 'react-redux';
import { api } from '../../api/api.get';
import GlossaryForm from '../../components/admin/form/GlossaryForm'
import InsertUpdateForm from '../../components/admin/form/InsertUpdateForm'
import { submitThunk } from '../../store/actions/submitThunk';

export default function InsertFlower() {
  const dispatch = useDispatch();

  const submitFlowerHandle = async (e) => {
    e.preventDefault();
    const form = new FormData(document.forms.addUpdate);
    form.set('active', form.get('active') ? '1' : '0')
    dispatch(submitThunk(async () => await api.post("/api/admin/glossary", form), ['Глоссарий пополнен новой записью!']));
  }
  return (
    <InsertUpdateForm titleAdd="Добавить информацию в глоссарий" titleUpdate="Обновить информацию в глоссарии" submitHandle={submitFlowerHandle}>
      <GlossaryForm />
    </InsertUpdateForm>
  )
}
