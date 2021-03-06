import markdownToTxt from 'markdown-to-txt';
import { NewsArticle } from 'model/news-model';
import path from 'path';
import { MarkdownUtil } from './markdown-util';

export namespace NewsUtil {
  export function getArticlePreview(article: NewsArticle) {
    return mdToPreview(article.md);
  }

  export function isWhitespace(char: string) {
    return char.trim() === '';
  }

  export function getNewsArticlesDirPath() {
    return path.join(process.cwd(), 'public', 'news-articles');
  }

  export function getFullFsMdPathFromId(localPath: string) {
    return path.join(getNewsArticlesDirPath(), localPath + '.md');
  }

  function mdToPreview(mdText: string) {
    let { title, body } = splitMarkdownIntoTitleAndContent(mdText);
    // Take words until 150th char
    body = takeWordsUntilNthCharacter(body, 150) + '...';
    body = MarkdownUtil.removeFootnotes(body);
    // body = mdToTxt(body);
    return { title, body };
  }

  function mdToPreview2(mdText: string) {
    let { title, body } = splitMarkdownIntoTitleAndContent(mdText);
    // Take first paragraph only
    body = body.split('\n')[0];
    body = mdToTxt(body);
    return { title, body };
  }

  function splitMarkdownIntoTitleAndContent(mdText: string) {
    // TODO
    const lines = mdText
      .split('\n\n')
      .map((line) => line.trim())
      .filter(Boolean);
    if (lines.length < 1) {
      throw Error();
    }
    const title = getTitleTextFromTitleLineMd(lines[0]);
    return {
      title,
      body: lines.slice(1).join('\n\n'),
    };
  }

  function mdToTxt(mdText: string) {
    return markdownToTxt(mdText);
  }

  function getTitleTextFromTitleLineMd(titleLine: string) {
    // TODO: Just use mdToTxt?
    titleLine = titleLine.trimStart();
    const lastStartingHashIndex = (() => {
      let startIndex = 0;
      while (titleLine[startIndex] === '#') {
        startIndex++;
      }
      return startIndex;
    })();
    return titleLine.slice(lastStartingHashIndex).trim();
  }

  function takeWordsUntilNthCharacter(text: string, n: number) {
    if (text.length <= n) {
      return text;
    }
    const lastWhitespaceCharIndex = (() => {
      const firstNChars = text.slice(0, n);
      for (let i = n - 1; i > 0; i--) {
        const letter = firstNChars[i];
        if (isWhitespace(letter)) {
          return i;
        }
      }
      throw Error();
    })();
    return text.slice(0, lastWhitespaceCharIndex);
  }

  function takeUntilNthNewLine(text: string, n: number) {
    let res = '';
    let nlRepetition = 0;
    for (const char of text) {
      if (char === '\n') {
        nlRepetition += 1;
        if (nlRepetition >= n) return res;
      }
      res += char;
    }
    return res;
  }
}
