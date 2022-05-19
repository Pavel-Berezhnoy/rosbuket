import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import config from '../../config/main';
import { glossaryFlowerThunk } from '../../store/actions/glossaryThunk';

export default function GlossaryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const flowerData = useSelector(state => state.glossaryReducer);
  const flower = flowerData.flowers.find(flower => flower.id === Number(id));

  useEffect(() => {
    if (!flower) dispatch(glossaryFlowerThunk(`api/glossary/${id}`));
  }, [flower]);
  return (
    <>
      {flowerData.isLoading
        ? <div>loading...</div>
        : (flowerData.errors
          ? <div>{flowerData.errors.message}</div>
          : <div>
            <img className='w-full' src={`${config.domain}${flower?.image}`} alt="flower-image" />
            <h1 className='text-2xl font-bold my-8'>{flower?.name}</h1>
            <p className='text-lg'>{flower?.description}</p>
          </div>)}
    </>
  )
}
