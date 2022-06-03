import React from "react";
import { UserProfile, UserProfileProps } from "../userProfile/component";
import css from "./styles.module.css";

export interface ReplyProps{
    content: string,
    timeStamp: number,
    userProfileProps: UserProfileProps,
};

export function Reply(props: ReplyProps){
    var createdWhen = new Date(props.timeStamp * 1000);
    return (
        <div>
            <div
                className={css.commentHeader}>
                <UserProfile {...props.userProfileProps}  />
                <div className={css.createWhen}>{createdWhen.toLocaleDateString()}</div>
            </div>
            <div
                className={css.commentBody}>
                {props.content}
            </div>
        </div>
    )
}