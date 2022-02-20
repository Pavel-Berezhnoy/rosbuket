import { useState } from "react";

const useMessage = () => {
    const [opened, setOpened] = useState(false);
    const [text, setText] = useState("");
    if (opened) {
        const timeout = setTimeout(() => {
            setOpened(false);
            clearTimeout(timeout);
        }, 5000);
    }
    return ({
        opened,
        setOpened,
        text,
        setText
    });
}

export default useMessage;