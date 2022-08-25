import React from 'react';

const Template = (args) => (
  <nav className="context-navigation">
    <div className="context-navigation-header">Navigation</div>
    <div role="list" className="ui list">
      <div role="listitem" className="item level-1">
        <div className="content">
          <a title="" className="contenttype-folder" href="/api/folder1">
            Folder1
          </a>
        </div>
      </div>
      <div role="listitem" className="item level-1">
        <div className="content">
          <a
            title=""
            className="contenttype-folder in_path"
            href="/api/folder2/folder21"
          >
            Folder21
          </a>
          <div className="list">
            <div role="listitem" className="item level-2">
              <div className="content">
                <a
                  title=""
                  className="contenttype-document"
                  href="/api/folder2/folder21/doc211"
                >
                  Doc211
                </a>
              </div>
            </div>
            <div role="listitem" className="active item level-2">
              <div className="content">
                <a
                  title=""
                  className="contenttype-document"
                  href="/api/folder2/folder21/doc211-copy"
                >
                  Doc212
                  <div className="content active-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                      className="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M21.293 9.293L22.707 10.707 15.414 18 22.707 25.293 21.293 26.707 12.586 18z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default {
  title: 'Components/Navigation portlet',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {
  root: 'https://www.eea.europa.eu/',
};
