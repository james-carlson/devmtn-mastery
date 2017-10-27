import React from 'react';
import "./VoteBox.css";

export const VoteBox = ({ contractors }) => {
    const upVote = (event) => {
        console.log("upvote");
    }
    const downVote = (event) => {
        console.log("downvote");
    }

    const list = contractors.map(contractor => {
        return (
            <section>
                <div className="list-item">
                    <span>
                        <div><button onClick={upVote}>UpVote</button></div>
                        <div><button onClick={downVote}>DownVote</button></div>
                    </span>
                    <div>
                        {contractor.name}
                    </div>
                </div>
            </section>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}