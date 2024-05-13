import React from 'react';
import { Default as HeaderDefault, HeaderArgs } from '../Header/Header.stories';
import './draft.css';

export default {
  title: 'Layout/Draft Content',
  component: HeaderDefault,
  argTypes: {
    showDraftContent: { control: 'boolean' },
  },
};

const HeaderTemplate = (args) => {
  const draftClass = args.showDraftContent
    ? 'view-viewview wf-state-is-draft'
    : '';
  return (
    <div className={draftClass}>
      <HeaderDefault {...HeaderArgs} />
    </div>
  );
};

export const Default = HeaderTemplate.bind({});
Default.args = {
  showDraftContent: true,
};
