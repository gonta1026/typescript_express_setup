import { initializeApp } from "./config/initializer"; //初期化
import { usersIndex } from "./controller/users";
import { userCreate, validateStoreCreate } from "./controller/users/create";

// import { storesShow, validateStoreShow } from "src/controllers/stores/show";

// import {
//   storesUpdate,validateStoreCreate
//   validateStoreUpdate,
// } from "src/controllers/stores/update";
// import { storesFindLikeName } from "~/src/controllers/stores/findLikeName";
// import { storesFindFullText } from "~/src/controllers/stores/findFullText";
// import { reviewsCreate } from "./controllers/reviews/create";
// import { validateStoreDelete, storesDelete } from "./controllers/stores/delete";

if (!process.env.APP_PORT) {
    process.exit();
}

(async () => {
    const { app, db } = await initializeApp();
    app.get("/", (req, res, next): void => {
        res.send(`<h1>Hello World</h1>`);
    })

    // fetch all stores
    // curl -X GET 'http://localhost:8080/api/users'
    app.get("/api/users", usersIndex(db));
    // curl -X POST application/json" -d '{"firstName":"my shop name", "lastName":"Fast Food", "age":25}' "http://localhost:8080/api/users"
    //   curl -X POST -H "Content-Type: application/json" -d '{"firstName":"my shop name", "lastName":"Fast Food", "age":25}' "http://localhost:8080/api/users"

    app.post("/api/users", validateStoreCreate, userCreate(db))


    app.listen(process.env.APP_PORT, () => {
        console.log(`Node Server started! port ${process.env.PORT || 8080}`);
    });
})();

/* これは何に使っているか不明 */
// export type App = ReturnType<typeof initializeApp>;
