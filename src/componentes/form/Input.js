import Styles from './Input.module.css'

const Input = ({id, label, type, onChange, error, onblur}) => {
  return(
    <div className={`${Styles.wrapper}`}>
      <label className={Styles.label} htmlFor={id}>{label}</label>
      <input 
        className={Styles.input} 
        type={type} id={id} 
        name={id} 
        onChange={onChange}
        onBlur={onblur}
        />
      {error && <p className={Styles.error}>{error}</p>}
    </div>
  )
}
export default Input