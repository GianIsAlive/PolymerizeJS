class TextContentBlockConfig {
  constructor() {
    this.primaryText = '';
    this.secondaryText = '';
    this.actionItem = [];
    this.className = '';
  }
  definePrimaryText(text) {
    this.primaryText = text;
    return this.primaryText;
  }
  defineSecondaryText(text) {
    this.secondaryText = text;
    return this.secondaryText;
  }

  // addActionLink: add an anchor tag to the header navigation
  // to is the view or page that will link to the navigation item
  // if router is set to true, react router will be used
  // if buttonStyle is set to true, the link will have inherit style of a button
  addActionLink(name, to, router = false, buttonStyle = false) {
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
    return this.actionItem.push(obj);
  }

  // addActionButton: add a button tag to the header navigation
  addActionButton(name, onClick) {
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
    return this.actionItem.push(obj);
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

export default TextContentBlockConfig;
