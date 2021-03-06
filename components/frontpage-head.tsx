import { useWindowDimensions } from 'hooks/use-window-dimensions-hook';
import { NewsArticle } from 'model/news-model';
import { ReadMoreLink } from 'pages/novosti';
import { gColors } from 'styles/style-constants';
import { NewsUtil } from '../util/news-util';
import { Markdown } from './markdown';

// T*DO: Bug
// Warning: Expected server HTML to contain a matching <div> in <section>.
// SSR + NewsArticleCard conditional rendering don't play nice
// https://stackoverflow.com/questions/46865880/react-16-warning-expected-server-html-to-contain-a-matching-div-in-div-due

export function FrontHead({ newsArticles }: { newsArticles: NewsArticle[] }) {
  const { windowWidth } = useWindowDimensions();
  // TODO: Use css breakpoints
  const articlesShown = Math.min((windowWidth - 200) / 400, 3);
  newsArticles = newsArticles.slice(0, articlesShown);
  return (
    <section className="root">
      <style jsx>{`
        .root > div {
          flex: 1;
        }
        .root {
          display: flex;
          gap: 3rem;
          margin-top: 3rem;
          margin-bottom: 5rem;
        }
      `}</style>
      <div>
        <Keyword>Stručnost.</Keyword>
        <Keyword isRed>Efikasnost.</Keyword>
        <Keyword>Pouzdanost.</Keyword>
      </div>
      {newsArticles.map((article) => (
        <NewsArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}

function Keyword({
  isRed,
  children,
}: {
  isRed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h1
      style={{
        fontSize: '2.5rem',
        marginTop: 0,
        ...(isRed && { color: gColors.red1 }),
      }}
    >
      {children}
    </h1>
  );
}

function NewsArticleCard({ article }: { article: NewsArticle }) {
  const { title, body } = NewsUtil.getArticlePreview(article);
  return (
    <div>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <Markdown>{body}</Markdown>
      <ReadMoreLink article={article} />
    </div>
  );
}
