import React from "react";
import { Hello } from "@src/components/hello";
import { browser, Tabs } from "webextension-polyfill-ts";
import css from "./styles.module.css";
import { Comment, ICommentProps } from "@src/components/comment";
import exampleIcon from "../components/userProfile/exampleIcon.jpg"
import { FAKE_GOSSIP_CLIENT } from "@src/gossipClient";
// // // //

// Scripts to execute in current tab
const scrollToTopScript = `window.scroll(0,0)`;
const scrollToBottomScript = `window.scroll(0,9999999)`;

/**
 * Executes a string of Javascript on the current tab
 * @param code The string of code to execute on the current tab
 */
function executeScript(code: string): void {
    // Query for the active tab in the current window
    browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs: Tabs.Tab[]) => {
            // Pulls current tab from browser.tabs.query response
            const currentTab: Tabs.Tab | undefined = tabs[0];

            // Short circuits function execution is current tab isn't found
            if (!currentTab) {
                return;
            }

            // Executes the script in the current tab
            browser.tabs
                .executeScript(currentTab.id, {
                    code,
                })
                .then(() => {
                    console.log("Done Scrolling");
                });
        });
}

// // // //

export function Popup() {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        browser.runtime.sendMessage({ popupMounted: true });
    }, []);

    var args: ICommentProps = {
        content: "this is a reply, hahahahahahahahahahh",
        commentID: 123456,
        createdBy: {
            nickName: "BigMiao",
            userID: 233456,
            avatarUrl: "https://pica.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_s.jpg?source=06d4cd63",
        },
        likeBtnProps:{
            score: 100,
        },
        createdWhenTimestampInSecond: 1653985929,
        gossipClient: FAKE_GOSSIP_CLIENT,
        }
    // Renders the component tree
    return (
        <div className={css.popupContainer}>
            <div className="mx-4 my-4">
                <Comment {...args} />
            </div>
        </div>
    );
}
