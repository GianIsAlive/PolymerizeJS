// header block contains app name/logo, and navigation links
class headerBlockData {
  constructor() {
    this.appName = '';
    this.navItem = [];
    this.className = '';
  }

  defineAppName(name) {
    if (typeof name !== 'string') {
      return new Error('{ appName } must be a string');
    }
    this.appName = name;
    return this.appName;
  }

  // addNavLink: add an anchor tag to the header navigation
  // to is the view or page that will link to the navigation item
  // if router is set to true, react router will be used
  // if buttonStyle is set to true, the link will have inherit style of a button
  addNavLink(name, to, router = false, buttonStyle = false) {
    if (name === null || name === '') {
      return new Error('Navigation item must have a name');
    }
    if (to === null || to === '') {
      return new Error('Link must have { to } value');
    }
    const obj = {
      name,
      link: {
        to,
        router,
        buttonStyle,
      },
      button: false,
    };
    return this.navItem.push(obj);
  }

  // addNavButton: add a button tag to the header navigation
  addNavButton(name, onClick) {
    if (onClick instanceof Function === false) {
      return new Error('{ onClick } must be a function');
    }
    const obj = {
      name,
      link: false,
      button: {
        onClick,
      },
    };
    return this.navItem.push(obj);
  }

  // add className to the component
  addClassName(name) {
    if (typeof name !== 'string' || name === '') {
      return new Error('{ addClassName } must be a valid string');
    }
    this.name = name;
    return this.name;
  }
}

export default headerBlockData;
