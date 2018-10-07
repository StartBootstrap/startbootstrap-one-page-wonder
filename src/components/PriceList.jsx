import React from 'react';

export default class PriceList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section class="page-section cta">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-9 mx-auto">
                                <div class="cta-inner text-center rounded">
                                    <h2 class="section-heading mb-5">
                                        <span class="section-heading-upper">Bookings By Appointment </span>
                                        {/* <span class="section-heading-lower">We're Open</span> */}
                                    </h2>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Lip Mask
                                            <span class="ml-auto">$5</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                45 minutes
                                            </span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                <em>With any treatment</em>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Infills 3 Weeks - Regular Set
                                            <span class="ml-auto">$65</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                1 Hour 35 minutes
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Infills 2 Weeks - Regular Set
                                            <span class="ml-auto">$45</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                1 Hour
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Infills 2 Weeks - Power Set
                                            <span class="ml-auto">$65</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                1 Hours 30 minutes
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Power Set Classic Extensions
                                            <span class="ml-auto">$95</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                2 Hours 30 minutes
                                            </span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                <em>90-120 lashes per eye. (Every lash possible extended)</em>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Infills 3 Weeks - Power Set
                                            <span class="ml-auto">$75</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                2 Hours
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Lash Removal
                                            <span class="ml-auto">$25</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                30 minutes
                                            </span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                <em>The fee is waved if you are booking a full new set with us.</em>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Regular Set Classic Extensions
                                            <span class="ml-auto">$80</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                1 Hours 30 minutes
                                            </span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            <span className="subheading">
                                                <em>75-90 lashes per eye. (Duration can vary slightly)</em>
                                            </span>
                                        </li>
                                    </ul>
                                    <p class="address mb-5">
                                        <em>
                                            <strong>13 McLachlan Way</strong>
                                            <br />
                                            Pokeno, Auckland
                                            </em>
                                    </p>
                                    <p class="mb-0">
                                        <small>
                                            <em>Call Anytime</em>
                                        </small>
                                        <br />
                                        027 624 8778
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        )
    }
}