import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bm';
  msg = 'msg prop';

  woman = 'https://s.yimg.com/ny/api/res/1.2/DkkU6gB1MFx3euaW_Y1c0w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/de_DE/News/contentfleet/zwei-frauen-ein-korper-taylor-muhl-ist-eine-medizinische-sensation-110691.jpg';


  womanInd = 0;
  women: string[] = ['https://s.yimg.com/ny/api/res/1.2/DkkU6gB1MFx3euaW_Y1c0w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/de_DE/News/contentfleet/zwei-frauen-ein-korper-taylor-muhl-ist-eine-medizinische-sensation-110691.jpg', 'http://cdn1.spiegel.de/images/image-1145560-860_poster_16x9-rrlp-1145560.jpg'];


  lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur <strong>deleniti ex illum ipsa</strong> modi optio quibusdam quisquam repudiandae voluptate. Adipisci dolores eaque esse fugiat incidunt optio quas, <script>alert('hallo')</script>quos temporibus.`;

  fontColor = 'green';

  size = 75;

  changeWoman() {
    if ( this.womanInd > 0 ) {
      this.womanInd = 0;
    } else {
      ++ this.womanInd;
    }
  }


  getFeedback( msg?: string): string {
    if ( !! msg ) {
      return `I'm a feedback::: ${msg} ${this.title} `;
    }
    return `I'm a feedback::: ${this.title} `;
  }


}
