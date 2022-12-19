import { createStore} from 'redux'
import { allReducers } from "./allReducers";

const kamarTidur = () => {
    return {
        lemari: ['baju', 'celana', 'jaket'],
        meja: {
            atas: ['komputer', 'mouse', 'keyboard'],
            laci: ['kabel', 'charger']
        }
    }
}

const dapur = () => {
    return ['pisau', 'wajan', 'dll']
}

// const allReducers = combineReducers({
//     kamarTidurObi : kamarTidur,
//     dapur
// })

export const rumahKita = createStore(allReducers);
