import { ComponentMeta, ComponentStory } from "@storybook/react"
import * as React from "react"
import {Reply} from "../component";
import exampleIcon from "../../userProfile/exampleIcon.jpg"
import { FAKE_GOSSIP_CLIENT } from "@src/gossipClient";

export default{
    component: Reply,
    title: "Components/Reply",
} as ComponentMeta<typeof Reply>;

const Template: ComponentStory<typeof Reply> = args => <Reply {...args} />

export const Default = Template.bind({});

Default.args = {
    content: "this is a reply, hahahahahahahahahahh",
    createdBy:{
        nickName: "BigMiao",
        avatarUrl: exampleIcon,
        userID: 123456,
    },
    createdWhenTimestampInSecond: 1653985929,
    gossipClient: FAKE_GOSSIP_CLIENT,
}

