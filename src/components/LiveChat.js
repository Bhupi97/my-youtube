import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChats } from "../utils/chatSlice";
import { generateCustomRandomString, generateName } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();

    const ChatMessages = useSelector(store => store.chat.chats); 

    useEffect(() => {
        const interval = setInterval(() => {
            // API Polling

            dispatch(addChats({
                name: generateName(),
                message: generateCustomRandomString(20)
            }))
            
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-slate-200 w-full ml-4 rounded-lg mt-5 py-2 px-4 h-[620px] overflow-y-scroll flex flex-col-reverse">
            { // Disclaimer: Don't use indexes as keys!!!!!
            ChatMessages.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message} />)}
        </div>
    )
};

export default LiveChat;