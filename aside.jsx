import { useSelector, useDispatch } from "react-redux"
import randomColor from 'randomcolor'
import { change_color } from "../redux/color/ColorSlice"

const Aside = () => {
    const color = useSelector(state => state.color.value)
    const dispatch = useDispatch()

    const changeColor = () =>{
        dispatch(change_color({
            color: randomColor()
        }))
    }
  return (
    <div>
        <h3 style={{color}}>Safuvan K</h3>
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Aside