import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  
@Input() postTitle: string;
@Input() postDate : Date;
@Input() postContent: string;
@Input() loveIts: number;
  


  constructor() {

  }

  ngOnInit() {
  }

  onClickOnLoveIt() {
    this.loveIts++
    console.log('Love it! : ' + this.loveIts + ' click(s)')
  }

  onClickOnDontLoveIt() {
    this.loveIts--
    console.log('Don\'t love it! : ' + this.loveIts + ' click(s)')
  }

  getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    } else {
      return 'white';
    }
  }

}
