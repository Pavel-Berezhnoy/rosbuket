import React, { useContext } from 'react'
import { api } from '../../api/api.get';
import BouquetForm from '../../components/admin/form/BouquetForm';
import InsertUpdateForm from '../../components/admin/form/InsertUpdateForm';
import { OpenModal } from '../../components/messages/SuccessMessage';

export default function InsertBouquet() {
  const message = useContext(OpenModal);
  const multiSelects = {
    categories: [],
    flowers: [],
  }

  const insertBouquetHandle = async (e) => {
    e.preventDefault();
    const form = new FormData(document.forms.addUpdate);
    Object.entries(multiSelects).forEach(element => {
      const [name, values] = element;
      form.set(name, values);
    });

    await api.post("/api/admin/bouquets", form);
    message.setOpenedState({
      open: true,
      text: 'Товар успешно добавлен!',
    });
  }

  return (
    <InsertUpdateForm titleAdd="Добавить товар" titleUpdate="Обновить товар" submitHandle={insertBouquetHandle}>
      <BouquetForm multiSelects={multiSelects} />
    </InsertUpdateForm>
  )
}
