import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';

import { UnControlled as CodeMirror } from 'react-codemirror2';

// 整体样式
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/xml/xml';

// 引入语言
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';

// 自动补全
import 'codemirror/addon/selection/active-line';

// 引入提示并设置提示样式
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/html-hint';

// import ReactMarkdown from './markdown/ReactMarkdown';

// import addLintMd from './md/addLint.md'

// const markdown = '# This is a header\n\nAnd this is a paragraph'

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre
    style={{
      background: '#f2f4f5',
      padding: '12px 20px',
      margin: '12px 0',
    }}
  >
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const codeData = `<header class="site-header">
<div class="container">
  <h1>Example #2</h1>
  <nav role="navigation" class="site-navigation">
    <ul>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
    </ul>
  </nav>
</div>
</header>
<section role="main" class="container"><img src="http://placehold.it/1400x400/ff694d/f6f2eb" class="banner-image" />
<div class="grid-row col-3">
  <div class="grid-unit"><img src="http://placehold.it/650x300/ff694d/f6f2eb" />
    <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>
  </div>
  <div class="grid-unit"><img src="http://placehold.it/650x300/ff694d/f6f2eb" />
    <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>
  </div>
  <div class="grid-unit"><img src="http://placehold.it/650x300/ff694d/f6f2eb" />
    <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>
  </div>
</div>
</section>
<script>


</script>
`;

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="umi ui 现已发布，欢迎使用 npm run ui 启动体验。"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
          <FormattedMessage
            id="app.welcome.link.block-list"
            defaultMessage="基于 block 开发，快速构建标准页面"
          />
        </a>
      </Typography.Text>
      <CodePreview>npx umi block list</CodePreview>
      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
        >
          <FormattedMessage id="app.welcome.link.fetch-blocks" defaultMessage="获取全部区块" />
        </a>
      </Typography.Text>
      <CodePreview> npm run fetch:blocks</CodePreview>
    </Card>
    <p style={{ textAlign: 'center', marginTop: 24 }}>
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。
    </p>
    <div style={{ background: '#fff', height: '100%', width: '100%' }}>
      {/* <ReactMarkdown
        dataSource={addLintMd}
      /> */}
      <CodeMirror
        value={codeData} // 值回显
        options={{
          mode: 'htmlmixed', // 设置语言
          theme: 'material',
          extraKeys: { 'Ctrl-T': 'autocomplete' }, // 自动提示配置
          enableBasicAutocompletion: true,
          lineNumbers: true,
          lint: true,
        }}
        // 这个必须加上，否则在一些情况下，第二次打开就会有问题
        onBeforeChange={(editor, data, value) => {
          console.log('onBeforeChange fresh');
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(value));
        }}
        /* HERE: pick out only the value. and might as well get name. */
      />
    </div>
  </PageHeaderWrapper>
);
