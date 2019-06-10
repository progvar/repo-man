import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../search';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    @Input() public repos: Repo[];

    constructor() { }

    ngOnInit() {
    }

}
