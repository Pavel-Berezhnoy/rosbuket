import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useParams } from "react-router-dom";
import CategoryCardLoader from "../../../components/loaders/CategoryCardLoader";
import categoriesThunk from "../../../store/actions/categoriesThunk";

const CatalogCards = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(categoriesThunk(`/api/catalog?categoryId=${id ? id : 0}`));
  }, [id, dispatch]);

  const catalogData = useSelector(state => state.categoryReducer);
  return (
    <div className="catalog__cards mt-16">
      {!catalogData.isLoading
        ? (catalogData.categories.length
          ? catalogData.categories.map((val) => {
            return <Card key={val.id} id={val.id} title={val.name} image={val.image} />
          })
          : <></>)
        : [1, 2, 3, 4].map(item => <CategoryCardLoader key={item} />)}
    </div>
  );
}

export default CatalogCards;