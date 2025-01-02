---
menu:
    main:
        name: 'Projects'
        weight: 2
keywords: "rails,resume,optimization,chatgpt,ai,job search,stimulus,devise"
---

# Projects


## 💎 [Adobe PDF Services Ruby Gem](https://github.com/benterova/adobe-pdfservices-ruby)
A gem I made primarily for the PDF parsing and extraction used by [betterjob.app](https://betterjob.app). Forked from another project, I wasn't a fan of heavily repeat logic used and it also didn't support the newer PDF extraction operation. I rebuilt almost all of it using more object-oriented principles and adapted the tests to fit the usage patterns I expected to have.

**Features**
- Supports passing a block that will recieve both the operation status and the result that is called as the operation progresses, so applications can react to the status in addition to the result.
- Cleans up uploaded asset to save storage after extraction
- Support for almost all AdobePDFServices operations
- Nice and DRY :)
---

## 📸 [Flassh Photobooths](https://flassh.co) | Connect App Rebuild
I migrated their existing Connect application from a C# application with Canon support to a Rust + Tauri powered application leveraging libgphoto2 to support most cameras, in addition to Mac and Linux support for planned integrated devices.

**Features**
- Additional support for DSLR's from most makes and most models via libgphoto2
- Built with Tauri, Leptos, and Rust to provide multi-platform support with high performance
- Multiple bug fixes on the original application, including camera disconnect/reconnect support, camera selection, and status indication

---

## [konveyor.io](https://konveyor.io)
Contracted by Red Hat to help them update their community site with updated Kubernetes information, new pages, and relevant Kubecon information prior to Kubecon Amsterdam.

**Tech Stack**
- Gatsby
- React
- TailwindCSS

---


# Open Source

As of right now most of my open source work has been bug fixes and more features, although at some point I plan on getting more involved

### [teams-for-linux](https://github.com/IsmaelMartinez/teams-for-linux/pull/1082)
Added a flag to enable the application to follow the system theme, using Electron, IPC, and a connection to the inner Teams app.

---

### [AMMO](https://github.com/cyberrumor/ammo/pull/30)
Added support for the Steam installation to be automatically detected when installed via Flatpak, and added functionality to ask the user which version they'd like to manage.

---

### [City of Detroit `crime-viewer`](https://github.com/CityOfDetroit/crime-viewer/pull/80)
Fixed a crash that would occur when trying to view an arrest on an Interection where the offense wasn't included in the response. Also adjusted the title and favicon away from `create-react-app` default.
