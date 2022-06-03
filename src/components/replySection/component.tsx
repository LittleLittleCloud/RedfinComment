import React from "react";
import { ReplyProps, Reply } from "../reply/component";

export interface ReplySectionProps{
    replies?: ReplyProps[],
    numberOfRepliesLeft: number,
}

export interface ReplySectionState extends ReplySectionProps{
    isExpanded?: boolean,
}

export class ReplySection extends React.Component<ReplySectionProps, ReplySectionState>{
    constructor(props: ReplySectionProps){
        super(props);
        this.state = {...props, isExpanded: false};

        this.loadMoreReplies = this.loadMoreReplies.bind(this);
        this.hideReplySection = this.hideReplySection.bind(this);
    }

    loadMoreReplies(){
        this.setState({isExpanded: true});
    }

    hideReplySection(){
        this.setState({isExpanded: false});
    }

    render(){
        if(this.state.replies == null && this.state.numberOfRepliesLeft == 0){
            return;
        }
    
        return (
            <div>
                {
                    this.state.replies?.length > 0 && this.state.isExpanded &&
                    <div>
                        <ul>
                            {this.state.replies?.map((reply => 
                            <li>
                                <Reply {...reply} />
                            </li>))}
                        </ul>
                    </div>
                }
                {
                    (!this.state.isExpanded || this.state.numberOfRepliesLeft > 0) &&
                    <div onClick={this.loadMoreReplies}>
                        load {this.state.isExpanded ? "more replies":"replies"}
                    </div>
                }
                {
                    this.state.numberOfRepliesLeft == 0 && this.state.isExpanded &&
                    <div onClick={this.hideReplySection}>
                        hide replies
                    </div>
                }
            </div>
    
        )
    }
}