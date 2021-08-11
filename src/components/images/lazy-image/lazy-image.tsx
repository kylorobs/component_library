import { Component, h, Prop, State, Element } from '@stencil/core';
// import { verifyCloudinaryApprovedUrl } from '../../../utils/utils';


@Component({
    tag: 'lazy-image',
    styleUrl: 'lazy-image.css',
    shadow: true
})

export class LazyImage {

    /** The image URL. Must be a kclsu, cloudinary or kclsu firebase url*/
    @Prop() image: string;
    /** The alt tag of the image */
    @Prop() alt: string = '';
    /** Use standard CSS object-position values to set a focus area on the image. EG 'center left' */
    @Prop() focusarea: string = 'center';
    /** Image will scale into view */
    @Prop() animatein: boolean = false;
    /** A ratio for the image in decimal form. This will fetch the image from cloudinary with an appropriate height at each responsive breakpoint */
    @Prop() ratio:string;
    /** If you want to render an img element in a responsive container without object positioning */
    @Prop() plainimg: boolean = false;
    /** Remove lazy-loading functionality. Retains Object Fit positioing */
    @Prop() nolazy: boolean = false;
    /** Provide a custom cloudinary transformation. Must be in format: string,string,string eg: c_fill,f_auto,fl_any_format  */
    @Prop() customtransform: string;
    /** The % percentage of mobile screens the image will take up. Number only without percent symbol */
    @Prop() mobile: string = "100";
    /** The % percentage of desktop screens the image will take up. Number only without percent symbol */
    @Prop() desktop: string = "100";
    /** Set a minimum pixel width for the image rendered */
    @Prop() minwidth: string;
    /** Set a minimum pixel width for the image rendered */
    @Prop() suppliedwidth: string;

    urlOrigin: 'kclsu' | 'cloudinary' | 'firebase' | 'unknown';
    desktopBreakPoints:number[] = [1920, 1600, 1366];
    mobileBreakPoints:number[] = [1024, 768, 640];

    @Element() el: HTMLElement;

    @State() imageloading: boolean = true;
    @State() imageclasses:any = ['fit', 'show'];

    componentWillLoad(){
        if (this.image.includes('kclsu.org') && !(this.image.includes('res.cloudinary'))) {
            this.urlOrigin = 'kclsu';
        } else if (this.image.includes('res.cloudinary.com')){
            this.urlOrigin = 'cloudinary';
        } else if (this.image.includes('firebase')){
            this.urlOrigin = 'firebase';
        }  else this.urlOrigin = 'unknown';
    }

    createUrl(url, transforms): string{
        switch (this.urlOrigin){
            case 'kclsu' : 
                return `https://res.cloudinary.com/kclsu-media/image/fetch/${transforms}/${url}`
            case 'cloudinary':
                const existingTransforms = /upload\/[\w,]*\//;
                if (existingTransforms.test(url)){
                    //IF THERE ARE CLOUDINARY TRANSFORMS PRESENT ALREADY AND WE WANT REMOVED
                    return url.replace(existingTransforms, `upload/${transforms}/`);
                } else return url
            default:  return 'https://res.cloudinary.com/kclsu-media/image/upload/v1581516201/website_uploads/KCLSU%20Brand/Bzcl1r6L_400x400_se7grm.jpg';
        }
    }

    createTransformation(width:number): string {
        let dimensions = !this.ratio || !this.suppliedwidth ? `w_${width}` : `w_${width},h_${Math.round(width/+this.ratio)}`
        return `f_jpg,c_fill,${dimensions},fl_progressive:steep`; //progressive_jpeg
        //return `c_lfill,f_auto,fl_any_format,w_${width}`;
    }

    createSrc(width: number): string {
         if (this.minwidth && width < +this.minwidth) return '';
        return `${this.createUrl(this.image, this.createTransformation(width))} ${width}w,`
    }

    createSrcSet(){
        return this.desktopBreakPoints
            .map(width => this.createSrc(width * +this.desktop / 100))
            .concat(this.mobileBreakPoints.map(width => this.createSrc(width * +this.mobile / 100)))
            .join(' ')
    }

    
    render() {

        console.log(this.ratio)

        let objectPosition = {
            'object-position': this.focusarea,
         };


        const classes = {
            "loadingimage": !this.plainimg? true : false,
            "plainimg": this.plainimg,
        }

        return (
            <div class={classes}>

                <img
                    loading="lazy"
                    style={objectPosition}
                    class={!this.plainimg? this.imageclasses.join(' ') : ''}
                    src={this.image}
                    srcSet={this.createSrcSet()}
                    alt={this.alt}
                />

            </div>
        )


    }
}
