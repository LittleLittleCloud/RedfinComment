interface IReply {
    replyID: number;
    content: string;
    createdBy: IUser;
    createdWhenTimestampInSecond: number;
}

interface IUser {
    userID: number;
    avatarUrl: string;
    nickName: string;
}

interface IComment {
    commentID: number;
    content: string;
    createdBy: IUser;
    createdWhenTimestampInSecond: number;
}

interface ITopic {
    topciID: number;
    createdWhenTimstampInSecond: number;
}

interface IGossipClient {
    getReplies: (
        comment: IComment,
        section: number,
    ) => Promise<IReply[] | null>;

    getRepliesCount: (
        comment: IComment,
        beforeTimestampInSeconds: number,
    ) => Promise<number>;

    getComments: (topic: ITopic, section: number) => Promise<IComment[] | null>;
}

class FakeGossipClient implements IGossipClient {
    async getReplies(
        comment: IComment,
        section: number,
    ): Promise<IReply[] | null> {
        var res = Array.from(Array(23).keys()).map<IReply>((v, i) => {
            var reply: IReply = {
                replyID: comment.commentID + i + section,
                content:
                    comment.content + " reply " + i + " section " + section,
                createdBy: comment.createdBy,
                createdWhenTimestampInSecond:
                    comment.createdWhenTimestampInSecond + i * 1000,
            };

            return reply;
        });

        return res;
    }

    async getRepliesCount(
        comment: IComment,
        beforeTimestampInSeconds: number,
    ): Promise<number> {
        return 99;
    }

    async getComments(
        topic: ITopic,
        section: number,
    ): Promise<IComment[] | null> {
        var res = Array.from(Array(15).keys()).map<IComment>((v, i) => {
            var comment: IComment = {
                commentID: this.generateRandomID(),
                content: "Hello this is comment " + v,
                createdBy: this.randomUserGenerator(),
                createdWhenTimestampInSecond: topic.createdWhenTimstampInSecond,
            };

            return comment;
        });

        return res;
    }

    generateRandomID(): number {
        return Math.floor(Math.random() * 10086);
    }

    randomUserGenerator(): IUser {
        var randomNickName = "";
        var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < 10; i++) {
            randomNickName += characters.charAt(
                Math.floor(Math.random() * charactersLength),
            );
        }

        return {
            userID: Math.floor(Math.random() * 10086),
            nickName: randomNickName,
            avatarUrl:
                "https://pica.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_s.jpg?source=06d4cd63",
        } as IUser;
    }
}

const FAKE_GOSSIP_CLIENT = new FakeGossipClient();

export {
    FakeGossipClient,
    IGossipClient,
    IUser,
    IReply,
    IComment,
    FAKE_GOSSIP_CLIENT,
};
