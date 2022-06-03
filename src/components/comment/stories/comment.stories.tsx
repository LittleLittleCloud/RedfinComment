import { ComponentMeta, ComponentStory } from "@storybook/react"
import * as React from "react"
import {Comment} from "../component";
import exampleIcon from "../../userProfile/exampleIcon.jpg"
import { FAKE_GOSSIP_CLIENT } from "@src/gossipClient";

export default{
    component: Comment,
    title: "Components/Comment",
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />

export const Default = Template.bind({});

Default.args = {
    content: "this is a reply, hahahahahahahahahahh",
    commentID: 123456,
    createdBy: {
        nickName: "BigMiao",
        userID: 233456,
        avatarUrl: exampleIcon,
    },
    likeBtnProps:{
        score: 100,
    },
    createdWhenTimestampInSecond: 1653985929,
    gossipClient: FAKE_GOSSIP_CLIENT,
}

