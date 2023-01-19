# App Module

## Description

This contains the root configuation and component of the application.

#### Components:

- app-component (_root component_ for the entire application. Also the _parent component_ for the this module)
- landing-page (_child_)
- register-login (_child_)
- page-not-found (_child; get rendered only if user queries about unvailable url_)
- login-form (_subchild, child of register-login_)
- forget-password (_subchild, child of register-login_)
- create-account (_subchild, child of register-login_)

#### Other files

- app-routing.module (_root router_)
- route-on-click.service(_this service is for routing to specified components based on click events on some elements_)
