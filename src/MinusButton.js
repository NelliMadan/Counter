import {connect} from 'react-redux';
import * as actions from './store/actions';

function MinusButton (props){


    return(
        <button 
        style={{fontSize:'22px'}} 
        onClick = {props.onCountSub}
        >-</button>
    );
    
}

const mapDispatchToProps = (dispach)=>{
    return {
        onCountSub:()=>dispach(actions.subCount())
    };
};

export default connect(null,mapDispatchToProps)(MinusButton);

