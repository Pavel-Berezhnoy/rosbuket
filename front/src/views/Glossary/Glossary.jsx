import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GlossaryLoader from '../../components/loaders/GlossaryLoader';
import { glossaryThunk } from '../../store/actions/glossaryThunk';
import GlossaryCard from './components/GlossaryCard';

export default function Glossary() {
  const dispatch = useDispatch();
  const glossaryData = useSelector(state => state.glossaryReducer);

  useEffect(() => {
    dispatch(glossaryThunk(`api/glossary`));
  }, []);
  
  return (
    <section className='px-2'>
      <h1 className='text-neutral-500 md:text-4xl text-2xl mt-16'>Глоссарий - узнай о цветах чуть больше!</h1>
      <div className='mt-16'>
        {glossaryData.flowers.length
          ? glossaryData.flowers.map(flower => <GlossaryCard key={flower.id} flower={flower} />)
          : [1,2,3,4,5,6,7,8,9,10].map(item => <GlossaryLoader key={item} />)}
      </div>
    </section>
  )
}
