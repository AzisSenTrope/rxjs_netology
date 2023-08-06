import {getUrl} from "./getUrl";
import {ajax} from "rxjs/ajax";
import {map, pluck} from "rxjs/operators";

export function subscribeGit(event: Event) {
    event.preventDefault();

    try {
        const url = getUrl(event)

        const data = ajax
            .getJSON(url)
            .pipe(
                map((items) => {
                    if (Array.isArray(items)) {
                        return {items};
                    }

                    return items;
                }),
                pluck('items')
            );

        data.subscribe(console.log);
    } catch (error) {
        console.log({error})
    }
}