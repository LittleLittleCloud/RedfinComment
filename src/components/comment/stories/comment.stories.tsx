import { ComponentMeta, ComponentStory } from "@storybook/react"
import * as React from "react"
import {Comment} from "../component";
import exampleIcon from "../../userProfile/exampleIcon.jpg"

export default{
    component: Comment,
    title: "Components/Comment",
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />

export const Default = Template.bind({});

Default.args = {
    content: "this is a reply, hahahahahahahahahahh",
    userProfileProps:{
        name: "BigMiao",
        avatarUrl: exampleIcon,
        userId: "userId",
    },
    likeBtnProps:{
        score: 100,
    },
    timeStamp: 1653985929,
}

