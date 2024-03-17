import { XMLParser } from 'fast-xml-parser';

function parse(xmlData: string): unknown {
  const parser = new XMLParser({
    ignoreDeclaration: true,
    parseTagValue: false,
    updateTag(tagName) {
      /** Remove some confusing tags. */
      return ![
        'MessageDate',
        'MessageSerialNumber',
      ].includes(tagName);
    },
  });
  return parser.parse(xmlData, true);
}

export {
  parse,
};
