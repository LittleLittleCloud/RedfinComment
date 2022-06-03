import css from "./styles.module.css";
import React from "react";
import Upvote from "./upvote.svg"
import Downvote from "./downvote.svg"

// // // //

export interface LikeBtnProps{
    vote?: number,
    score: number,
    setUpvote?: () => void,
    setDownvote?: () => void,
}

export function LikeBtn({
    vote,
    score,
    setUpvote,
    setDownvote,
}: LikeBtnProps){
    return (
        <div
            className={css.vote}>
            <button
                className={css.vote}
                onClick={() => setUpvote!()}
            >
                <span>
                    <Upvote />
                    <label>{score}</label>
                </span>
            </button>
            <button
                className={css.vote}
                onClick={() => setDownvote!()}
            >
                <span>
                    <Downvote />
                </span>
            </button>
        </div>
    )
}