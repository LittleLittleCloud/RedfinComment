import React from "react";
import css from "./styles.module.css";

export interface UserProfileProps{
    name: string
    userId: string
    avatarUrl: string
}

export function UserProfile(props: UserProfileProps){
    return(
        <div className={css.userProfile}>
                <img
                    src={props.avatarUrl} alt='userIcon' />
                <div
                    className={css.userName}>{props.name}</div>
        </div>
    )
}
