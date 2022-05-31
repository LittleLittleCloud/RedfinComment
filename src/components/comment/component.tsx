import { timeStamp } from "console";
import React from "react";
import { LikeBtn } from "../likeBtn";
import { LikeBtnProps } from "../likeBtn/component";
import { UserProfile, UserProfileProps } from "../userProfile/component";
import css from "./styles.module.css";

export function Comment(props:{
    content: string,
    timeStamp: number,
    userProfileProps: UserProfileProps,
    likeBtnProps: LikeBtnProps,
}){
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
            <div>
                <LikeBtn {...props.likeBtnProps} />
            </div>
        </div>
    )
}