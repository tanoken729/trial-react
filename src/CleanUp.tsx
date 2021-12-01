import React, {useState, useEffect} from 'react';

const CleanUp: React.FC = () => {
    const [currentNum, setCurrentNum] = useState(0);
    const incrementNum = () => {
        console.log("mouse event");
        setCurrentNum((preNumber) => preNumber + 1);
    };

    useEffect(() => {
        console.log("useEffect in CleanUp");
        // ユーザーの画面ないクリックを監視してincrementNumを実行
        window.addEventListener("mousedown", incrementNum);
        return () => {
            console.log("CleanUp");
            // （toggle displayで）アンマウントされた時、EventListener（mousedownによるincrementNum）を解除
            window.removeEventListener("mousedown", incrementNum);
        }
    }, []);
    return <div>{currentNum}</div>;
};

export default CleanUp;
