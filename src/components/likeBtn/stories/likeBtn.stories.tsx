import * as React from "react";
import { LikeBtn } from "../component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default{
    component: LikeBtn,
    title: "Components/Upvote",
    args:{
    }
} as ComponentMeta<typeof LikeBtn>;

const Template: ComponentStory<typeof LikeBtn> = args => <LikeBtn {...args} />;

export const Fuck = Template.bind({});
