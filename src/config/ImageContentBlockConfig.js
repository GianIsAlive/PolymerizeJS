class ImageContentBlockConfig {
  constructor(name, source) {
    this.name = name;
    this.source = source;
    this.className = '';
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

export default ImageContentBlockConfig;
