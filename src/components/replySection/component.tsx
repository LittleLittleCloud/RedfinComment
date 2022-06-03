import { IComment, IGossipClient, IReply } from "@src/gossipClient";
import React from "react";
import { Reply } from "../reply/component";

export interface ReplySectionProps{
    replies?: IReply[],
    numberOfReplies: number,
    gossipClient: IGossipClient,
    comment: IComment,
}

export interface ReplySectionState extends ReplySectionProps{
    isExpanded?: boolean,
    section: number
}

export class ReplySection extends React.Component<ReplySectionProps, ReplySectionState>{
    constructor(props: ReplySectionProps){
        super(props);
        this.state = {...props, isExpanded: false, section: 0};

        this.loadMoreReplies = this.loadMoreReplies.bind(this);
        this.hideReplySection = this.hideReplySection.bind(this);
    }

    async loadMoreReplies(){
        var newReplies = await this.props.gossipClient.getReplies(this.props.comment, this.state.section);
        newReplies = this.state.replies?.concat(...newReplies!)!;
        var leftComments = this.state.numberOfReplies - newReplies.length;
        if(leftComments < 0){
            leftComments = 0;
        }
        
        this.setState({isExpanded: true, replies: newReplies, numberOfReplies: leftComments, section: this.state.section + 1})
    }

    hideReplySection(){
        this.setState({isExpanded: false});
    }

    render(){
        if(this.state.replies == null && this.state.numberOfReplies == 0){
            return;
        }
    
        return (
            <div>
                {
                    this.state.replies?.length! > 0 && this.state.isExpanded &&
                    <div>
                        <ul>
                            {this.state.replies?.map((reply => 
                            <li>
                                <Reply gossipClient={this.props.gossipClient} {...reply}/>
                            </li>))}
                        </ul>
                    </div>
                }
                {
                    (!this.state.isExpanded || this.state.numberOfReplies > 0) &&
                    <div onClick={this.loadMoreReplies}>
                        load {this.state.isExpanded ? "more replies":"replies"}
                    </div>
                }
                {
                    this.state.numberOfReplies == 0 && this.state.isExpanded &&
                    <div onClick={this.hideReplySection}>
                        hide replies
                    </div>
                }
            </div>
    
        )
    }
}