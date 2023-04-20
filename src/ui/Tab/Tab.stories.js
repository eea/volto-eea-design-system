import React, { useState } from 'react';
import { Tab, Container, Menu, Grid } from 'semantic-ui-react';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    panes: {
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

function TabContent({
  args,
  panes,
  renderActive,
  id,
  text,
  attached,
  borderless,
  vertical,
  fluid,
  grid,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(panes[0]);

  const panez = panes.map((tab, index) => {
    return {
      menuItem: (
        <Menu.Item
          key={`Tab ${index}`}
          name={`Tab ${index}`}
          active={tab === activeTab}
          tabIndex={0}
          onClick={() => {
            if (activeTab !== tab) {
              setActiveIndex(index);
              setActiveTab(tab);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (
                document
                  .getElementById(id)
                  ?.getElementsByClassName('active tab').length > 0
              ) {
                const tabDiv = document
                  .getElementById(id)
                  .getElementsByClassName('active tab')[0];
                tabDiv.focus();
              }
              if (activeTab !== tab) {
                setActiveIndex(index);
                setActiveTab(tab);
              }
            }
          }}
        >
          <p className={'menu-item-text'}>{tab.menuItem}</p>
        </Menu.Item>
      ),
      render: () => {
        return <>{tab.render()}</>;
      },
    };
  });

  return (
    <Tab
      panes={panez}
      renderActiveOnly={renderActive}
      className="default tabs tabs-accessibility"
      menu={{
        secondary: true,
        pointing: true,
        vertical: vertical,
        fluid: fluid,
        tabIndex: 0,
      }}
      grid={grid}
      activeIndex={activeIndex}
    ></Tab>
  );
}

const Template = (args) => (
  <Container>
    <TabContent {...args}></TabContent>
  </Container>
);

const AccTemplate = (args, panes) => {
  const [activeAccTabIndex, setActiveAccTabIndex] = useState(0);

  function getTabs({ ...args }) {
    return args.panes.map((tab, index) => ({
      title: tab.menuItem,
      getContent: () => tab.render(),
      /* Optional parameters */
      key: index,
      tabClassName: `tab ui button item title ${
        activeAccTabIndex === index ? 'active' : ''
      }`,
      panelClassName: 'panel ui bottom attached segment',
    }));
  }

  return (
    <Container>
      <div
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const focusedElement = document.activeElement;
            if (focusedElement) focusedElement.click();
          }
        }}
        role="tab"
      >
        <Tabs
          id={args.id}
          items={getTabs(args)}
          selectedTabKey={activeAccTabIndex}
          tabsWrapperClass="tabs-accordion-icon-right ui pointing secondary menu tabs-accessibility"
          showMore={false}
          onChange={(tab) => {
            if (tab !== panes[activeAccTabIndex]) {
              setActiveAccTabIndex(tab);
            } else {
              setActiveAccTabIndex(null);
            }
          }}
        />
      </div>
    </Container>
  );
};

export const AccordionTabs = AccTemplate.bind({});
AccordionTabs.args = {
  renderActive: true,
  id: 'tab-accordion',
  panes: [
    {
      menuItem: 'Ground level ozone',
      render: () => (
        <Tab.Pane>
          <Grid>
            <Grid.Column mobile={12} tablet={9} computer={9}>
              is not directly emitted into the atmosphere. Instead, it forms in
              the atmosphere from a chain of chemical reactions following
              emissions of certain precursor gases: NOX, carbon monoxide (CO)
              and NMVOCs and methane (CH4). Ground-level ozone is formed from
              chemical reactions in the presence of sunlight, following
              emissions of precursor gases, mainly NOX, NMVOCs, CO and CH4.
            </Grid.Column>
            <Grid.Column mobile={12} tablet={3} computer={3}>
              <img
                src="https://www.eea.europa.eu/publications/managing-the-systemic-use-of/image_preview"
                alt="sources of air pollution"
                className="ui fluid image"
              />
            </Grid.Column>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Nitrogen oxides',
      render: () => (
        <Tab.Pane>
          {' '}
          are emitted during fuel combustion from industrial facilities and the
          road transport sector. NOX is a group of gases comprising nitrogen
          monoxide (NO) and nitrogen dioxide (NO2). NO makes up the majority of
          NOX emissions. NOX contributes to the formation of ozone and
          particulate matter.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Particulate matter',
      render: () => (
        <Tab.Pane>
          {' '}
          is a mixture of aerosol particles (solid and liquid) covering a wide
          range of sizes and chemical compositions. PM is either directly
          emitted as primary particles or it forms in the atmosphere from
          emissions of certain precursor pollutants such as SO2, NOX, NH3 and
          NMVOCs. PM is emitted from many anthropogenic sources, including both
          combustion and non-combustion sources. Natural emissions of PM also
          occur, including from sea salt and windblown Saharan dust.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Sulphur dioxide',
      render: () => (
        <Tab.Pane>
          {' '}
          is formed and emitted by combustion of fossil fuels (mainly coal and
          oil) primarily for electricity generation. High concentrations of SO2
          are associated with multiple health and environmental effects. The
          highest concentrations of SO2 have been recorded in the vicinity of
          large industrial facilities. SO2 emissions are an important
          environmental issue because they are a major precursor to ambient
          PM2.5 concentrations.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Benzopyrene',
      render: () => (
        <Tab.Pane>
          {' '}
          is a polycyclic aromatic hydrocarbon (PAH) found in fine PM. Its
          origin is the incomplete combustion of various fuels. The main sources
          of BaP in Europe are domestic home-heating, in particular wood- and
          coal-burning, waste-burning, coke and steel production, and road
          traffic. Other sources include outdoor fires.
        </Tab.Pane>
      ),
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  renderActive: true,
  id: 'tab',
  panes: [
    {
      menuItem: 'Ground level ozone',
      render: () => (
        <Tab.Pane>
          <Grid>
            <Grid.Column mobile={12} tablet={9} computer={9}>
              is not directly emitted into the atmosphere. Instead, it forms in
              the atmosphere from a chain of chemical reactions following
              emissions of certain precursor gases: NOX, carbon monoxide (CO)
              and NMVOCs and methane (CH4). Ground-level ozone is formed from
              chemical reactions in the presence of sunlight, following
              emissions of precursor gases, mainly NOX, NMVOCs, CO and CH4.
            </Grid.Column>
            <Grid.Column mobile={12} tablet={3} computer={3}>
              <img
                src="https://www.eea.europa.eu/publications/managing-the-systemic-use-of/image_preview"
                alt="sources of air pollution"
                className="ui fluid image"
              />
            </Grid.Column>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Nitrogen oxides',
      render: () => (
        <Tab.Pane>
          {' '}
          are emitted during fuel combustion from industrial facilities and the
          road transport sector. NOX is a group of gases comprising nitrogen
          monoxide (NO) and nitrogen dioxide (NO2). NO makes up the majority of
          NOX emissions. NOX contributes to the formation of ozone and
          particulate matter.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Particulate matter',
      render: () => (
        <Tab.Pane>
          {' '}
          is a mixture of aerosol particles (solid and liquid) covering a wide
          range of sizes and chemical compositions. PM is either directly
          emitted as primary particles or it forms in the atmosphere from
          emissions of certain precursor pollutants such as SO2, NOX, NH3 and
          NMVOCs. PM is emitted from many anthropogenic sources, including both
          combustion and non-combustion sources. Natural emissions of PM also
          occur, including from sea salt and windblown Saharan dust.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Sulphur dioxide',
      render: () => (
        <Tab.Pane>
          {' '}
          is formed and emitted by combustion of fossil fuels (mainly coal and
          oil) primarily for electricity generation. High concentrations of SO2
          are associated with multiple health and environmental effects. The
          highest concentrations of SO2 have been recorded in the vicinity of
          large industrial facilities. SO2 emissions are an important
          environmental issue because they are a major precursor to ambient
          PM2.5 concentrations.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Benzopyrene',
      render: () => (
        <Tab.Pane>
          {' '}
          is a polycyclic aromatic hydrocarbon (PAH) found in fine PM. Its
          origin is the incomplete combustion of various fuels. The main sources
          of BaP in Europe are domestic home-heating, in particular wood- and
          coal-burning, waste-burning, coke and steel production, and road
          traffic. Other sources include outdoor fires.
        </Tab.Pane>
      ),
    },
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  renderActive: true,
  vertical: true,
  fluid: true,
  grid: { paneWidth: 7, tabWidth: 5 },
  panes: [
    {
      menuItem: 'Ground level ozone',
      render: () => (
        <Tab.Pane>
          <Grid>
            <Grid.Column mobile={12} tablet={8} computer={8}>
              is not directly emitted into the atmosphere. Instead, it forms in
              the atmosphere from a chain of chemical reactions following
              emissions of certain precursor gases: NOX, carbon monoxide (CO)
              and NMVOCs and methane (CH4). Ground-level ozone is formed from
              chemical reactions in the presence of sunlight, following
              emissions of precursor gases, mainly NOX, NMVOCs, CO and CH4.
            </Grid.Column>
            <Grid.Column mobile={12} tablet={4} computer={4}>
              <img
                src="https://www.eea.europa.eu/en/topics/in-depth/air-pollution/31905041720_2c248b6224_cropped.jpg/@@images/image-529-0b40801694a97fa192d849d632f99632.jpeg"
                alt="sources of air pollution"
                className="ui fluid image"
              />
            </Grid.Column>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Nitrogen oxides',
      render: () => (
        <Tab.Pane>
          {' '}
          are emitted during fuel combustion from industrial facilities and the
          road transport sector. NOX is a group of gases comprising nitrogen
          monoxide (NO) and nitrogen dioxide (NO2). NO makes up the majority of
          NOX emissions. NOX contributes to the formation of ozone and
          particulate matter.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Particulate matter',
      render: () => (
        <Tab.Pane>
          {' '}
          is a mixture of aerosol particles (solid and liquid) covering a wide
          range of sizes and chemical compositions. PM is either directly
          emitted as primary particles or it forms in the atmosphere from
          emissions of certain precursor pollutants such as SO2, NOX, NH3 and
          NMVOCs. PM is emitted from many anthropogenic sources, including both
          combustion and non-combustion sources. Natural emissions of PM also
          occur, including from sea salt and windblown Saharan dust.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Sulphur dioxide',
      render: () => (
        <Tab.Pane>
          {' '}
          is formed and emitted by combustion of fossil fuels (mainly coal and
          oil) primarily for electricity generation. High concentrations of SO2
          are associated with multiple health and environmental effects. The
          highest concentrations of SO2 have been recorded in the vicinity of
          large industrial facilities. SO2 emissions are an important
          environmental issue because they are a major precursor to ambient
          PM2.5 concentrations.
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Benzopyrene',
      render: () => (
        <Tab.Pane>
          {' '}
          is a polycyclic aromatic hydrocarbon (PAH) found in fine PM. Its
          origin is the incomplete combustion of various fuels. The main sources
          of BaP in Europe are domestic home-heating, in particular wood- and
          coal-burning, waste-burning, coke and steel production, and road
          traffic. Other sources include outdoor fires.
        </Tab.Pane>
      ),
    },
  ],
};

Vertical.argTypes = {
  vertical: {
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  fluid: {
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  grid: {
    table: {
      type: {
        summary: 'object',
      },
      defaultValue: {
        summary: '{ paneWidth: 12, tabWidth: 4 }',
      },
    },
  },
};
