import { Component,getAssetPath,h,Prop } from '@stencil/core'

@Component({
    tag:'my-modal',
    styleUrl:'my-modal.css',
    shadow:false,
    assetsDirs: ['assets']
})
export class MyModal{
    @Prop() img = "book_1.jpg";


    componentWillLoad() {
    
    }
    render(){
        return (
            <div class='modal'>
            <div class="textDiv">
                    <samp>Get your favourite Books</samp> 
                    <div class="listStyle">
                    <div class="l1 green"><a href='/category/2'>Comic +</a> </div>
                    <div class="l1 red"> <a href='/category/1'>Novel +</a></div>
                    <div class="l1"> <a href='/category/3'>Sci-Fi +</a></div>
                    <div class="l1 green">Thriller +</div>
                    <div class="l1 red">Romance +</div>
                    <div class="l1 brown">Westerns +</div>
                    </div>
                    <h2>
                        500+ Books, Comics, Novel More
                    </h2>
                </div>
                    <div class="slide">
                            <div class="mySlides fade1">
                            <img  class="mySlides_img "src={getAssetPath(`./assets/${this.img}`)} />
                        </div>
                    </div>
                </div>
        );
    }
}