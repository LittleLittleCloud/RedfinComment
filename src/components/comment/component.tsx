import { IComment, IGossipClient } from "@src/gossipClient";
import React from "react";
import { LikeBtn } from "../likeBtn";
import { LikeBtnProps } from "../likeBtn/component";
import { ReplySection } from "../replySection";
import { UserProfile, UserProfileProps } from "../userProfile/component";
import css from "./styles.module.css";

export interface ICommentProps extends IComment{
    gossipClient: IGossipClient,
    likeBtnProps: LikeBtnProps,
}

export interface CommentState{
    numberOfReplies: number,
    isLoadingReplySection: boolean,
}

export class Comment extends React.Component<ICommentProps, CommentState>{
    constructor(props: ICommentProps){
        super(props);
        this.state = {isLoadingReplySection: true, numberOfReplies: 0};
    }

    async getNumberOfReplies(){
        return await this.props.gossipClient.getRepliesCount(this.props, Date.now());
    }

    async componentDidMount(){
        var repliesNumber = await this.getNumberOfReplies();
        this.setState({isLoadingReplySection: false, numberOfReplies: repliesNumber});
    }

    render(): React.ReactNode {
        var createdWhen = new Date(this.props.createdWhenTimestampInSecond * 1000);
        return (
            <div>
                <div
                    className={css.commentHeader}>
                    <UserProfile {...this.props.createdBy} gossipClient={this.props.gossipClient}  />
                    <div className={css.createWhen}>{createdWhen.toLocaleDateString()}</div>
                </div>
                <div
                    className={css.commentBody}>
                    {this.props.content}
                </div>
                <div>
                    <LikeBtn {...this.props.likeBtnProps} />
                </div>
                {
                    (
                        this.state.isLoadingReplySection && 
                        <div>loading replies</div>
                    )
                }
                {
                    (
                        !this.state.isLoadingReplySection &&
                        <div>
                            <ReplySection comment={this.props} gossipClient={this.props.gossipClient} replies={[]} numberOfReplies={this.state.numberOfReplies} />
                        </div>
                    )
                }
            </div>
        )
    }
}
    