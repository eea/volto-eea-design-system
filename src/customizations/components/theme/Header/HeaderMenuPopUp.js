import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import menuArrow from '../../../../../theme/themes/eea/assets/images/Header/menu-left-arrow.svg';

function HeaderMenuPopUp() {
  const [item1, setItem1] = React.useState('');

  const items = [
    {
      name: 'Item 1',
      sections: [
        {
          name: 'Section1',
          pages: ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'],
        },
        { name: 'Section 2', pages: [] },
        { name: 'Section 3', pages: [] },
        { name: 'Section 4', pages: [] },
        { name: 'Section 5', pages: [] },
      ],
    },
    { name: 'Item 2', sections: [] },
    { name: 'Item 3', sections: [] },
    { name: 'Item 4', sections: [] },
    { name: 'Item 5', sections: [] },
  ];

  //const [firstLevelActive,setFirstLevelActive] = React.useState();
  //const [secondLevelActive,setSecondLevelActive] = React.useState();
  //const [firstLevelActive,setFirstLevelActive] = React.useState();

  return (
    <div id="eea-mega-menu-wrap">
      <Container>
        <nav className="eea-nav">
          <a href="javascript:void(0);" className="eea-mobile-menu-trigger">
            Open mobile menu
          </a>
          <ul className="menu menu-bar">
            <li>
              <a
                href="javascript:void(0);"
                className="menu-link menu-bar-link"
                aria-haspopup="true"
                id="trigger"
              ></a>
              <ul
                className="mega-menu mega-menu--multiLevel"
                id="first-section-link"
              >
                <li>
                  <a
                    href="javascript:void(0);"
                    className="menu-link mega-menu-link"
                    aria-haspopup="true"
                  >
                    Item 1
                  </a>
                  <ul className="menu menu-list">
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-list-link"
                        aria-haspopup="true"
                      >
                        Section 2
                      </a>
                      <ul className="menu menu-list">
                        <li>
                          <a href="/#" className="menu-link menu-list-link">
                            Page 1
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="menu-link menu-list-link">
                            Page 2
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="menu-link menu-list-link">
                            Page 3
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="menu-link menu-list-link">
                            Page 4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="menu-link mega-menu-link"
                    aria-haspopup="true"
                  >
                    Item 2
                  </a>
                  <ul className="menu menu-list">
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="menu-link mega-menu-link"
                    aria-haspopup="true"
                  >
                    Item 3
                  </a>
                  <ul className="menu menu-list">
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#" className="menu-link mega-menu-link">
                    Item 4
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* <div className="eea-mega-menu-wrapper">
          <div className="mega-menu-first-level">
            <ul className="eea-mega-menu-ul ul-is-active">
              {items.map((item,index) => (
                <li className={firstLevelActive === index ? "level-one-active" : ""} key={index} onMouseEnter={() => {setFirstLevelActive(index)}}>
                  <span>{item.name} <Image src={menuArrow} alt="menu arrow" /></span>
                  
                  {item.sections.length > 0 &&
                    <div className="mega-menu-second-level">
                      <ul className="eea-mega-menu-ul">
                        {item.sections.map((section,sectionIndex) => (
                          <li className={secondLevelActive === sectionIndex ? "level-two-active" : ""} key={sectionIndex} onMouseEnter={() => {setSecondLevelActive(sectionIndex)}}>
                            <span>{section.name}</span>
                            <Image src={menuArrow} alt="menu arrow" />
                            {section.pages.length > 0 && 
                              <div className="mega-menu-third-level">
                                <ul className="eea-mega-menu-ul">
                                  {section.pages.map((page,pageIndex) =>(
                                    <li key={pageIndex}>{page}</li>
                                  ))}
                                </ul>
                              </div>
                            }
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
              ))} */}
        {/* <li className={`has-sub-menu ${item1}`} >
                <span>Item 1</span> <Image src={menuArrow} alt="menu arrow" />
                <div className={`mega-menu-second-level ${item1}`}>
                  <ul className="eea-mega-menu-ul ">
                    <li className="has-sub-menu">
                      <span>Section 1</span>{' '}
                      <Image src={menuArrow} alt="menu arrow" />
                      <div className="mega-menu-third-level">
                        <ul className="eea-mega-menu-ul ">
                          <li>Page 1</li>
                          <li>Page 2</li>
                          <li>Page 3</li>
                          <li>Page 4</li>
                          <li>Page 5</li>
                        </ul>
                      </div>
                    </li>
                    <li>Section 2</li>
                    <li>Section 3</li>
                    <li>Section 4</li>
                    <li>Section 5</li>
                  </ul>
                </div>
              </li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li> */}
        {/* </ul>
          </div>
        </div> */}
      </Container>
    </div>
  );
}

export default HeaderMenuPopUp;
