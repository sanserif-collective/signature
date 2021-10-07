export default ({ name, ...rest }) => {
  return (
    <fieldset>
      <label htmlFor={name}>{ name }&nbsp;:</label>
      <input id={name} name={name} {...rest} />
    </fieldset>
  )
}