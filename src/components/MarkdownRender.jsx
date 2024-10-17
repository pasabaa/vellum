import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const MarkdownRender = ({markdown}) => {
  return (
    <Markdown className='prose prose-invert print:prose' remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
  )
}
