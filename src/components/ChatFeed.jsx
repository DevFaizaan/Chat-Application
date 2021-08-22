import MessageForm from "./MessageForm";
import MyMessage from "./userMessage";
import TheirMessage from "./othUserMessages";

const ChatFeed = (props) => {
    const {chatMessages, activeChatMessage, userName, messages} = props;   //curly braces = props to structure something from props

    const chat = chatMessages && chatMessages[activeChatMessage];

    const messageRender = () => {
        const keys = Object.keys(messages)
        return keys.map((key, index) =>{
            const message = messages[key];
            const lastMessageKey = index === 0
            const
        })

        console.log(keys);
    }

    messageRender();
console.log(props);

return (
    <div>
        ChatFeed
    </div>
)

}

export default ChatFeed