import './index.css'

const ButtonsList = props => {
  const {buttonDetails, onUpdateBtnId, activeBtnId} = props

  const {id, buttonText} = buttonDetails

  const onClickBtn = () => {
    onUpdateBtnId(id)
  }

  const isActive = activeBtnId === id ? 'active-btn' : ''

  return (
    <li>
      <button className={`btn ${isActive}`} type="button" onClick={onClickBtn}>
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonsList
