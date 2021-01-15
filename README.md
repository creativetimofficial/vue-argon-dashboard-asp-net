# [Vue Argon Dashboard Asp.net](https://demos.creative-tim.com/vue-argon-dashboard-asp-net/?ref=ada-github-readme) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Vue%20Argon%20Dashboard%20is%20a%20Free%20Bootstrap%20and%Vue.js%20Dashboard%20made%20using%vue-cli%20%E2%9D%A4%EF%B8%8F%0Ahttps%3A//demos.creative-tim.com/vue-argon-dashboard%20%vue.js%20%23vue-cli%20%23argon%20%23argondesign%20%23angulardashboard%20%23argonvue%20%23vuedesign%20%23bootstrap%20%23design%20%23uikit%20%23freebie%20%20via%20%40CreativeTim)



 ![version](https://img.shields.io/badge/version-1.0.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/vue-argon-dashboard-asp-net.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-argon-dashboard-asp-net/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/vue-argon-dashboard-asp-net.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-argon-dashboard-asp-net/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)


![Product Gif](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-dashboard/vue-argon-dashboard.gif)

Start your development with a Dashboard for Asp.net and Vue.js. It is open source, free and it features many components that can help you create amazing websites.

**Speed up development with Docker containers**

Developing apps today requires so much more than writing code. Multiple languages, frameworks, architectures, and discontinuous interfaces between tools for each lifecycle stage creates enormous complexity. Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

**Fully Coded Components**

Vue Argon Dashboard Asp.net is built with over 100 individual components, giving you the freedom of choosing and combining. All components can take variations in color, that you can easily modify using SASS files.

You will save a lot of time going from prototyping to full-functional code, because all elements are implemented. This Dashboard is coming with pre-built examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.

Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.

**Complex Documentation**

Each element is well presented in a very complex documentation. You can read more about the idea behind this [dashboard here](https://demos.creative-tim.com/vue-argon-dashboard/documentation/#/tutorial?ref=ada-asp-github-readme). You can check the [components here](https://demos.creative-tim.com/vue-argon-dashboard/documentation/#/alerts?ref=ada-asp-github-readme) and the [foundation here](https://demos.creative-tim.com/vue-argon-dashboard/documentation/#/colors?ref=ada-asp-github-readme).

**Example Pages**

If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages. You will be able to quickly set up the basic structure for your web project.


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/aspnet-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/vue-argon-dashboard-asp-net)

|Vue & Asp.net|
| --- |
[![Vue Argon Dashboard Asp.net](https://s3.amazonaws.com/creativetim_bucket/products/412/original/opt_ad_vueaspnet_thumbnail.jpg)](https://www.creative-tim.com/product/vue-argon-dashboard-asp-net?ref=ada-asp-github-readme) 


## Quick start

- [Download from Github](https://github.com/creativetimofficial/vue-argon-dashboard-as-net/archive/main.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/vue-argon-dashboard-asp-net?ref=ada-asp-github-readme).
- Clone the repo: `git clone https://github.com/creativetimofficial/vue-argon-dashboard.git`.
- From the project root folder run `docker-compose up --build`. Note that the first time you run this the images will build.
- Once docker-compose has finished, you will find the projects on the following URLs:
[Dashboard](http://localhost:8080/admin/dashboard)
[Identity Server](https://localhost:5000/.well-known/openid-configuration)

## Usage
You now have 2 applications running consisting of a Vue front end and application an Identity Server (IDS) based on C# and .Net Core. This implementation follow the resource owner password flow but can be modified to support others.

The integration gives you 3 features:
1. Login. The IDS has 2 default logins to get you started:
	Username: alice	Password: Pass123$
	Username: bob	Password: Pass123$

2. Register. This registers a new user in IDS

3. User Profile. Update profile and change password.

If you wish to change any of the settings around authentications, please refer to the following files:
- \IdentityServer\Config.cs
- \IdentityServer\Startup.cs

## Documentation
The documentation for the Vue Argon Dashboard Asp.net is hosted at our [website](https://demos.creative-tim.com/vue-argon-dashboard/documentation/#/tutorial?ref=ada-github-readme).


## File Structure
Within the download you'll find the following directories and files:

```
vue-argon-dashboard-asp-net
 ┣ IdentityServer
 ┃ ┣ Controllers
 ┃ ┃ ┣ PasswordController.cs
 ┃ ┃ ┣ ProfileController.cs
 ┃ ┃ ┗ RegisterController.cs
 ┃ ┣ Data
 ┃ ┃ ┗ ApplicationDbContext.cs
 ┃ ┣ Filters
 ┃ ┃ ┗ SecurityHeadersAttribute.cs
 ┃ ┣ Migrations
 ┃ ┃ ┣ 20201123103021_InitialCreate.cs
 ┃ ┃ ┣ 20201123103021_InitialCreate.Designer.cs
 ┃ ┃ ┗ ApplicationDbContextModelSnapshot.cs
 ┃ ┣ Models
 ┃ ┃ ┣ ApplicationUser.cs
 ┃ ┃ ┣ RegisterViewModel.cs
 ┃ ┃ ┣ UpdatePasswordModel.cs
 ┃ ┃ ┗ UpdateProfileModel.cs
 ┃ ┣ Properties
 ┃ ┃ ┗ launchSettings.json
 ┃ ┣ appsettings.json
 ┃ ┣ AspIdUsers.db
 ┃ ┣ Config.cs
 ┃ ┣ Dockerfile
 ┃ ┣ IdentityServer.csproj
 ┃ ┣ Program.cs
 ┃ ┣ SeedData.cs
 ┃ ┗ Startup.cs
 ┣ Vue
 ┃ ┣ public
 ┃ ┃ ┣ img
 ┃ ┃ ┃ ┣ brand
 ┃ ┃ ┃ ┃ ┣ favicon.png
 ┃ ┃ ┃ ┃ ┣ green.png
 ┃ ┃ ┃ ┃ ┗ white.png
 ┃ ┃ ┃ ┣ icons
 ┃ ┃ ┃ ┃ ┣ common
 ┃ ┃ ┃ ┃ ┃ ┣ github.svg
 ┃ ┃ ┃ ┃ ┃ ┗ google.svg
 ┃ ┃ ┃ ┃ ┣ android-chrome-192x192.png
 ┃ ┃ ┃ ┃ ┣ android-chrome-512x512.png
 ┃ ┃ ┃ ┃ ┣ apple-touch-icon-120x120.png
 ┃ ┃ ┃ ┃ ┣ apple-touch-icon-152x152.png
 ┃ ┃ ┃ ┃ ┣ apple-touch-icon-180x180.png
 ┃ ┃ ┃ ┃ ┣ apple-touch-icon-60x60.png
 ┃ ┃ ┃ ┃ ┣ apple-touch-icon-76x76.png
 ┃ ┃ ┃ ┃ ┣ apple-touch-icon.png
 ┃ ┃ ┃ ┃ ┣ favicon-16x16.png
 ┃ ┃ ┃ ┃ ┣ favicon-32x32.png
 ┃ ┃ ┃ ┃ ┣ msapplication-icon-144x144.png
 ┃ ┃ ┃ ┃ ┣ mstile-150x150.png
 ┃ ┃ ┃ ┃ ┗ safari-pinned-tab.svg
 ┃ ┃ ┃ ┗ theme
 ┃ ┃ ┃ ┃ ┣ angular.jpg
 ┃ ┃ ┃ ┃ ┣ bootstrap.jpg
 ┃ ┃ ┃ ┃ ┣ profile-cover.jpg
 ┃ ┃ ┃ ┃ ┣ react.jpg
 ┃ ┃ ┃ ┃ ┣ sketch.jpg
 ┃ ┃ ┃ ┃ ┣ team-1-800x800.jpg
 ┃ ┃ ┃ ┃ ┣ team-2-800x800.jpg
 ┃ ┃ ┃ ┃ ┣ team-3-800x800.jpg
 ┃ ┃ ┃ ┃ ┣ team-4-800x800.jpg
 ┃ ┃ ┃ ┃ ┗ vue.jpg
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┣ index.html
 ┃ ┃ ┣ manifest.json
 ┃ ┃ ┗ robots.txt
 ┃ ┣ src
 ┃ ┃ ┣ assets
 ┃ ┃ ┃ ┣ scss
 ┃ ┃ ┃ ┃ ┣ core
 ┃ ┃ ┃ ┃ ┃ ┣ alerts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _alert-dismissible.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _alert.scss
 ┃ ┃ ┃ ┃ ┃ ┣ avatars
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _avatar-group.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _avatar.scss
 ┃ ┃ ┃ ┃ ┃ ┣ badges
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _badge-circle.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _badge-dot.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _badge.scss
 ┃ ┃ ┃ ┃ ┃ ┣ buttons
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _button-brand.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _button-icon.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _button.scss
 ┃ ┃ ┃ ┃ ┃ ┣ cards
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _card-animations.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _card-blockquote.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _card-profile.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _card-stats.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _card.scss
 ┃ ┃ ┃ ┃ ┃ ┣ charts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _chart.scss
 ┃ ┃ ┃ ┃ ┃ ┣ close
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _close.scss
 ┃ ┃ ┃ ┃ ┃ ┣ custom-forms
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _custom-checkbox.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _custom-control.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _custom-form.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _custom-radio.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _custom-toggle.scss
 ┃ ┃ ┃ ┃ ┃ ┣ dropdowns
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _dropdown.scss
 ┃ ┃ ┃ ┃ ┃ ┣ footers
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _footer.scss
 ┃ ┃ ┃ ┃ ┃ ┣ forms
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _form-validation.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _form.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _input-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ headers
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _header.scss
 ┃ ┃ ┃ ┃ ┃ ┣ icons
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _icon-shape.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _icon.scss
 ┃ ┃ ┃ ┃ ┃ ┣ list-groups
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _list-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ maps
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _map.scss
 ┃ ┃ ┃ ┃ ┃ ┣ masks
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _mask.scss
 ┃ ┃ ┃ ┃ ┃ ┣ mixins
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _alert.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _background-variant.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _badge.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _buttons.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _forms.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _icon.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _modals.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _popover.scss
 ┃ ┃ ┃ ┃ ┃ ┣ modals
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _modal.scss
 ┃ ┃ ┃ ┃ ┃ ┣ navbars
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _navbar-collapse.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _navbar-dropdown.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _navbar-search.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _navbar-vertical.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _navbar.scss
 ┃ ┃ ┃ ┃ ┃ ┣ navs
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _nav-pills.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _nav.scss
 ┃ ┃ ┃ ┃ ┃ ┣ paginations
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _pagination.scss
 ┃ ┃ ┃ ┃ ┃ ┣ popovers
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _popover.scss
 ┃ ┃ ┃ ┃ ┃ ┣ progresses
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _progress.scss
 ┃ ┃ ┃ ┃ ┃ ┣ separators
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _separator.scss
 ┃ ┃ ┃ ┃ ┃ ┣ tables
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _table.scss
 ┃ ┃ ┃ ┃ ┃ ┣ type
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _article.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _display.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _heading.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _type.scss
 ┃ ┃ ┃ ┃ ┃ ┣ utilities
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _backgrounds.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _blurable.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _floating.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _helper.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _image.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _opacity.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _overflow.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _position.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _shadows.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _sizing.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _spacing.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _text.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _transform.scss
 ┃ ┃ ┃ ┃ ┃ ┗ vendors
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _flatpickr.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _headroom.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _nouislider.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _scrollbar.scss
 ┃ ┃ ┃ ┃ ┣ custom
 ┃ ┃ ┃ ┃ ┃ ┣ _alert.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _avatar.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _badge.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _buttons.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _card.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _chart.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _close.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _components.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _content.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _custom-forms.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _dropdown.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _footer.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _forms.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _functions.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _header.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _icons.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _input-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _list-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _map.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _mask.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _mixins.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _modal.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _nav.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _navbar.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _pagination.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _popover.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _progress.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _reboot.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _section.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _separator.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _tables.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _type.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _utilities.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _variables.scss
 ┃ ┃ ┃ ┃ ┃ ┗ _vendors.scss
 ┃ ┃ ┃ ┃ ┗ argon.scss
 ┃ ┃ ┃ ┣ vendor
 ┃ ┃ ┃ ┃ ┗ nucleo
 ┃ ┃ ┃ ┃ ┃ ┣ css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ nucleo-svg.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ nucleo.css
 ┃ ┃ ┃ ┃ ┃ ┗ fonts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ nucleo-icons.eot
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ nucleo-icons.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ nucleo-icons.ttf
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ nucleo-icons.woff
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ nucleo-icons.woff2
 ┃ ┃ ┃ ┗ logo.png
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ Charts
 ┃ ┃ ┃ ┃ ┣ BarChart.js
 ┃ ┃ ┃ ┃ ┣ config.js
 ┃ ┃ ┃ ┃ ┣ DoughnutChart.js
 ┃ ┃ ┃ ┃ ┣ globalOptionsMixin.js
 ┃ ┃ ┃ ┃ ┣ LineChart.js
 ┃ ┃ ┃ ┃ ┣ optionHelpers.js
 ┃ ┃ ┃ ┃ ┗ PieChart.js
 ┃ ┃ ┃ ┣ NotificationPlugin
 ┃ ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┃ ┣ Notification.vue
 ┃ ┃ ┃ ┃ ┗ Notifications.vue
 ┃ ┃ ┃ ┣ SidebarPlugin
 ┃ ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┃ ┣ SideBar.vue
 ┃ ┃ ┃ ┃ ┗ SidebarItem.vue
 ┃ ┃ ┃ ┣ Tabs
 ┃ ┃ ┃ ┃ ┣ PillsLayout.vue
 ┃ ┃ ┃ ┃ ┣ Tab.vue
 ┃ ┃ ┃ ┃ ┣ TabPane.vue
 ┃ ┃ ┃ ┃ ┣ Tabs.vue
 ┃ ┃ ┃ ┃ ┗ TabsLayout.vue
 ┃ ┃ ┃ ┣ Badge.vue
 ┃ ┃ ┃ ┣ BaseAlert.vue
 ┃ ┃ ┃ ┣ BaseButton.vue
 ┃ ┃ ┃ ┣ BaseCheckbox.vue
 ┃ ┃ ┃ ┣ BaseDropdown.vue
 ┃ ┃ ┃ ┣ BaseHeader.vue
 ┃ ┃ ┃ ┣ BaseInput.vue
 ┃ ┃ ┃ ┣ BaseNav.vue
 ┃ ┃ ┃ ┣ BasePagination.vue
 ┃ ┃ ┃ ┣ BaseProgress.vue
 ┃ ┃ ┃ ┣ BaseRadio.vue
 ┃ ┃ ┃ ┣ BaseSlider.vue
 ┃ ┃ ┃ ┣ BaseSwitch.vue
 ┃ ┃ ┃ ┣ BaseTable.vue
 ┃ ┃ ┃ ┣ Card.vue
 ┃ ┃ ┃ ┣ CloseButton.vue
 ┃ ┃ ┃ ┣ Modal.vue
 ┃ ┃ ┃ ┣ NavbarToggleButton.vue
 ┃ ┃ ┃ ┣ StatsCard.vue
 ┃ ┃ ┃ ┗ stringUtils.js
 ┃ ┃ ┣ directives
 ┃ ┃ ┃ ┗ click-ouside.js
 ┃ ┃ ┣ layout
 ┃ ┃ ┃ ┣ AuthLayout.vue
 ┃ ┃ ┃ ┣ Content.vue
 ┃ ┃ ┃ ┣ ContentFooter.vue
 ┃ ┃ ┃ ┣ DashboardLayout.vue
 ┃ ┃ ┃ ┗ DashboardNavbar.vue
 ┃ ┃ ┣ plugins
 ┃ ┃ ┃ ┣ argon-dashboard.js
 ┃ ┃ ┃ ┣ globalComponents.js
 ┃ ┃ ┃ ┗ globalDirectives.js
 ┃ ┃ ┣ store
 ┃ ┃ ┃ ┣ modules
 ┃ ┃ ┃ ┃ ┣ auth.js
 ┃ ┃ ┃ ┃ ┗ axiosHeaders.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ views
 ┃ ┃ ┃ ┣ Dashboard
 ┃ ┃ ┃ ┃ ┣ PageVisitsTable.vue
 ┃ ┃ ┃ ┃ ┗ SocialTrafficTable.vue
 ┃ ┃ ┃ ┣ Tables
 ┃ ┃ ┃ ┃ ┗ ProjectsTable.vue
 ┃ ┃ ┃ ┣ Dashboard.vue
 ┃ ┃ ┃ ┣ Icons.vue
 ┃ ┃ ┃ ┣ Login.vue
 ┃ ┃ ┃ ┣ Maps.vue
 ┃ ┃ ┃ ┣ Register.vue
 ┃ ┃ ┃ ┣ Tables.vue
 ┃ ┃ ┃ ┗ UserProfile.vue
 ┃ ┃ ┣ App.vue
 ┃ ┃ ┣ main.js
 ┃ ┃ ┣ registerServiceWorker.js
 ┃ ┃ ┗ router.js
 ┃ ┣ .env
 ┃ ┣ babel.config.js
 ┃ ┣ Dockerfile
 ┃ ┣ package-lock.json
 ┃ ┣ package.json
 ┃ ┣ vue.config.js
 ┃ ┗ yarn.lock
 ┣ .gitignore
 ┣ CHANGELOG.md
 ┣ CreativeTim-Vue.sln
 ┣ docker-compose.yml
 ┣ ISSUES_TEMPLATE.md
 ┣ LICENSE.md
 ┗ README.md
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



## Resources
- Demo: <https://demos.creative-tim.com/vue-argon-dashboard-asp-net/#/dashboard?ref=ada-asp-github-readme>
- Download Page: <https://www.creative-tim.com/product/vue-argon-dashboard-asp-net?ref=ada-asp-github-readme>
- Documentation: <https://demos.creative-tim.com/vue-argon-dashboard/documentation/#/tutorial?ref=ada-asp-github-readme>
- License Agreement: <https://www.creative-tim.com/license?ref=ada-asp-github-readme>
- Support: <https://www.creative-tim.com/contact-us?ref=ada-asp-github-readme>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/vue-argon-dashboard-asp-net/issues?ref=ada-asp-github-readme)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Vue Argon Dashboard Asp.net. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Kit. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=ada-asp-github-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2021 Creative Tim (https://www.creative-tim.com/?ref=ada-asp-github-readme)

- Licensed under MIT (https://github.com/creativetimofficial/vue-argon-dashboard/blob/master/LICENSE.md)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w?ref=creativetim)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=ada-github-readme) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/?ref=ada-github-readme)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free?ref=ada-github-readme) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=ada-github-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=ada-github-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=ada-github-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=ada-github-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=ada-github-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref=ada-github-readme)

### Social Media

Twitter: <https://twitter.com/CreativeTim?ref=creativetim>

Facebook: <https://www.facebook.com/CreativeTim?ref=creativetim>

Dribbble: <https://dribbble.com/creativetim?ref=creativetim>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=creativetim>
