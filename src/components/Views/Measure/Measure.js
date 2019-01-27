import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Measure.css'

const emptyInput = {
    band: '',
    bust: '',
    cup: '',
    error: false,
    position: '0px',
    uparrowpos: '0px',
    downarrowpos: '0px'
}

class MeasureOne extends Component {

    state = emptyInput;

    handleChange = ( event ) => {
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.brasize();
    }

    brasize = () => {
        let band = this.state.band;
        let bust = this.state.bust;
        let calculation = bust - band;
        let cup = "";
        switch (calculation)
        {
            case 1:
                cup = "A";
                break;
            case 2:
                cup = "B";
                break;
            case 3:
                cup = "C";
                break;	
            case 4:
                cup = "D";
                break;
            case 5:
                cup = "E";
                break;
            case 6:
                cup = "F";
                break;
            case 7:
                  cup = "G";
                break;
            case 8:
                cup = "H";
                break;
            case 9:
                cup = "I";
                break;
            case 10:
                cup = "J";
                break;
            case 11:
                cup = "K";
                break;
        }
      
      
        if (band % 2 !== 0)
        {
            band ++;
        }
        let position = parseInt(0) + parseInt(58*(band - 27));
        position = position + 'px';
        console.log(position);
        
        let uparrowpos = parseInt(0) + parseInt(58*(band - 28));
        uparrowpos = uparrowpos + 'px';
        console.log(uparrowpos);
        

        let downarrowpos = parseInt(0) + parseInt(58*(bust - 28));
        downarrowpos = downarrowpos + 'px';
        console.log(downarrowpos);


        if (bust < band)
        {
            this.setState({error: true});
            // document.getElementById("bustsize").style.setProperty("visibility", "hidden");
            // document.getElementById("arrowdown").style.setProperty("visibility", "hidden");
            // document.getElementById("arrowup").style.setProperty("visibility", "hidden");
            // document.getElementById("output").style.setProperty("color", "red");
            // document.getElementById("output").innerHTML = ("Error. Bust size should be larger than band size.");
        }
        else {
            this.setState({band: band, cup: cup, position: {left: position}, uparrowpos: {left: uparrowpos}, downarrowpos: {left: downarrowpos}});
        // document.getElementById("bustsize").style.setProperty("left", position + "px", "important");
        // document.getElementById("arrowup").style.setProperty("left", uparrowpos + "px", "important");
        // document.getElementById("arrowdown").style.setProperty("left", downarrowpos + "px", "important");
      }
      
      }
      

    render() {

    return (
        <div>
           <h1>The BRAlculator</h1>

            <form className="findbrasize" onSubmit={this.handleSubmit}>
            Band size in inches:<br/>
            <input required value={this.state.band} onChange={this.handleChange} id="band" type="number" name="band"/><br/>
            Bust size in inches:<br/>
            <input required id="bust" value={this.state.bust} onChange={this.handleChange} type="number" name="bust"/><br/>	
            <button type='submit'>Submit</button>	
            </form>

            <div className="measurements">

            {this.state.cup && 
            <div className="arrowdown" style={this.state.downarrowpos}>
            <img src="arrowdown.png"/>
            </div>}

            {this.state.cup && 
            <div className="bustsize" style={this.state.position}>
            <img src="bustsize.png"/>
            </div>}

            <br/>

            <div className="bandsize">
            <img src="bandsize.png"/>
            </div>

            {this.state.cup && 
            <div className="arrowup" style={this.state.uparrowpos}>
            <img src="arrowup.png"/>
            </div>}

            </div>
            {this.state.cup && <p className="output">Your bra size is {this.state.band}{this.state.cup}.</p>}
        </div>
    )
    }
}

const mapStateToProps = reduxState => ({ reduxState }); 

export default connect(mapStateToProps)(MeasureOne);