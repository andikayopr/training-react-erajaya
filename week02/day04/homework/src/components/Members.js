const Members = () => {
  return (
    <div>
      <div className="flex">
        <h4>Members</h4>
        <h5 className="pull-right">
          <a href="#">See all</a>
        </h5>
      </div>
      <div className="members">
        <div>
          <img className="members-image" src="https://picsum.photos/100" alt="" />
        </div>
        <div>
          <b>Organizers</b> <p>Adhy Wiranata and 4 others.</p>
        </div>
      </div>
    </div>
  );
};

export default Members;
