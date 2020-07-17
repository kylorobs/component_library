import { Component, h, Prop, Event, EventEmitter} from '@stencil/core';


@Component({
    tag: 'kclsu-button',
    styleUrl: 'kclsu-button.css',
    shadow: true
})
export class KclsuButton {

    /** The text for the button */
    @Prop() text: string;
    /** The URL to link to */
    @Prop() link: string;
    /** Event Listener name */
    @Prop() emitid: string;
    /** Make the button a secondary purple button */
    @Prop() purple: boolean;
    /** Give the button rounded corners */
    @Prop() rounded: boolean;
    /** Make the button small */
    @Prop() small: boolean;
    /** Makes the button very small */
    @Prop() verysmall: boolean;
    /** Makes the link download */
    @Prop() download: boolean;
    /** Centers the button in the page */
    @Prop() center: boolean;
    /** Adds icon to the page */
    @Prop() icon: string;
    /** Opens the link in a new tab*/
    @Prop() newtab: boolean;
    /** Give the button a fixed width*/
    @Prop() fixedwidth: string;
    

    @Event()emitClick:EventEmitter;

    clickHandler(e){
        e.preventDefault();
        this.emitClick.emit(this.emitid)
    }

    
    render() {

        let classes =  [];
        !this.purple? classes.push('green') : classes.push('purple');
        this.rounded? classes.push('rounded') : null;
        if (this.small) classes.push('small')
        else if (this.verysmall) classes.push('verysmall') 
        else classes.push('big');
        let link;

        if (this.link){
            link = <a href={this.link} target={this.newtab? "_blank" : "_self"}  class={classes.join(' ')}>{this.text}<slot></slot></a>
        }

        else link = <a onClick={(e) => this.clickHandler(e)} class={classes.join(' ')}>{this.text}<slot></slot></a>;

        return (
        <flex-container alignx={this.center? 'center' : 'flex-start'} fillcontainer>
            {link}
        </flex-container>)
            
        

    }
}