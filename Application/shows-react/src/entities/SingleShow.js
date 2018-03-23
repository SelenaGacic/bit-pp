import { Show } from "./Show.js";

export class SingleShow extends Show {
    constructor(id, name, image, summary) {
        super("", name, image);
        this.summary = summary;
    }
}

