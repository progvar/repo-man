import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Repo, SearchResponse } from './search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    public searchQuery = '';
    public repos: Subject<Repo[]> = new Subject();

    constructor(private httpClient: HttpClient) {}

    onSearch(query: string): void {
        if (!query) {
            return;
        }

        const url = 'https://api.github.com/search/repositories';
        const params: { [key: string]: string } = {
            q: query
        };

        this.httpClient
            .get<SearchResponse>(url, { params })
            .subscribe((res: SearchResponse) => {
                this.repos.next(res.items);
            });
    }

}
