import Typography from "../atoms/Typography";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="footer">
      <Typography variant="body">Copyright {props.by} &copy; {props.year}</Typography>
    </div>
  );
};

Footer.propTypes = {
  by: PropTypes.string,
  year: PropTypes.string,
};

export default Footer;
