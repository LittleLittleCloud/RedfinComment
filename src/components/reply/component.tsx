import { IGossipClient, IReply } from "@src/gossipClient";
import React from "react";
import { UserProfile, UserProfileProps } from "../userProfile/component";
import css from "./styles.module.css";

export interface ReplyProps extends IReply{
    gossipClient: IGossipClient,
};

export function Reply(props: ReplyProps){
    var createdWhen = new Date(props.createdWhenTimestampInSecond * 1000);
    return (
        <div>
            <div
                className={css.commentHeader}>
                <UserProfile {...props.createdBy} gossipClient={props.gossipClient}  />
                <div className={css.createWhen}>{createdWhen.toLocaleDateString()}</div>
            </div>
            <div
                className={css.commentBody}>
                {props.content}
            </div>
        </div>
    )
}