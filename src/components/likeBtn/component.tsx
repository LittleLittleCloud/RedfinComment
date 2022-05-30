import css from "./styles.module.css";
import React from "react";
import ReactComponent from "./upvote.svg"

// // // //

export function LikeBtn(props:{
    vote: number,
    score: number,
    setUpvote: () => void,
    setDownvote: () => void,
}){
    return (
        <div>
            <button
                className={css.LikeBtn}
                onClick={() => props.setUpvote()}
            >
                <ReactComponent />
            </button>
            <h1>{props.vote}</h1>
            <button
                className={css.LikeBtn}
                onClick={() => props.setDownvote()}
            >
                <ReactComponent />
            </button>
        </div>
    )
}