import { ComponentMeta, ComponentStory } from "@storybook/react"
import * as React from "react"
import {ReplySection, ReplySectionProps} from "../component";
import exampleIcon from "../../userProfile/exampleIcon.jpg"
import { UserProfileProps } from "@src/components/userProfile/component";
import { FAKE_GOSSIP_CLIENT, IComment } from "@src/gossipClient";
import { ReplyProps } from "@src/components/reply/component";

export default{
    component: ReplySection,
    title: "Components/ReplySection",
} as ComponentMeta<typeof ReplySection>;

const Template: ComponentStory<typeof ReplySection> = args => <ReplySection {...args} />

export const Reply_100 = Template.bind({});

var defaultUserProfileProps : UserProfileProps = {
    nickName: "BigMiao",
    avatarUrl: exampleIcon,
    userID: 123456,
    gossipClient: FAKE_GOSSIP_CLIENT,
};
var defaultCommentProps: IComment = {
    commentID: 123456,
    content: "shit",
    createdBy: defaultUserProfileProps,
    createdWhenTimestampInSecond: 123456434223,
};

var defaultReply: ReplyProps = {
    content: "this is a reply, hahahahahahahahahahh",
    createdBy:defaultUserProfileProps,
    createdWhenTimestampInSecond: 1653985929,
    gossipClient: FAKE_GOSSIP_CLIENT,
    replyID: 12345663,
}

Reply_100.args = {
    replies: [defaultReply, defaultReply, defaultReply],
    numberOfReplies: 97,
    gossipClient: FAKE_GOSSIP_CLIENT,
    comment: defaultCommentProps,
}

export const Reply_hide = Template.bind({})

Reply_hide.args = {
    replies : [defaultReply, defaultReply, defaultReply],
    numberOfReplies: 0,
    gossipClient: FAKE_GOSSIP_CLIENT,
    comment: defaultCommentProps,
}
