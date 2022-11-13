const Headline = () => {
  return (
    <div className="headline">
      <div className="headline-image">
        <img src="https://picsum.photos/seed/picsum/200/200" alt="" />
      </div>
      <div className="headline-detail">
        <h2 className="main-color">Hactiv8 Meetup</h2>
        <p className="main-color">Location: Jakarta, Indonesia</p>
        <p className="main-color">Member: 1078</p>
        <p className="main-color">Organizers: Adhy Wiranata</p>
        <button className="main-button" role="button">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Headline;
