const PastMeetup = () => {
  return (
    <div>
      <div className="flex">
        <h4>Past Meetups</h4>
        <h5 className="pull-right"><a href="#">See all</a></h5>
      </div>
      <div className="past-meetup-columns">
        <div className="past-meetup-columns__column">
          <div className="past-meetup-date secondary-color">27 April 2017</div>
          <p>#38 JakartaJS April Meetup with kumparan</p>
          <p><strong><span className="secondary-color">139</span> went</strong></p>
          <button className="main-button" role="button">
            View
          </button>
        </div>
        <div className="past-meetup-columns__column block">
          <div className="past-meetup-date secondary-color">28 August 2017</div>
          <p>#39 JakartaJS August Meetup with Blibli</p>
          <p><strong><span className="secondary-color">113</span> went</strong></p>
          <button className="main-button" role="button">
            View
          </button>
        </div>
        <div className="past-meetup-columns__column">
          <div className="past-meetup-date secondary-color">29 December 2017</div>
          <p>#40 JakartaJS December Meetup with Hactiv8</p>
          <p><strong><span className="secondary-color">110</span> went</strong></p>
          <button className="main-button" role="button">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastMeetup;
