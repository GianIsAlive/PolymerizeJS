import React from 'react';
import { render } from 'react-dom';
import HeaderBlock from '../src/BlockComponent/HeaderBlock/HeaderBlock';
import HeaderBlockConfig from '../src/config/HeaderBlockConfig';
import BannerBlock from '../src/BlockComponent/BannerBlock/BannerBlock';
import BannerBlockConfig from '../src/config/BannerBlockConfig';
import TextContentBlock from '../src/BlockComponent/TextContentBlock/TextContentBlock';
import TextContentBlockConfig from '../src/config/TextContentBlockConfig';
import ImageContentBlock from '../src/BlockComponent/ImageContentBlock/ImageContentBlock';
import ImageContentBlockConfig from '../src/config/ImageContentBlockConfig';
import ContactFormBlock from '../src/BlockComponent/ContactFormBlock/ContactFormBlock';
import ContactFormBlockConfig from '../src/config/ContactFormBlockConfig';

// import { createPage, createBlock } from 'Polymerize';

// const header = createBlock('header').has.link('documentation', '/index', false);

const polymerize = {
  header: null,
  banner: null,
  textContent: null,
  imageContent: null,
  createHeader: () => <HeaderBlock>{this.header}</HeaderBlock>,
  createBanner: () => <BannerBlock>{this.banner}</BannerBlock>,
  createTextContent: () => <TextContentBlock>{this.textContent}</TextContentBlock>,
  createImageContent: () => <ImageContentBlock>{this.imageContent}</ImageContentBlock>,
  createBlock: (type) => {
    // type: header, banner, textContent, imageContent
    if (type === 'header') {
      return this.createHeader;
    } else if (type === 'banner') {
      return this.createBanner;
    } else if (type === 'textContent') {
      return this.createTextContent;
    } else if (type === 'imageContent') {
      return this.createImageContent;
    }
    return `block: ${type} does not exist.`;
  },
  createPage: blocks => blocks,
};

export default polymerize;
