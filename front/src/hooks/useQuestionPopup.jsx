import { useState } from "react";

const useQuestionPopup = () => {
    const [question, setQuestion] = useState(false);
    return {
        question,setQuestion,
    }
}

export default useQuestionPopup;