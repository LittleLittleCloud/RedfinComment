import { IGossipClient, IUser } from "@src/gossipClient";
import React from "react";
import css from "./styles.module.css";

export interface UserProfileProps extends IUser{
    gossipClient: IGossipClient
}

export function UserProfile(props: UserProfileProps){
    return(
        <div className={css.userProfile}>
                <img
                    src={props.avatarUrl} alt='userIcon' />
                <div
                    className={css.userName}>{props.nickName}</div>
        </div>
    )
}
