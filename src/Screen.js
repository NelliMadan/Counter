import {Component} from 'react';
import {connect} from 'react-redux';

class Screen extends Component{

    constructor(props){
        super(props);
        this.state={
            show:true
        }
        console.log('Screen constructor');
    }
    
    componentDidMount(){
        console.log('Screen componentDidMount');
    }
    componentDidUpdate(){
        console.log('Screen componentDidUpdate');
    }
    

    componentWillUnmount(){
        console.log('Screen componentWillUnmount');
    }

    render(){
        console.log('Screen render');
        const style = {
            fontSize:'25px',
            fontWeight:500,
            margin:'0 15px'
        };

        return(
            <span style={style}>{this.props.cnt}</span>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        cnt:state.counter
    };
};




export default connect(mapStateToProps)(Screen);

