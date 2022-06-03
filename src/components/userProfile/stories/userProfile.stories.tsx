import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserProfile } from "../component";
import exampleIcon from "../exampleIcon.jpg";
export default{
    component: UserProfile,
    title: "Components/UserProfile",
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = args => <UserProfile {...args} />;

export const Default = Template.bind({})
Default.args = {
    nickName : "BigMiao",
    avatarUrl: exampleIcon,
}