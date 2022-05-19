import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { api } from '../../api/api.get';
import BouquetForm from '../../components/admin/form/BouquetForm';
import InsertUpdateForm from '../../components/admin/form/InsertUpdateForm';
import { OpenModal } from '../../components/messages/SuccessMessage';

export default function UpdateBouquet() {
  const message = useContext(OpenModal);
  const [bouquet, setBouquet] = useState();
  const multiSelects = {
    categories: [],
    flowers: [],
  }
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/api/bouquet/${id}`);
      setBouquet(response.data);
    })();
  }, [id]);

  const updateBouquetHandle = async (e) => {
    e.preventDefault();
    const form = new FormData(document.forms.addUpdate);
    Object.entries(multiSelects).forEach(element => {
      const [name, values] = element;
      form.set(name, values);
    });
    form.set('id', id);

    await api.post("/api/admin/bouquets?_method=PUT", form);
    message.setOpenedState({
      open: true,
      text: 'Товар успешно обновлен!',
    });
  }

  return (
    <InsertUpdateForm titleAdd="Добавить товар" titleUpdate="Обновить товар" submitHandle={updateBouquetHandle}>
      {bouquet && <BouquetForm bouquetInfo={bouquet} multiSelects={multiSelects} />}
    </InsertUpdateForm>
  )
}
