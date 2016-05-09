import "jaydata/odata";
import {Component} from '@angular/core';
import { type, factory, JayData, $data } from './JayDataContext';

@Component({
    selector: 'my-app',
    template: `
        <h1>JayData Angular2 example</h1>
        <h2>Articles</h2>
        <ul>
            <li *ngFor="#article of articles">{{ article.Title }} - {{ article.Category.Title }}</li>
        </ul>
    `
})
export class AppComponent {
    articles: JayData.Test.CommonItems.Entities.Article[]
    constructor(){
        factory({}).onReady().then((ctx) => {
            var a = new ctx.Articles.elementType();
            var b = new ctx.Articles.elementType();
            
            var c = new ctx.Articles.elementType();
            ctx.Articles.add(a);
            
            a.propertyChanged.attach((sender, event) => { console.log('EVENT PROP CHANGED', sender, event); });
            a.Title = "new title";
            
            console.log('Article state', a.entityState, a.changedProperties[0].kind, a.entityState == $data.EntityState.Added);
            
            //$data('JayData.Test.CommonItems.Entities.Article').addMember('almafa', { type: 'int' });
            
            var article = new ctx.Articles.elementType();
            console.log('!!!!!!!!!!!!!!!!!!!!!', article instanceof ctx.Articles.elementType);
            article.Title = 'alma';
            
            ctx.Articles.include("Category").toArray().then(result => this.articles = result);
        });
    }

}
