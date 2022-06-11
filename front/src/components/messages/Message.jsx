import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageSetClose } from '../../store/reducers/MessageReducer';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

export default function Message({ children }) {
  const dispatch = useDispatch();
  const messageData = useSelector(state => state.messageReducer);
  if (messageData?.open) {
    const timeout = setTimeout(() => {
      dispatch(messageSetClose());
      clearTimeout(timeout);
    }, 5000);
  }
  const messageComponents = new Map([
    ['error', <ErrorMessage errors={messageData.messages} />],
    ['success', <SuccessMessage success={messageData.messages} />],
  ]);
  return (
    <>
      <div className={`fixed flex flex-col ${messageData.open ? 'opacity-100 z-10' : 'opacity-0 -z-10'} sm:flex-row sm:items-center duration-1000 left-1/2 transform -translate-x-1/2 bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6 transition-all`}>
        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
          {messageComponents.get(messageData.type)}
        </div>
      </div>
      {children}
    </>
  )
}
