# minify-xml

`minify-xml` is a lightweight and fast XML minifier for NodeJS with a command line.

Existing XML minifiers, such as `pretty-data` often do a pretty (*phun intended*) bad job minifying XML in usually only removing comments and whitespace between tags. `minify-xml` on the other hand also includes minification of tags, e.g. by collapsing the whitespace between multiple attributes and further minifications, such as the removal of unused namespace declarations. `minify-xml` is based on regular expressions and thus executes blazingly fast.

## Online

Use this package online to minify XMLs in your browser, visit:

**[Minify-X.ML](https://minify-x.ml/)** ([https://minify-x.ml/](https://minify-x.ml/))

## Installation

```bash
npm install minify-xml -g
```

## Usage

```js
const minifyXML = require("minify-xml").minify;

const xml = `<Tag xmlns:used = "used_ns" xmlns:unused = "unused_ns">
    <!--
        With the default options all comments will be removed, whitespace in
        tags, like spaces between attributes, will be collapsed / removed and
        elements without any content will be collapsed to empty tag elements
    -->
    <AnotherTag  attributeA  =  "..."  attributeB  =  "..."  >  </AnotherTag  >

    <!--
        Also any unused namespaces declarations will be removed by default,
        used namespaces however will be shortened to a minimum length possible
    -->
    <used:NamespaceTag  used:attribute  =  "..."  >
        any valid element content is left unaffected (strangely enough = " ... "
        and even > are valid characters in XML, only &lt; must always be encoded)
    </used:NamespaceTag  >

    <![CDATA[<FakeTag attr = "content in CDATA tags is not minified"></FakeTag>]]>
</Tag>`;

console.log(minifyXML(xml));
```

This outputs the minified XML:

```xml
<Tag xmlns:u="used_ns"><AnotherTag attributeA="..." attributeB="..."/><u:NamespaceTag u:attribute="...">
        any valid element content is left unaffected (strangely enough = " ... "
        and even > are valid characters in XML, only &lt; must always be encoded)
    </u:NamespaceTag><![CDATA[<FakeTag attr = "content in CDATA tags is not minified"></FakeTag>]]></Tag>
```

Alternatively a [Node.js `Transform` stream](https://nodejs.org/api/stream.html#stream_class_stream_transform) can be provided to minify XML streams, which is especially helpful for very large files (> 2 GiB, which is the maximum `Buffer` size in Node.js on 64-bit machines):

```js
const minifyXMLStream = require("minify-xml").minifyStream;

fs.createReadStream("sitemap.xml", "utf8")
    .pipe(minifyXMLStream())
    .pipe(process.stdout);
```

## Options

You may pass in the following options when calling minify:

```js
require("minify-xml").minify(`<tag/>`, { ... });
require("minify-xml").minifyStream({ ... });
```

- `removeComments` (default: `true`): Remove comments like `<!-- ... -->`.

- `removeWhitespaceBetweenTags` (default: `true`): Remove whitespace between tags like `<anyTag />   <anyOtherTag />`. Can be limited to tags only by passing the string `"strict"`, otherwise by default other XML constructs as the prolog `<?xml ... ?>`, processing instructions `<?pi ... ?>`, the document type declaration `<!DOCTYPE ... >`, CDATA sections `<![CDATA[ ... ]]>` and comments `<!-- ... -->` will be also considered as tags.

- `considerPreserveWhitespace` (default: `true`): Do consider the `xml:space="preserve"` attribute or `<pre>` tags in any namespace when `removeWhitespaceBetweenTags`. If set to true and `xml:space="preserve"` is specified, whitespace between tags like `<anyTag xml:space="preserve">   </anyTag>` will _not_ be removed.

- `collapseWhitespaceInTags` (default: `true`): Collapse whitespace in tags like `<anyTag   attributeA   =   "..."   attributeB    =   "..."   />`.

- `collapseEmptyElements` (default: `true`): Collapse empty elements like `<anyTag anyAttribute = "..."></anyTag>`.

- `trimWhitespaceFromTexts` (default: `false`): Remove leading and tailing whitespace in elements containing text only or a mixture of text and other elements like `<anyTag>  Hello  <anyOtherTag/>  World  </anyTag>`.

- `collapseWhitespaceInTexts` (default: `false`): Collapse whitespace in elements containing text or a mixture of text and other elements (useful for (X)HTML) like `<anyTag>Hello  World</anyTag>`.

- `collapseWhitespaceInProlog` (default: `true`): Collapse and remove whitespace in the xml prolog `<?xml version = "1.0" ?>`.

- `collapseWhitespaceInDocType` (default: `true`): Collapse and remove whitespace in the xml document type declaration `<!DOCTYPE   DocType   >`

- `removeUnusedNamespaces` (default: `true`): Remove any namespaces from tags, which are not used anywhere in the document, like `<tag xmlns:unused="any_uri" />`. Notice the word *anywhere* here, the minifier not does consider the structure of the XML document, thus namespaces which might be only used in a certain sub-tree of elements might not be removed, even though they are not used in that sub-tree.

- `removeUnusedDefaultNamespace`(default: `true`): Remove default namespace declaration like `<tag xmlns="any_uri"/>` in case there is no tag without a namespace in the whole document.

- `shortenNamespaces` (default: `true`): Shorten namespaces, like `<tag xmlns:namespace="any_namespace">` to a minimal length, e.g. `<tag xmlns:n="any_namespace">`. First an attempt is made to shorten the existing namespace to one letter only (e.g. `namespace` is shortened to `n`), in case that letter is already taken, the shortest possible other namespace is used.

- `ignoreCData` (default: `true`): Ignore any content inside of CData tags `<![CDATA[ any content ]]>`.

For stream processing following additional options can be supplied:

- `streamMaxMatchLength` (default: `262144`, 256 KiB): The maximum size of matches between chunks. See [`replacestream`](https://www.npmjs.com/package/replacestream#does-that-apply-across-more-than-2-chunks-how-does-it-work-with-regexes) for a detailed explanation.

### Stream Limitations

Note that the default `streamMaxMatchLength` was deliberately chosen as high as a multiple of the Node.js default stream buffer size (the default buffer size for readable streams is 16 KiB, for file system streams it is 64 KiB), as the stream option is specifically meant to be used with very large files / read streams and a larger `streamMaxMatchLength` will result in a more accurate minification, because some very large tags might require to be read into the buffer all at once to be minified.

On 32-bit machines the maximum buffer size in Node.js is 1 GiB and 2 GiB on 64-bit machines (see [this issue](https://bugs.chromium.org/p/v8/issues/detail?id=4153)). Minify XML can handle strings up to that size and using the `minify` function should be preferred over the `minifyStream` option. For larger files / streams the streaming API has to be used, which comes with certain limitations, because no prior knowledge can be obtained for the minification (mainly because we assume we can read the stream only once, an option to obtain the required information by e.g. first parsing a file and then minifying it might be added some time in future). For now the options `removeUnusedNamespaces`, `removeUnusedDefaultNamespace`, `shortenNamespaces` and `ignoreCData` cannot be used with the streaming API and calling the `minifyStream` function with these options enabled, will result in an error. 

Further multiple buffers of the set size, will be created for each minification option enabled (sometimes a minification requires even multiple buffers / replacements). Thus enabling more options will also allocate more memory depending on the `streamMaxMatchLength` option and in case the file / read stream is generally larger than the buffer size set. As the input will be pumped through all minification as a stream, roughly `1.5 * n * buffer size` will get allocated. E.g. the default buffer size of 256 KiB with all default options enabled for streaming, will for instance result in 11 buffers / replacements to be made, so 11 * 256 KiB = 2.75 MiB is to be allocated if the input stream is 256 KiB or larger.

## CLI

You can run `minify-xml` from the command line to minify XML files:

```bash
minify-xml sitemap.xml
minify-xml blog.atom --in-place
minify-xml view.xml --output view.min.xml
minify-xml db.xml --stream > out.xml
```

Use any of the options above like:

```bash
minify-xml index.html --collapse-whitespace-in-texts --ignore-cdata false
```

## Author

XML minifier by [Kristian Kraljić](https://kra.lc/). Original package and CLI by [Mathias Bynens](https://mathiasbynens.be/).

## Bugs

Please file any issues [on Github](https://github.com/kristian/minify-xml/issues).

## License

This library is dual licensed under the [MIT and Apache 2.0](LICENSE) licenses.