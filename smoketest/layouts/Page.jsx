import React from 'react';
import { Markdown } from 'antwar-helpers';
import Interactive from 'antwar-interactive';
import ClickMe from './ClickMe';

const Page = ({ page, section }) => (
  <div>
    <h1>Page layout - {page.title}</h1>

    <Interactive
      id="layouts/ClickMe.jsx"
      component={ClickMe}
      sections={section.all()}
      pages={section.pages()}
      containerProps={{ className: 'interactive-demo' }}
    />

    <Markdown page={page} />
  </div>
);

export default Page;
