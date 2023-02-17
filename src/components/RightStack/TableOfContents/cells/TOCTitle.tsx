/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { Link } from 'gatsby'
import { FC, useContext } from 'react'

import { ArticleContext } from 'contexts/article/ArticleContext'

type TOCTitleProps = {
  title?: string
  url?: string
}

const style = css`
  :hover {
    color: black;
  }
`
const TOCTitle: FC<TOCTitleProps> = ({ title, url }) => {
  const {
    fields: { slug },
  } = useContext(ArticleContext)

  return (
    <Link css={style} to={`/posts` + slug + url}>
      {title}
    </Link>
  )
}

export default TOCTitle