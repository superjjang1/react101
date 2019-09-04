// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT
function Data(props){
    console.log(props);
    // const  = "Robert Bunch";    
    // const title = "React From the Beginning";
    // const title = props.title;
    return (
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={props.data.image} />
                    </div>
                    <span className="card-title">
                        <p>{props.data.instructor}</p>
                    </span>
                    <div className="card-content">
                        <p>{props.data.course}</p>
                    </div>
                </div>
            </div>    
    )
}
console.log(data);







