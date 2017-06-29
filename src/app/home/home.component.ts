import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared';
import {ENV} from '../config/environment';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    news: any;
    selectedNews: any;

    constructor(private api: ApiService) {
        // Do stuff
        this.news = [];
        let self = this;

        this.api.getNews().then(
            (result) => {
                console.log(ENV.SERVER_URL);
                self.news = result['contentlets'];
                for (let i = 0; i < self.news.length; i ++) {
                    self.news[i].thumbUrl = ENV.SERVER_URL + ENV.THUMBNAIL_URL + self.news[i].imageContentAsset;
                    self.news[i].imageUrl = ENV.SERVER_URL + self.news[i].image.substring(1);
                    self.news[i].selected = (i == 0) ? true : false;
                }
                self.selectedNews = self.news[0];
                console.log(self.news);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    ngOnInit() {
        console.log('Hello Home');
    }

    public viewNews(item) {
        for (let i = 0; i < this.news.length; i ++) {
            this.news[i].selected = false;
        }
        item.selected = true;
        this.selectedNews = item;
    }

}
