import { useEffect, useState } from 'react'

export default function useImagePreview() {
  const [image, setImage] = useState('');
  const [uploaded, setUploaded] = useState();

  useEffect(() => {
    if (!uploaded) {
      return;
    }
    const objectUrl = URL.createObjectURL(uploaded);
    setImage(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [uploaded]);
  return {
    setUploaded,
    image,
  }
}
