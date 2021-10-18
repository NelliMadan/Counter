import {connect} from 'react-redux';
import * as actions from './store/actions';

function PlusButton (props){
    return(
        <button 
        style={{fontSize:'22px'}} 
        onClick = {props.onCountAdd}
        >+</button>
    );
    
}


const mapDispatchToProps = (dispach)=>{
    return {
        onCountAdd:()=>dispach(actions.addCount())
    };
};

export default connect(null,mapDispatchToProps)(PlusButton);