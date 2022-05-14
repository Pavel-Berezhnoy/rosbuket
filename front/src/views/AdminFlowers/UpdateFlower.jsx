import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { api } from '../../api/api.get';
import GlossaryForm from '../../components/admin/form/GlossaryForm'
import InsertUpdateForm from '../../components/admin/form/InsertUpdateForm'
import { OpenModal } from '../../components/messages/SuccessMessage';

export default function UpdateFlower() {
  const { id } = useParams();
  const [flower, setFlower] = useState();
  const { setOpenedState } = useContext(OpenModal);

  useEffect(() => {
    (async () => {
      const response = await api.get(`/api/admin/glossary/${id}`);
      setFlower(response.data);
    })();
  }, [id]);

  const updateFlowerHandle = async (e) => {
    e.preventDefault();
    const form = new FormData(document.forms.addUpdate);
    form.append('id', id);
    await api.post("/api/admin/glossary?_method=PUT", form);
    setOpenedState({
      open: true,
      text: 'Глоссарий обновлен!',
    });
  }

  return (
    <InsertUpdateForm titleAdd="Добавить информацию в глоссарий" titleUpdate="Обновить информацию в глоссарии" submitHandle={updateFlowerHandle}>
      {flower ? <GlossaryForm flowerInfo={flower} /> : <></>}
    </InsertUpdateForm>
  )
}
