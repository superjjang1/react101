class CoinFlip extends React.Component{
    //this is a child, or subclass
    //a child of React.Component
    //React.Component is the parent or superclass
    //we get cool stuff in CoinFlip because it is a subclass
    constructor(){
        super(); //call super because this is a childclass
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        //react does not care about heads, tails, or coin, at all
        //that is regular JS
        this.coin = [
            this.heads,
            this.tails
        ]
        this.stringer = "You flipped!"
        this.stringer2 = "Oh yes!"
        this.sentence = [
            this.stringer,
            this.stringer2
        ]
        //React cares about state. a lot. React is special
        this.state = {
            image: this.coin[0],
            stringy: this.sentence[0]
        }
        this.flip = this.flip.bind(this) // the ugly way
    }
  ///////////////////////////////////////////////  
    // flip = () =>{

    // }
    flip(){
        console.log("you're flipping doing it!");
        //listen.
        // console.log("Flip was CLicked, facts!");
        //never change state yourself, ever
        //React gave you a setter
        let coinSide = Math.round(Math.random()); //0,1
        this.setState({
            image: this.coin[coinSide]
        })
        let stringSide = Math.round(Math.random());
        this.setState({
            stringy: this.sentence[stringSide]
        })
    }

    render(){

        //it is render's job to return a single DOM element
        //whether you like it or not, render will run right after the constructor.
        //react events are identical (mostly) to regular DOM events,
        //we attach them to the element and use camelCase.
        //we hand them CODE
        return(
            <div className="coin-flip">
                <button className="waves-effect waves-light btn" onClick={this.flip}>Flip!</button>
                <img src={this.state.image} />
                <span>{this.state.stringy}</span>
            </div>
        )
    }
}



ReactDOM.render(
    <CoinFlip />,
    document.getElementById('root')
)