import { MDXProvider } from '@mdx-js/react'
import { FC, ReactNode } from 'react'
import * as Remark from 'styles/designSystem/remark'
import 'styles/remark'

type MarkdownWrapperProps = {
  children: ReactNode
}

const MarkdownWrapper: FC<MarkdownWrapperProps> = ({ children }) => {
  return (
    <div className="markdown-wrapper">
      <MDXProvider
        components={{
          h1: Remark.H1,
          h2: Remark.H2,
          h3: Remark.H3,
          h4: Remark.H4,
          h5: Remark.H5,
          p: Remark.P,
          strong: Remark.STRONG,
          em: Remark.EM,
          del: Remark.DEL,
          hr: Remark.HR,
          ol: Remark.OL,
          ul: Remark.UL,
          li: Remark.LI,
          blockquote: Remark.BLOCKQUOTE,
          th: Remark.TH,
          td: Remark.TD,
          table: Remark.TABLE,
          tbody: Remark.TBODY,
        }}
      >
        {children}
      </MDXProvider>
    </div>
  )
}

export default MarkdownWrapper
