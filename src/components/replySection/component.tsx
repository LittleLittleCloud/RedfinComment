import React from "react";
import { ReplyProps, Reply } from "../reply/component";

export interface ReplySectionProps{
    replies?: ReplyProps[],
    numberOfRepliesLeft: number,
}

export class ReplySection extends React.Component<ReplySectionProps, ReplySectionProps>{
    constructor(props: ReplySectionProps){
        super(props);
        this.state = {...props};

        this.loadMoreReply = this.loadMoreReply.bind(this);
    }

    loadMoreReply(){

    }

    render(){
        if(this.state.replies == null && this.state.numberOfRepliesLeft == 0){
            return;
        }
    
        return (
            <div>
                {this.state.replies?.length > 0 &&
                <div>
                    <ul>
                        {this.state.replies?.map((reply => 
                        <li>
                            <Reply {...reply} />
                        </li>))}
                    </ul>
                </div>
                }
    
                <div onClick={this.loadMoreReply}>
                    load {this.state.numberOfRepliesLeft} more replies
                </div>
            </div>
    
        )
    }
}