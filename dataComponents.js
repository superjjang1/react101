ReactDOM.render(
    <div className="container">
        <div className="row">
                <Data data={data[0]}/>
                <Data data={data[1]}/>
                <Data data={data[2]}/>
                <Data data={data[3]}/>
            </div>
        </div>,
    document.querySelector('#root')
)