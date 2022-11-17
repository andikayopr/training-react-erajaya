import propTypes from 'prop-types'

export default function Button(props) {
  return <button style={{backgroundColor: props.color}}>{props.title}</button>;
};

Button.propTypes = {
    color: propTypes.string,
    title: propTypes.string.isRequired
}
