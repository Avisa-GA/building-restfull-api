import {
  addNewContact,
  getContacts,
  getContactsWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

import { loginRequired, register, login } from "../controllers/userController";

const routes = (app) => {
  app
    .route("/contact")
    .get(loginRequired, getContacts)
    .post(loginRequired, addNewContact);

  app
    .route("/contact/:contactID")
    .get(loginRequired, getContactsWithID)
    .put(loginRequired, updateContact)
    .delete(loginRequired, deleteContact);

  // registration route
  app.route("/auth/register").post(register);

  // login process
  app.route("/login").post(login);
};

export default routes;
