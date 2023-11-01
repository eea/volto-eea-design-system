import React, { useState } from 'react';
import { Tab, Container, Menu } from 'semantic-ui-react';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    variant: {
      name: 'Variation',
      defaultValue: 'secondary',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'secondary' },
        type: { summary: 'string' },
      },
    },
    inverted: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
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

const panes = [
  {
    menuItem: 'Ground level ozone',
    render: () => (
      <Tab.Pane>
        {' '}
        is not directly emitted into the atmosphere. Instead, it forms in the
        atmosphere from a chain of chemical reactions following emissions of
        certain precursor gases: NOX, carbon monoxide (CO) and NMVOCs and
        methane (CH4). Ground-level ozone is formed from chemical reactions in
        the presence of sunlight, following emissions of precursor gases, mainly
        NOX, NMVOCs, CO and CH4.
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
        NOX emissions. NOX contributes to the formation of ozone and particulate
        matter.
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Particulate matter',
    render: () => (
      <Tab.Pane>
        {' '}
        is a mixture of aerosol particles (solid and liquid) covering a wide
        range of sizes and chemical compositions. PM is either directly emitted
        as primary particles or it forms in the atmosphere from emissions of
        certain precursor pollutants such as SO2, NOX, NH3 and NMVOCs. PM is
        emitted from many anthropogenic sources, including both combustion and
        non-combustion sources. Natural emissions of PM also occur, including
        from sea salt and windblown Saharan dust.
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
        environmental issue because they are a major precursor to ambient PM2.5
        concentrations.
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Benzopyrene',
    render: () => (
      <Tab.Pane>
        {' '}
        is a polycyclic aromatic hydrocarbon (PAH) found in fine PM. Its origin
        is the incomplete combustion of various fuels. The main sources of BaP
        in Europe are domestic home-heating, in particular wood- and
        coal-burning, waste-burning, coke and steel production, and road
        traffic. Other sources include outdoor fires.
      </Tab.Pane>
    ),
  },
];

function TabContent({
  panes,
  variant,
  renderActive,
  inverted,
  vertical,
  pointing,
  fluid,
  grid,
  position,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(panes[0]);

  const accessiblePanes = panes.map((tab, index) => {
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
              if (document.getElementsByClassName('active tab').length > 0) {
                const tabDiv = document.getElementsByClassName('active tab')[0];
                tabDiv.focus();
              }
              if (activeTab !== tab) {
                setActiveIndex(index);
                setActiveTab(tab);
              }
            }
          }}
          role="tab"
          aria-selected={tab === activeTab}
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
      panes={accessiblePanes}
      renderActiveOnly={renderActive}
      menuPosition={position}
      className="default tabs tabs-accessibility"
      menu={{
        vertical: vertical,
        inverted: inverted,
        pointing: pointing,
        fluid: fluid,
        className: `${
          position === 'right' ? 'border-left ' + variant : variant
        }`,
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

export const Default = Template.bind({});
Default.args = {
  variant: 'secondary',
  renderActive: true,
  inverted: false,
  panes: [...panes],
};

export const Vertical = Template.bind({});
Vertical.args = {
  variant: 'secondary',
  renderActive: true,
  vertical: true,
  pointing: false,
  inverted: false,
  fluid: true,
  position: 'left',
  grid: { paneWidth: 8, tabWidth: 4 },
  panes: [...panes],
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
  position: {
    name: 'menu position',
    defaultValue: 'left',
    options: ['left', 'right'],
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'left' },
      type: { summary: 'string' },
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
