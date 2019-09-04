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
                    <div className="card-title">
                        <p>{props.data.course}</p>
                    </div>
                    <div className="card-content">
                        <p>{props.data.instructor}</p>
                    </div>
                </div>
            </div>    
    )
}
console.log(data);







