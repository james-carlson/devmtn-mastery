import React from 'react';

export const VoteBox = ({contractors}) => {
    const upVote = (event) => {
        console.log("upvote");
    }
    const downVote = (event) => {
        console.log("downvote");
    }

    return (
        <div>
            <div>VoteBox</div>
            {JSON.stringify(contractors)}
            <button onClick={upVote}>UpVote</button>
            <button onClick={downVote}>DownVote</button>
        </div>
    )
}