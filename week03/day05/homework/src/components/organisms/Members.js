import Typography from '../atoms/Typography'
import Link from '../atoms/Link'

const Members = () => {
  return (
    <div>
      <div className="flex">
        <Typography variant="title">Members</Typography>
        <h5 className="pull-right">
        <Link title="See all"/>
        </h5>
      </div>
      <div className="members">
        <div>
          <img
            className="members-image"
            src="https://picsum.photos/100"
            alt=""
          />
        </div>
        <div>
          <b>Organizers</b> <p>Adhy Wiranata and 4 others.</p>
        </div>
      </div>
    </div>
  );
};

export default Members;
