// index.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './codeBlock';
// import 'github-markdown-css';
// import './index.less';

export default (props: any) => {
  const { dataSource } = props;
  return (
    <ReactMarkdown
      escapeHtml={false}
      renderers={{
        code: CodeBlock,
      }}
      className="markdown-body"
      source={dataSource}
    />
  );
};
