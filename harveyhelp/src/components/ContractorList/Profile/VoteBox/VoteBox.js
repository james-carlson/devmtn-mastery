import React, { Component } from 'react';
import "./VoteBox.css";
import { connect } from 'react-redux';
import { deleteContractor } from './../../../../ducks/reducer';

class VoteBox extends Component {

    componentDidMount() {

    }

    render() {

        const upVote = (event) => {
            console.log("upvote");
        }
        const downVote = (event) => {
            console.log("downvote");
        }
        let list = this.props.contractors.map((contractor, i) => {
            console.log(contractor);
            return(<section key={i}>
                <div className="list-item">
                    <span>
                        <div><button onClick={upVote}>UpVote</button></div>
                        <div><button onClick={downVote}>DownVote</button></div>
                    </span>
                    <div>
                        {contractor.contractor_name}
                    </div>
                    {console.log(contractor.contractor_id)}
                    <div><button onClick={()=>deleteContractor(contractor.contractor_id)}>DELETE</button></div>
                </div>
            </section>
            )
        })

        return (
            <div>
                {this.props.contractors ? list : "Loading contractors"}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return state
}

const outputActions = {
 deleteContractor
}

export default connect(mapStateToProps, outputActions)(VoteBox)