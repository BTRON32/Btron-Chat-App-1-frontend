// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"
import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props) => {

    // const chatProps = useMultiChatLogic('86e9241b-771e-4727-b1ea-8d92e1f7fc22',
    //      props.user.username,
    //       props.user.secret
    //     )
    return (
    // <div style={{ height: "100vh" }}>
    //     <MultiChatSocket {...chatProps} />
    //     <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    // </div>

    <div style={{ height: "100vh" }}>
    <PrettyChatWindow
    projectId="86e9241b-771e-4727-b1ea-8d92e1f7fc22"
    username={props.user.username}
    secret={props.user.secret}
    style={{height:"100%"}}
    />
</div>
    )
}

export default ChatsPage