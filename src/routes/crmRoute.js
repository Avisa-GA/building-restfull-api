import {
  addNewContact,
  getContacts,
  getContactsWithID,
} from "../controllers/crmController";

const routes = (app) => {
  app.route("/contact").get(getContacts).post(addNewContact);

  app
    .route("/contact/:contactID")
    .get(getContactsWithID)
    .put((req, res) => res.send("PUT request successfull"))
    .delete((req, res) => res.send("DELETE request successfull"));
};

export default routes;
