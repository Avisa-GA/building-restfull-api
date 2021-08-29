import { addNewContact, getContacts } from "../controllers/crmController";

const routes = (app) => {
  app.route("/contact").get(getContacts).post(addNewContact);

  app
    .route("/contact/:contactID")
    .put((req, res) => res.send("PUT request successfull"))
    .delete((req, res) => res.send("DELETE request successfull"));
};

export default routes;
