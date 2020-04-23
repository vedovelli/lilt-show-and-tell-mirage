// import { Response } from "miragejs";

export function routes() {
  this.urlPrefix = "https://api.themoviedb.org";
  this.namespace = "/3/search";

  // this.timing = 3000;

  // this.get("/movie", () => new Response(500, {}, "Server is quarantined!"));

  this.get("/movie", (schema, req) => {
    const {
      queryParams: { query: title },
    } = req;

    return {
      results: schema.movies.where({ title }).models.map(({ attrs }) => attrs),
    };
  });
}
