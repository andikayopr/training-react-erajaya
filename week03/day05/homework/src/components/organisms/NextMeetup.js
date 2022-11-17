import Typography from "../atoms/Typography";

const NextMeetup = () => {
  return (
    <div>
      <Typography variant="title">Next Meetup</Typography>
      <div className="next-meetup">
        <div>
          <div><Typography variant="subtitle">Awesome meetup and event</Typography></div>
          <div>25 January 2019</div>
          <div>
            <p>
              <Typography variant="body">
                Hellow, Javascript & Node.js Ninjas! Get ready for our monthly
                meetup JakartaJS! This will be our fifth meetup of 2018! The
                meetup format will contain some short stories and technical talks.
                If you have a short announcement you'd like to share with the
                audience, you may do so during open mic announcements. <br />
                Remember to bring photoID to get through building security
              </Typography>
            </p>

            <p><Typography variant="body">See you there!</Typography></p>

            <p>
              <Typography variant="body">
              Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS
              Organizers.
              </Typography>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMeetup;
