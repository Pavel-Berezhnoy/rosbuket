import config from "../config/main";

const CatalogBouquets = async (data) => {
  const response = await fetch(`${config.domain}/api/category/${data.categoryId}`);
  return response;
}

export default CatalogBouquets;