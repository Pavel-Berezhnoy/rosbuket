import React from 'react'
import { useDispatch } from 'react-redux';
import { api } from '../../api/api.get';
import BouquetForm from '../../components/admin/form/BouquetForm';
import InsertUpdateForm from '../../components/admin/form/InsertUpdateForm';
import { submitThunk } from '../../store/actions/submitThunk';

export default function InsertBouquet() {
  const multiSelects = {
    categories: [],
    flowers: [],
  }

  const dispatch = useDispatch();

  const insertBouquetHandle = async (e) => {
    e.preventDefault();
    const form = new FormData(document.forms.addUpdate);
    Object.entries(multiSelects).forEach(element => {
      const [name, values] = element;
      form.set(name, values);
    });
    dispatch(submitThunk(async () => await api.post("/api/admin/bouquets", form), ['Товар успешно добавлен!']));
  }

  return (
    <InsertUpdateForm titleAdd="Добавить товар" titleUpdate="Обновить товар" submitHandle={insertBouquetHandle}>
      <BouquetForm multiSelects={multiSelects} />
    </InsertUpdateForm>
  )
}
