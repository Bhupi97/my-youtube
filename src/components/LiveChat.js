import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChats } from "../utils/chatSlice";
import { generateCustomRandomString, generateName } from "../utils/helper";

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const ChatMessages = useSelector(store => store.chat.chats); 

    useEffect(() => {
        const interval = setInterval(() => {
            // API Polling

            dispatch(addChats({
                name: generateName(),
                message: generateCustomRandomString(20)
            }))
            
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        
        <div className="flex flex-col w-full mx-4 rounded-lg">
            <div className="bg-slate-200 w-full mt-5 py-2 px-4 h-[560px] overflow-y-scroll flex flex-col-reverse rounded-t-lg">
                { // Disclaimer: Don't use indexes as keys!!!!!
                    ChatMessages.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message} />)
                }
                </div>
        
        <form className="rounded-b-lg bg-slate-200 px-4 h-14 py-2 border-t-2 border-slate-300" 
        onSubmit={(e) => {
            e.preventDefault();
            console.log("Form Submitted with value :" + liveMessage);
            dispatch(addChats({
                name: "Bhupinder",
                message: liveMessage
            }));
            setLiveMessage("");
        }}>
        <input className="border-2 border-slate-400 rounded-full h-full px-2 w-3/4" type="text" placeholder="Live chat" value={liveMessage} 
        onChange={(e) => setLiveMessage(e.target.value)}/>
        <button className="bg-black w-1/5 h-full rounded-full px-2 mx-2 text-white">Send</button>
    </form>
    </div>


    )
};

export default LiveChat;