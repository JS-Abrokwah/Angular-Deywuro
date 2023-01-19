# Client-app

## Description

Client app is a module is for users who sign up as Client.

#### Modules

- [client-app.module](./client-app.module.ts) file is for configuration and management of the client-app module
- [clientapp-routing module](./clientapp-routing.module.ts) file is for configuring routing within the client-app module

#### Components:

- **components/client-home:** the homepage component for users who sign up as client. It makes use of _homepage component_ from the shared-feature module
- **sms:** This is the parent component through which all SMS-releted pages are rendered. It make use of _dashboard component_ from the shared-feature module. The `<router-outlet></router-outlet>` inside the [sms.component.html](./components/sms/sms.component.html) is controlled by [clientapp-routing module](./clientapp-routing.module.ts)
- **sms-dashboard:** It is the dashboard for SMS. It get rendered in the sms component through the router-outlet.
- **single-sms:** single sms page. It makes use of tab-renderer component from the shared-fearture module It get rendered in the sms component through the router-outlet.
- **bulk-sms:** bulk-sms page. It makes use of tab-renderer component from the shared-fearture module It get rendered in the sms component through the router-outlet.
- **group-sms:** group-sms page It makes use of tab-renderer component from the shared-fearture module It get rendered in the sms component through the router-outlet.
