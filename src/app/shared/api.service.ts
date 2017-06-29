import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ApiService {

    constructor(public http: Http) {
    }

    public getNews() {
        let newsUrl = 'https://demo.dotcms.com/api/content/render/false/type/json/query/+contentType:News%20+(conhost:48190c8c-42c4-46af-8d1a-0cd5db894797%20conhost:SYSTEM_HOST)%20+languageId:1%20+deleted:false%20+working:true/orderby/News.sysPublishDate%20desc';
        return new Promise((resolve, reject) => {
            this.http.get(newsUrl).map(res => res.json()).subscribe(
                data => {
                    console.log(data);
                    resolve(data);
                },
                err => {
                    reject(err);
                },
                () => console.log("Get News")
            );
        });
    }
}
