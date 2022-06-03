import { ComponentMeta, ComponentStory } from "@storybook/react"
import * as React from "react"
import {ReplySection} from "../component";
import exampleIcon from "../../userProfile/exampleIcon.jpg"

export default{
    component: ReplySection,
    title: "Components/ReplySection",
} as ComponentMeta<typeof ReplySection>;

const Template: ComponentStory<typeof ReplySection> = args => <ReplySection {...args} />

export const Reply_100 = Template.bind({});

var defaultUserProfileProps = {
    name: "BigMiao",
    avatarUrl: exampleIcon,
    userId: "userId",
};

var defaultReply = {
    content: "this is a reply, hahahahahahahahahahh",
    userProfileProps:defaultUserProfileProps,
    timeStamp: 1653985929,
}

Reply_100.args = {
    replies: [defaultReply, defaultReply, defaultReply],
    numberOfRepliesLeft: 97,
}

