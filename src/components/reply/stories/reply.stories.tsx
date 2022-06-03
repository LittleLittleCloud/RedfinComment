import { ComponentMeta, ComponentStory } from "@storybook/react"
import * as React from "react"
import {Reply} from "../component";
import exampleIcon from "../../userProfile/exampleIcon.jpg"

export default{
    component: Reply,
    title: "Components/Reply",
} as ComponentMeta<typeof Reply>;

const Template: ComponentStory<typeof Reply> = args => <Reply {...args} />

export const Default = Template.bind({});

Default.args = {
    content: "this is a reply, hahahahahahahahahahh",
    userProfileProps:{
        name: "BigMiao",
        avatarUrl: exampleIcon,
        userId: "userId",
    },
    timeStamp: 1653985929,
}

