import {useState,useEffect,memo,useMemo} from 'react';
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import Screen from "./Screen";
import {connect} from 'react-redux';
import * as actions from './store/actions';

/* class Counter extends Component{
constructor(props){
    super(props);
    this.state={
        show:true
    }
    console.log('Counter constructor');
}

componentDidMount(){
    console.log('Counter componentDidMount');
}
componentDidUpdate(){
    console.log('Counter componentDidUpdate');
}



clickHandler = ()=>{
    this.setState({show:!this.state.show})
}
    render(){
        console.log('Counter render');
        return(
            <>
                <MinusButton />
                {
                    this.state.show && <Screen/>
                }
                
                <PlusButton/>
                <p> 
                  <button onClick={this.clickHandler}>clicke me</button>  
                </p>
                
            </>
        );
    }
} */
function Counter (props){
    
    const [show,toggle] = useState(true)
    const [inputValue,setInputValue] = useState('');
    

    const clickHandler = ()=>{
        console.log('click');
        toggle(!show)
    }

    //componentDidMount componentDidUpdate
    useEffect(()=>{
        console.log('useEffect 1');
    });

    //componentDidMount
    useEffect(()=>{
        console.log('useEffect 2');
    },[]);

    //componentDidMount 
    useEffect(()=>{
        console.log('useEffect 3');
    },[show,inputValue]);

    return(
        <>
            <MinusButton />
            {
                show &&  <Screen/>
            }
            
            <PlusButton/>
            <div> 
                <button onClick={clickHandler}>clicke me</button>  
                <div>
                    <input type="text" 
                    value={inputValue}
                    onChange={(event)=>{
                        setInputValue(event.target.value)
                    }}/>
                    <h1>{inputValue}</h1>
                </div>
            </div>
        </>
    );
        
}


export default connect()(Counter);