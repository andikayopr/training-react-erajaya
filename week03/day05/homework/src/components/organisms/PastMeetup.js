import Button from "../atoms/Button";
import Link from "../atoms/Link";
import Typography from "../atoms/Typography";
import Card from '../molecules/Card'

const PastMeetup = () => {
  return (
    <div>
      <div className="flex">
        <Typography variant="title">Past Meetups</Typography>
        <h5 className="pull-right">
          <Link title="See all"/>
        </h5>
      </div>
      <div className="cards">
        
        <Card title="27 April 2022">
          <p>#38 JakartaJS April Meetup with kumparan</p>
          <p>
            <strong>
              <span className="secondary-color">139</span> went
            </strong>
          </p>
          <Button title="View" className="btn-primary" />
        </Card>

        <Card title="28 August 2022">
          <p>#39 JakartaJS August Meetup with kumparan</p>
          <p>
            <strong>
              <span className="secondary-color">139</span> went
            </strong>
          </p>
          <Button title="View" className="btn-primary" />
        </Card>
        
        <Card title="29 November 2022">
          <p>#40 JakartaJS November Meetup with kumparan</p>
          <p>
            <strong>
              <span className="secondary-color">139</span> went
            </strong>
          </p>
          <Button title="View" className="btn-primary" />
        </Card>
        
      </div>
    </div>
  );
};

export default PastMeetup;
