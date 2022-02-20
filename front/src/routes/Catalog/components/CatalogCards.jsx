import React from "react";
import { api } from "../../../api/api.get";
import { useDispatch, useSelector } from "react-redux";
import { GET_CATEGORIES } from "../../../store/reducers/CategorisReducer";
import Card from "./Card";
import { useParams } from "react-router-dom";

const CatalogCards = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchCategories = async () => {
      const categoriesApi = await api.get(`/api/catalog?categoryId=${id ? id : 0}`);
      dispatch({
        type: GET_CATEGORIES,
        payload: categoriesApi.data,
      });
    }
    fetchCategories();
  }, [id, dispatch]);
  const catalogList = useSelector(state => state.categoryReducer.categories);
  return (
    <>
      {catalogList.length > 0 ? <div className="catalog__cards mt-16">{catalogList.map((val) => {
        return <Card key={val.id} id={val.id} title={val.name} image={val.image} />
      })}</div> : ''}
    </>
  );
}

export default CatalogCards;