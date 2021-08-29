import {
  addNewContact,
  getContacts,
  getContactsWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app.route("/contact").get(getContacts).post(addNewContact);

  app
    .route("/contact/:contactID")
    .get(getContactsWithID)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;
