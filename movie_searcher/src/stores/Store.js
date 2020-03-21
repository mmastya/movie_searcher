import { observable, action, configure } from "mobx";
import { films } from "../dataSource/index";
import { tags } from "../dataSource/index";

configure({ enforceActions: "observed" });

export const Store = observable(
    {
        results: [],
        tags: [],
        selectedTags: [],
        search: "",
        limit: 15,
        offset: 0,     
        get moviesList() {
            let allMovies = this.results; //movies = all array with movies
            
            return allMovies.filter((movie) => {
                const indexOfBySearch = movie.title.indexOf(this.search) !== -1;

                if (this.selectedTags.length > 0) {
                    const findBySelectedTags = movie.tags.find((tag) =>
                    this.selectedTags.includes(tag),
                    );
            
                    return indexOfBySearch && findBySelectedTags;
                }
                console.log(indexOfBySearch);
                return indexOfBySearch;
            });
        },
        get isFiltered(){
            return this.search !== "" || this.selectedTags.length > 0;
        },
        get allTags () {
            const allTags = this.tags;
            return allTags;
        },
        init(){
            this.results = films;
            this.tags = tags;
        },
        setSearch(search) {
            this.search = search;
        },
        setTags(selectedTags) {
            this.selectedTags = selectedTags;
        },
        setLimit(limit) {
            this.limit = limit;
        }
    },
    {
        init: action, setSearch: action, setTags: action, setLimit: action
    }
) 
