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

class Page {
  constructor() {
    this.component = {
      headerBlock: null,
      bannerBlock: null,
      textContentBlock: [],
      imageContentBlock: [],
      contactFormBlock: null,
    };
  }
  addHeaderBlock(appName, ) {
    return [blockName, blockContent];
  }
  addBannerBlock() {
    return 'hahahahaha';
  }
  addTextContentBlock() {
    return 'hahaha';
  }
  addImageContentBlock() {
    return 'hohohoho'
  }
  addContactFormBlock() {
    return 'hihihihihi';
  }
  render() {
    return function Block() {
      return (
        // This is the react thingie
      )
    }
  }
}

export default Page;

const LandingPage = new Page();
LandingPage.addHeaderBlock('header', {
  appName: 'Polymerize',
  navLink: [{
    name: 'documentation',
    to: '#',
    router: false,
    buttonStyle: false,
  }],
});
