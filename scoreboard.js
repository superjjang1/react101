// putting a bunch of components in this file
//App is uppercase, which means it's a component.
//all components, without exception, must return a single DOM.
function Counter(props){
    return (
        <div className="counter">
            <div className="buttons">
                <button className="minus waves-effect waves-light btn" >-</button>
                <button className="plus waves-effect waves-light btn">+</button>
            </div>
            <div className="team-score">0</div>
        </div>
    )
}

function Team(props){
    return(
        <div className="team">
            <div className="team-name">{props.name}</div>
            <Counter />                        
        </div>
    )
}



function App(props){
    return(
        <div className="container">
            <div className="row center">
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
                <div className="teams">
                    <Team name="Bears"/>
                    <Team name="Packers"/>
                    
                </div>
            </div>
        </div>
    )
}



//ReactDOM.render takes 2 things
//what
//where


ReactDOM.render(
    <App title = "Opening NFL Game"/>,
    document.querySelector('#root')
)