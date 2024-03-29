import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'arrow-button',
    styleUrl: 'arrow-button.css',
    shadow: true
})
export class ArrowButton {
    /** The callback function for the button */
    @Prop() callback: () => void;
    /** Set the direction of the arrow button (and the side of the containing element it appears on) */
    @Prop() direction:string = 'left';
    /** Turn the button purple */
    @Prop() purple:boolean = false;

    clickHandler(e){
        e.preventDefault();
        this.callback();
    }
    
    render() {

        const position = {};
        position[this.direction] = 0;

        return (
            <button style={position} class={`${this.purple? 'purple' : 'teal'}`} onClick={this.callback}>
                <span class={this.direction}></span>
            </button>
        );
    }
}