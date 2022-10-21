import { useSelector } from 'react-redux'
import Zcompo from './Zcompo'

export default function Acompo() {

    const account = useSelector(state => state.account)
    return (
        <div>
            <h1>A Compo</h1>
            <h4>{account}</h4>
            <hr />
            <Zcompo />
        </div>

    )
}
