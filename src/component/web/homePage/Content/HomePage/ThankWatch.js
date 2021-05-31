import React, { Component } from 'react';

class ThankWatch extends Component {
    render() {
        return (
            <div className="left-card">
                <div className="card">
                    <video width="100%" height="auto" id="vid4" loop>
                        <source src="img/indexx/mixkit-photographer-sitting-on-the-floor-on-a-white-background-34426-large.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="content">
                    <h1>Thank For Your Visiting</h1>
                    <h3>We're best endow here</h3>
                    <video id="hiddenVideo" hidden width="100%" height="auto" loop>
                        <source src="img/indexx/mixkit-photographer-sitting-on-the-floor-on-a-white-background-34426-large.mp4" type="video/mp4" />
                    </video>
                    <div className="smaller-content">
                        <div className="c1">
                            <h4>Multiple physical cards</h4>
                            <p>Create multiple physical sub-cards on your account for family or staff. Each card can have its own unique
          card holder name and card balance.</p>
                            <h4>Multiple checking accounts</h4>
                            <p>Create multiple FDIC insured checking accounts with ATM access.</p>
                            <h4>Wires</h4>
                            <p>Send and receive ACH and Wires.</p>
                            <h4>Charity donations</h4>
                            <p>Any time you use one of your cards, we’ll automatically send a fully tax deductible donation to the
          charity of your choice.</p>
                        </div>
                        <div className="c2">
                            <h4>Unlimited virtual cards</h4>
                            <p>Create any number of virtual cards; a real debit card number, but without the physical card. These cards
          can be used anywhere debit cards are accepted and can even be used with Apple Pay and Google Pay.</p>
                            <h4>User accounts</h4>
                            <p>Add any number of users to your Letter account, each with custom permissions and access levels.</p>
                            <h4>Easy account management</h4>
                            <p>Manage everything from the Letter app or website.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThankWatch;