import { useGlobalContext } from '../context'

function Modal() {
  const {selectedMeal, setShowModal} = useGlobalContext()
  const { strMealThumb: img, strMeal: name, strArea: area, strInstructions: description, strSource: footlink} = selectedMeal;
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <img style={{width: '100%', objectFit: 'cover'}} src={img} alt="" />
        <div style={{padding: '20px'}}>
          <h2 style={{fontSize: '3rem'}}>{name}</h2>
          <h3 style={{fontWeight: 500}}>Area: {area}</h3>
          <p style={{color: 'rgba(0, 0, 0, 0.5)', margin: '10px 0', lineHeight: '1.6'}}>{description}</p>
          <a href={footlink} target='_blank'>Original Source</a>
          <button style={{position: 'absolute', top: '30px', right: '280px', color: '#fff', borderRadius: '8px', padding: '10px'}} onClick={() => {
            // setSelectedMeal({});
            setShowModal(false)
          }}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
