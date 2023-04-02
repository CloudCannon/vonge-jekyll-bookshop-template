(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/slugify/slugify.js
  var require_slugify = __commonJS({
    "node_modules/slugify/slugify.js"(exports, module) {
      (function(name, root, factory) {
        if (typeof exports === "object") {
          module.exports = factory();
          module.exports["default"] = factory();
        } else if (typeof define === "function" && define.amd) {
          define(factory);
        } else {
          root[name] = factory();
        }
      })("slugify", exports, function() {
        var charMap = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial"}`);
        var locales = JSON.parse('{"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"}}');
        function replace2(string, options) {
          if (typeof string !== "string") {
            throw new Error("slugify: string argument expected");
          }
          options = typeof options === "string" ? { replacement: options } : options || {};
          var locale = locales[options.locale] || {};
          var replacement = options.replacement === void 0 ? "-" : options.replacement;
          var trim = options.trim === void 0 ? true : options.trim;
          var slug = string.normalize().split("").reduce(function(result, ch) {
            return result + (locale[ch] || charMap[ch] || (ch === replacement ? " " : ch)).replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
          }, "");
          if (options.strict) {
            slug = slug.replace(/[^A-Za-z0-9\s]/g, "");
          }
          if (trim) {
            slug = slug.trim();
          }
          slug = slug.replace(/\s+/g, replacement);
          if (options.lower) {
            slug = slug.toLowerCase();
          }
          return slug;
        }
        replace2.extend = function(customMap) {
          Object.assign(charMap, customMap);
        };
        return replace2;
      });
    }
  });

  // node_modules/@bookshop/live/lib/app/core.js
  var liveMatchRegex = /bookshop-live ((?<end>end)|name\((?<name>[^)]*)\) params\((?<params>[^)]*)\)).*/;
  var contextMatchRegex = /bookshop-live.*context\((?<context>.+)\)\s*$/;
  var normalizeName = (name) => name.replace(/\/[\w-]+\..+$/, "").replace(/\..+$/, "");
  var parseParams = (params) => params ? params.replace(/: /g, "=").split(" ").map((p) => p.split("=")) : [];
  var getTemplateCommentIterator = (node) => {
    const documentNode = node.ownerDocument ?? document;
    return documentNode.evaluate("//comment()[contains(.,'bookshop-live')]", node, null, XPathResult.ANY_TYPE, null);
  };
  var parseComment = (node) => {
    return {
      matches: node.textContent.match(liveMatchRegex),
      contextMatches: node.textContent.match(contextMatchRegex)
    };
  };
  var storeResolvedPath = (name, identifier, pathStack) => {
    identifier = identifier.replace(/^include\./, "").replace(/\[(\d+)]/g, ".$1").split(".");
    const baseIdentifier = identifier.shift();
    const existingPath = findInStack(baseIdentifier, pathStack);
    const prefix = existingPath ?? baseIdentifier;
    pathStack[pathStack.length - 1][name] = `${[prefix, ...identifier].join(".")}`;
  };
  var findInStack = (key, stack) => {
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i][key])
        return stack[i][key];
    }
    return null;
  };
  var dig = (obj, path) => {
    if (typeof path === "string")
      path = path.replace(/\[(\d+)]/g, ".$1").split(".");
    obj = obj[path.shift()];
    if (obj && path.length)
      return dig(obj, path);
    return obj;
  };
  var buildDigest = (startNode, endNode) => {
    let node = startNode.nextSibling;
    let digest = "";
    while (node && (node.compareDocumentPosition(endNode) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0) {
      switch (node.nodeType) {
        case Node.ELEMENT_NODE:
          digest += node.outerHTML;
          break;
        case Node.COMMENT_NODE:
          digest += `<!--${node.textContent}-->`;
          break;
        default:
          digest += node.textContent || "";
      }
      node = node.nextSibling;
    }
    return digest;
  };
  var replaceHTMLRegion = (startNode, endNode, outputElement) => {
    let node = startNode.nextSibling;
    while (node && (node.compareDocumentPosition(endNode) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0) {
      const next = node.nextSibling;
      node.remove();
      node = next;
    }
    while (outputElement.childNodes.length) {
      endNode.parentNode.insertBefore(outputElement.childNodes[0], endNode);
    }
  };
  var evaluateTemplate = async (liveInstance, documentNode, parentPathStack, templateBlockHandler = () => {
  }) => {
    const stack = [];
    const pathStack = parentPathStack || [{}];
    const bindings = {};
    const combinedScope = () => [liveInstance.data, ...stack.map((s) => s.scope), bindings];
    const currentScope = () => stack[stack.length - 1];
    const iterator = getTemplateCommentIterator(documentNode);
    let currentNode = iterator.iterateNext();
    while (currentNode) {
      const { matches, contextMatches } = parseComment(currentNode);
      for (const [name, identifier] of parseParams(contextMatches?.groups["context"])) {
        bindings[name] = await liveInstance.eval(identifier, combinedScope());
        storeResolvedPath(name, identifier, pathStack);
      }
      if (matches?.groups["end"]) {
        currentScope().endNode = currentNode;
        await templateBlockHandler(stack.pop());
        pathStack.pop();
      } else if (matches) {
        let scope = {};
        const params = parseParams(matches.groups["params"]);
        pathStack.push({});
        for (const [name, identifier] of params) {
          if (name === "bind") {
            const bindVals = await liveInstance.eval(identifier, combinedScope());
            if (bindVals && typeof bindVals === "object") {
              scope = { ...scope, ...bindVals };
              Object.keys(bindVals).forEach((key) => storeResolvedPath(key, `${identifier}.${key}`, pathStack));
            }
          } else {
            scope[name] = await liveInstance.eval(identifier, combinedScope());
            storeResolvedPath(name, identifier, pathStack);
          }
        }
        ;
        stack.push({
          startNode: currentNode,
          name: normalizeName(matches.groups["name"]),
          bindings: JSON.parse(JSON.stringify(bindings)),
          pathStack: JSON.parse(JSON.stringify(pathStack)),
          scope,
          params
        });
      }
      currentNode = iterator.iterateNext();
    }
  };
  var renderComponentUpdates = async (liveInstance, documentNode) => {
    const vDom = document.implementation.createHTMLDocument();
    const updates = [];
    const templateBlockHandler = async ({ startNode, endNode, name, scope, bindings, pathStack }) => {
      const output = vDom.createElement("div");
      await liveInstance.renderElement(name, scope, bindings, output);
      updates.push({ startNode, endNode, output, pathStack, scope, name });
    };
    await evaluateTemplate(liveInstance, documentNode, null, templateBlockHandler);
    return updates;
  };
  var hydrateEditorLinks = async (liveInstance, documentNode, pathsInScope, preComment, postComment) => {
    const vDom = documentNode.ownerDocument;
    const components = [];
    documentNode.prepend(preComment);
    documentNode.append(postComment);
    vDom.body.appendChild(documentNode);
    const templateBlockHandler = async (component) => {
      components.push(component);
    };
    await evaluateTemplate(liveInstance, documentNode, pathsInScope, templateBlockHandler);
    for (let { startNode, endNode, params, pathStack, scope, name } of components) {
      const isStandardComponent = liveInstance.resolveComponentType(name) === "component";
      const editorLinkFlag = scope?.editorLink ?? scope?.editor_link ?? scope?._editorLink ?? scope?._editor_link ?? isStandardComponent;
      if (editorLinkFlag) {
        let editorLink = null;
        for (const [, identifier] of params) {
          const path = findInStack(identifier, pathStack) ?? identifier;
          let pathResolves = dig(liveInstance.data, path);
          if (pathResolves) {
            editorLink = path.replace(/^page(\.|$)/, "");
            break;
          }
        }
        if (editorLink) {
          let node = startNode.nextElementSibling;
          while (node && (node.compareDocumentPosition(endNode) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0) {
            node.dataset.cmsEditorLink = `cloudcannon:#${editorLink}`;
            node = node.nextElementSibling;
          }
        }
      }
    }
    preComment.remove();
    postComment.remove();
    documentNode.remove();
  };

  // node_modules/@bookshop/live/lib/app/live.js
  var getLive = (engines2) => class BookshopLive {
    constructor(options) {
      this.engines = engines2;
      this.elements = [];
      this.globalData = {};
      this.data = {};
      this.renderOptions = {};
      this.pendingRender = false;
      this.awaitingDataFetches = options?.remoteGlobals?.length || 0;
      options?.remoteGlobals?.forEach(this.fetchGlobalData.bind(this));
    }
    async fetchGlobalData(path) {
      try {
        const dataReq = await fetch(path);
        const data = await dataReq.json();
        Object.assign(this.globalData, data);
        this.awaitingDataFetches -= 1;
      } catch (e) {
        this.awaitingDataFetches -= 1;
      }
      if (this.awaitingDataFetches <= 0 && this.pendingRender) {
        await this.render();
      }
    }
    readElement(el) {
      return {
        dom: el,
        originalHTML: el.innerHTML,
        componentName: el.dataset.bookshopLive,
        componentPropSource: el.dataset.bookshopProps
      };
    }
    resolveComponentType(componentName) {
      return this.engines[0].resolveComponentType(componentName);
    }
    async renderElement(componentName, scope, bindings, dom) {
      try {
        await this.engines[0].render(dom, componentName, scope, { ...this.globalData, ...bindings });
      } catch (e) {
        console.warn(`Error rendering bookshop component ${componentName}`, e);
        console.warn(`This is expected in certain cases, and may not be an issue, especially when deleting or re-ordering components.`);
      }
    }
    async eval(identifier, scope) {
      return await this.engines[0].eval(identifier, scope);
    }
    async update(data, options) {
      this.data = data;
      this.renderOptions = options;
      if (this.awaitingDataFetches > 0) {
        this.pendingRender = true;
      } else {
        await this.render();
      }
    }
    async render() {
      const CCEditorPanelSupport = typeof window === "undefined" || typeof window !== "undefined" && window.CloudCannon?.refreshInterface;
      const options = {
        editorLinks: CCEditorPanelSupport,
        ...this.renderOptions
      };
      if (typeof window !== "undefined" && window.bookshopEditorLinks === false) {
        options.editorLinks = false;
      }
      const componentUpdates = await renderComponentUpdates(this, document);
      for (let {
        startNode,
        endNode,
        output,
        pathStack
      } of componentUpdates) {
        if (options.editorLinks) {
          await hydrateEditorLinks(this, output, pathStack, startNode.cloneNode(), endNode.cloneNode());
        }
        if (buildDigest(startNode, endNode) === output.innerHTML) {
          continue;
        }
        replaceHTMLRegion(startNode, endNode, output);
      }
    }
  };

  // node_modules/liquidjs/dist/liquid.browser.esm.js
  var Drop = class {
    valueOf() {
      return void 0;
    }
    liquidMethodMissing(key) {
      return void 0;
    }
  };
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var toStr = Object.prototype.toString;
  var toLowerCase = String.prototype.toLowerCase;
  function isString(value) {
    return typeof value === "string";
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function stringify(value) {
    value = toValue(value);
    if (isString(value))
      return value;
    if (isNil(value))
      return "";
    return String(value);
  }
  function toValue(value) {
    return value instanceof Drop ? value.valueOf() : value;
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function toLiquid(value) {
    if (value && isFunction(value.toLiquid))
      return toLiquid(value.toLiquid());
    return value;
  }
  function isNil(value) {
    return value == null;
  }
  function isArray(value) {
    return toStr.call(value) === "[object Array]";
  }
  function forOwn(object, iteratee) {
    object = object || {};
    for (const k in object) {
      if (object.hasOwnProperty(k)) {
        if (iteratee(object[k], k, object) === false)
          break;
      }
    }
    return object;
  }
  function last(arr) {
    return arr[arr.length - 1];
  }
  function isObject(value) {
    const type = typeof value;
    return value !== null && (type === "object" || type === "function");
  }
  function range(start, stop, step = 1) {
    const arr = [];
    for (let i = start; i < stop; i += step) {
      arr.push(i);
    }
    return arr;
  }
  function padStart(str, length, ch = " ") {
    return pad(str, length, ch, (str2, ch2) => ch2 + str2);
  }
  function padEnd(str, length, ch = " ") {
    return pad(str, length, ch, (str2, ch2) => str2 + ch2);
  }
  function pad(str, length, ch, add) {
    str = String(str);
    let n = length - str.length;
    while (n-- > 0)
      str = add(str, ch);
    return str;
  }
  function identify(val) {
    return val;
  }
  function snakeCase(str) {
    return str.replace(/(\w?)([A-Z])/g, (_, a, b) => (a ? a + "_" : "") + b.toLowerCase());
  }
  function changeCase(str) {
    const hasLowerCase = [...str].some((ch) => ch >= "a" && ch <= "z");
    return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
  }
  function ellipsis(str, N) {
    return str.length > N ? str.substr(0, N - 3) + "..." : str;
  }
  function caseInsensitiveCompare(a, b) {
    if (a == null && b == null)
      return 0;
    if (a == null)
      return 1;
    if (b == null)
      return -1;
    a = toLowerCase.call(a);
    b = toLowerCase.call(b);
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  }
  var Node2 = class {
    constructor(key, value, next, prev) {
      this.key = key;
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  };
  var LRU = class {
    constructor(limit2, size2 = 0) {
      this.limit = limit2;
      this.size = size2;
      this.cache = {};
      this.head = new Node2("HEAD", null, null, null);
      this.tail = new Node2("TAIL", null, null, null);
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
    write(key, value) {
      if (this.cache[key]) {
        this.cache[key].value = value;
      } else {
        const node = new Node2(key, value, this.head.next, this.head);
        this.head.next.prev = node;
        this.head.next = node;
        this.cache[key] = node;
        this.size++;
        this.ensureLimit();
      }
    }
    read(key) {
      if (!this.cache[key])
        return;
      const { value } = this.cache[key];
      this.remove(key);
      this.write(key, value);
      return value;
    }
    remove(key) {
      const node = this.cache[key];
      node.prev.next = node.next;
      node.next.prev = node.prev;
      delete this.cache[key];
      this.size--;
    }
    clear() {
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.size = 0;
      this.cache = {};
    }
    ensureLimit() {
      if (this.size > this.limit)
        this.remove(this.tail.prev.key);
    }
  };
  function domResolve(root, path) {
    const base = document.createElement("base");
    base.href = root;
    const head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);
    const a = document.createElement("a");
    a.href = path;
    const resolved = a.href;
    head.removeChild(base);
    return resolved;
  }
  function resolve(root, filepath, ext) {
    if (root.length && last(root) !== "/")
      root += "/";
    const url = domResolve(root, filepath);
    return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (str, origin, path) => {
      const last2 = path.split("/").pop();
      if (/\.\w+$/.test(last2))
        return str;
      return origin + path + ext;
    });
  }
  async function readFile(url) {
    return new Promise((resolve2, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve2(xhr.responseText);
        } else {
          reject(new Error(xhr.statusText));
        }
      };
      xhr.onerror = () => {
        reject(new Error("An error occurred whilst receiving the response."));
      };
      xhr.open("GET", url);
      xhr.send();
    });
  }
  function readFileSync(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.status < 200 || xhr.status >= 300) {
      throw new Error(xhr.statusText);
    }
    return xhr.responseText;
  }
  async function exists(filepath) {
    return true;
  }
  function existsSync(filepath) {
    return true;
  }
  var fs = /* @__PURE__ */ Object.freeze({
    resolve,
    readFile,
    readFileSync,
    exists,
    existsSync
  });
  function isComparable(arg) {
    return arg && isFunction(arg.equals);
  }
  function isTruthy(val, ctx) {
    return !isFalsy(val, ctx);
  }
  function isFalsy(val, ctx) {
    if (ctx.opts.jsTruthy) {
      return !val;
    } else {
      return val === false || val === void 0 || val === null;
    }
  }
  var defaultOperators = {
    "==": (l, r) => {
      if (isComparable(l))
        return l.equals(r);
      if (isComparable(r))
        return r.equals(l);
      return l === r;
    },
    "!=": (l, r) => {
      if (isComparable(l))
        return !l.equals(r);
      if (isComparable(r))
        return !r.equals(l);
      return l !== r;
    },
    ">": (l, r) => {
      if (isComparable(l))
        return l.gt(r);
      if (isComparable(r))
        return r.lt(l);
      return l > r;
    },
    "<": (l, r) => {
      if (isComparable(l))
        return l.lt(r);
      if (isComparable(r))
        return r.gt(l);
      return l < r;
    },
    ">=": (l, r) => {
      if (isComparable(l))
        return l.geq(r);
      if (isComparable(r))
        return r.leq(l);
      return l >= r;
    },
    "<=": (l, r) => {
      if (isComparable(l))
        return l.leq(r);
      if (isComparable(r))
        return r.geq(l);
      return l <= r;
    },
    "contains": (l, r) => {
      return l && isFunction(l.indexOf) ? l.indexOf(r) > -1 : false;
    },
    "and": (l, r, ctx) => isTruthy(l, ctx) && isTruthy(r, ctx),
    "or": (l, r, ctx) => isTruthy(l, ctx) || isTruthy(r, ctx)
  };
  var TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  var IDENTIFIER = 1;
  var BLANK = 4;
  var QUOTE = 8;
  var INLINE_BLANK = 16;
  var NUMBER = 32;
  var SIGN = 64;
  TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;
  function createTrie(operators) {
    const trie = {};
    for (const [name, handler] of Object.entries(operators)) {
      let node = trie;
      for (let i = 0; i < name.length; i++) {
        const c = name[i];
        node[c] = node[c] || {};
        if (i === name.length - 1 && TYPES[name.charCodeAt(i)] & IDENTIFIER) {
          node[c].needBoundary = true;
        }
        node = node[c];
      }
      node.handler = handler;
      node.end = true;
    }
    return trie;
  }
  var defaultOptions = {
    root: ["."],
    layouts: ["."],
    partials: ["."],
    relativeReference: true,
    cache: void 0,
    extname: "",
    fs,
    dynamicPartials: true,
    jsTruthy: false,
    trimTagRight: false,
    trimTagLeft: false,
    trimOutputRight: false,
    trimOutputLeft: false,
    greedy: true,
    tagDelimiterLeft: "{%",
    tagDelimiterRight: "%}",
    outputDelimiterLeft: "{{",
    outputDelimiterRight: "}}",
    preserveTimezones: false,
    strictFilters: false,
    strictVariables: false,
    lenientIf: false,
    globals: {},
    keepOutputType: false,
    operators: defaultOperators,
    operatorsTrie: createTrie(defaultOperators)
  };
  function normalize(options) {
    options = options || {};
    if (options.hasOwnProperty("root")) {
      options.root = normalizeDirectoryList(options.root);
    }
    if (options.hasOwnProperty("partials")) {
      options.partials = normalizeDirectoryList(options.partials);
    }
    if (options.hasOwnProperty("layouts")) {
      options.layouts = normalizeDirectoryList(options.layouts);
    }
    if (options.hasOwnProperty("cache")) {
      let cache;
      if (typeof options.cache === "number")
        cache = options.cache > 0 ? new LRU(options.cache) : void 0;
      else if (typeof options.cache === "object")
        cache = options.cache;
      else
        cache = options.cache ? new LRU(1024) : void 0;
      options.cache = cache;
    }
    if (options.hasOwnProperty("operators")) {
      options.operatorsTrie = createTrie(options.operators);
    }
    return options;
  }
  function applyDefault(options) {
    const fullOptions = Object.assign({}, defaultOptions, options);
    if (fullOptions.partials === defaultOptions.partials) {
      fullOptions.partials = fullOptions.root;
    }
    if (fullOptions.layouts === defaultOptions.layouts) {
      fullOptions.layouts = fullOptions.root;
    }
    return fullOptions;
  }
  function normalizeDirectoryList(value) {
    let list = [];
    if (isArray(value))
      list = value;
    if (isString(value))
      list = [value];
    return list.map((str) => resolve(str, ".", "")).map((str) => str[str.length - 1] !== "/" ? str + "/" : str);
  }
  var LiquidError = class extends Error {
    constructor(err, token) {
      super(err.message);
      this.originalError = err;
      this.token = token;
      this.context = "";
    }
    update() {
      const err = this.originalError;
      this.context = mkContext(this.token);
      this.message = mkMessage(err.message, this.token);
      this.stack = this.message + "\n" + this.context + "\n" + this.stack + "\nFrom " + err.stack;
    }
  };
  var TokenizationError = class extends LiquidError {
    constructor(message, token) {
      super(new Error(message), token);
      this.name = "TokenizationError";
      super.update();
    }
  };
  var ParseError = class extends LiquidError {
    constructor(err, token) {
      super(err, token);
      this.name = "ParseError";
      this.message = err.message;
      super.update();
    }
  };
  var RenderError = class extends LiquidError {
    constructor(err, tpl) {
      super(err, tpl.token);
      this.name = "RenderError";
      this.message = err.message;
      super.update();
    }
    static is(obj) {
      return obj.name === "RenderError";
    }
  };
  var UndefinedVariableError = class extends LiquidError {
    constructor(err, token) {
      super(err, token);
      this.name = "UndefinedVariableError";
      this.message = err.message;
      super.update();
    }
  };
  var InternalUndefinedVariableError = class extends Error {
    constructor(variableName) {
      super(`undefined variable: ${variableName}`);
      this.name = "InternalUndefinedVariableError";
      this.variableName = variableName;
    }
  };
  var AssertionError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "AssertionError";
      this.message = message + "";
    }
  };
  function mkContext(token) {
    const [line] = token.getPosition();
    const lines = token.input.split("\n");
    const begin = Math.max(line - 2, 1);
    const end = Math.min(line + 3, lines.length);
    const context = range(begin, end + 1).map((lineNumber) => {
      const indicator = lineNumber === line ? ">> " : "   ";
      const num = padStart(String(lineNumber), String(end).length);
      const text = lines[lineNumber - 1];
      return `${indicator}${num}| ${text}`;
    }).join("\n");
    return context;
  }
  function mkMessage(msg, token) {
    if (token.file)
      msg += `, file:${token.file}`;
    const [line, col] = token.getPosition();
    msg += `, line:${line}, col:${col}`;
    return msg;
  }
  var Context = class {
    constructor(env = {}, opts = defaultOptions, sync = false) {
      this.scopes = [{}];
      this.registers = {};
      this.sync = sync;
      this.opts = opts;
      this.globals = opts.globals;
      this.environments = env;
    }
    getRegister(key) {
      return this.registers[key] = this.registers[key] || {};
    }
    setRegister(key, value) {
      return this.registers[key] = value;
    }
    saveRegister(...keys) {
      return keys.map((key) => [key, this.getRegister(key)]);
    }
    restoreRegister(keyValues) {
      return keyValues.forEach(([key, value]) => this.setRegister(key, value));
    }
    getAll() {
      return [this.globals, this.environments, ...this.scopes].reduce((ctx, val) => __assign(ctx, val), {});
    }
    get(paths) {
      const scope = this.findScope(paths[0]);
      return this.getFromScope(scope, paths);
    }
    getFromScope(scope, paths) {
      if (typeof paths === "string")
        paths = paths.split(".");
      return paths.reduce((scope2, path) => {
        scope2 = readProperty(scope2, path);
        if (isNil(scope2) && this.opts.strictVariables) {
          throw new InternalUndefinedVariableError(path);
        }
        return scope2;
      }, scope);
    }
    push(ctx) {
      return this.scopes.push(ctx);
    }
    pop() {
      return this.scopes.pop();
    }
    bottom() {
      return this.scopes[0];
    }
    findScope(key) {
      for (let i = this.scopes.length - 1; i >= 0; i--) {
        const candidate = this.scopes[i];
        if (key in candidate)
          return candidate;
      }
      if (key in this.environments)
        return this.environments;
      return this.globals;
    }
  };
  function readProperty(obj, key) {
    if (isNil(obj))
      return obj;
    obj = toLiquid(obj);
    if (isFunction(obj[key]))
      return obj[key]();
    if (obj instanceof Drop) {
      if (obj.hasOwnProperty(key))
        return obj[key];
      return obj.liquidMethodMissing(key);
    }
    if (key === "size")
      return readSize(obj);
    if (key === "first")
      return readFirst(obj);
    if (key === "last")
      return readLast(obj);
    return obj[key];
  }
  function readFirst(obj) {
    if (isArray(obj))
      return obj[0];
    return obj["first"];
  }
  function readLast(obj) {
    if (isArray(obj))
      return obj[obj.length - 1];
    return obj["last"];
  }
  function readSize(obj) {
    if (isArray(obj) || isString(obj))
      return obj.length;
    return obj["size"];
  }
  var LookupType;
  (function(LookupType2) {
    LookupType2["Partials"] = "partials";
    LookupType2["Layouts"] = "layouts";
    LookupType2["Root"] = "root";
  })(LookupType || (LookupType = {}));
  var Loader = class {
    constructor(options) {
      this.options = options;
    }
    *lookup(file, type, sync, currentFile) {
      const { fs: fs2 } = this.options;
      const dirs = this.options[type];
      for (const filepath of this.candidates(file, dirs, currentFile, type !== LookupType.Root)) {
        if (sync ? fs2.existsSync(filepath) : yield fs2.exists(filepath))
          return filepath;
      }
      throw this.lookupError(file, dirs);
    }
    shouldLoadRelative(currentFile) {
      return this.options.relativeReference && this.isRelativePath(currentFile);
    }
    isRelativePath(path) {
      return path.startsWith("./") || path.startsWith("../");
    }
    *candidates(file, dirs, currentFile, enforceRoot) {
      const { fs: fs2, extname } = this.options;
      if (this.shouldLoadRelative(file) && currentFile) {
        const referenced = fs2.resolve(this.dirname(currentFile), file, extname);
        for (const dir of dirs) {
          if (!enforceRoot || referenced.startsWith(dir)) {
            yield referenced;
            return;
          }
        }
      }
      for (const dir of dirs) {
        const referenced = fs2.resolve(dir, file, extname);
        if (!enforceRoot || referenced.startsWith(dir)) {
          yield referenced;
        }
      }
      if (fs2.fallback !== void 0) {
        const filepath = fs2.fallback(file);
        if (filepath !== void 0)
          yield filepath;
      }
    }
    dirname(path) {
      const segments = path.split("/");
      segments.pop();
      return segments.join("/");
    }
    lookupError(file, roots) {
      const err = new Error("ENOENT");
      err.message = `ENOENT: Failed to lookup "${file}" in "${roots}"`;
      err.code = "ENOENT";
      return err;
    }
  };
  var SimpleEmitter = class {
    constructor() {
      this.buffer = "";
    }
    write(html) {
      this.buffer += stringify(html);
    }
  };
  var StreamedEmitter = class {
    constructor() {
      this.buffer = "";
      this.stream = null;
      throw new Error("streaming not supported in browser");
    }
  };
  function createResolvedThenable(value) {
    const ret = {
      then: (resolve2) => resolve2(value),
      catch: () => ret
    };
    return ret;
  }
  function createRejectedThenable(err) {
    const ret = {
      then: (resolve2, reject) => {
        if (reject)
          return reject(err);
        return ret;
      },
      catch: (reject) => reject(err)
    };
    return ret;
  }
  function isThenable(val) {
    return val && isFunction(val.then);
  }
  function isAsyncIterator(val) {
    return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
  }
  function toThenable(val) {
    if (isThenable(val))
      return val;
    if (isAsyncIterator(val))
      return reduce();
    return createResolvedThenable(val);
    function reduce(prev) {
      let state;
      try {
        state = val.next(prev);
      } catch (err) {
        return createRejectedThenable(err);
      }
      if (state.done)
        return createResolvedThenable(state.value);
      return toThenable(state.value).then(reduce, (err) => {
        let state2;
        try {
          state2 = val.throw(err);
        } catch (e) {
          return createRejectedThenable(e);
        }
        if (state2.done)
          return createResolvedThenable(state2.value);
        return reduce(state2.value);
      });
    }
  }
  function toPromise(val) {
    return Promise.resolve(toThenable(val));
  }
  function toValue$1(val) {
    let ret;
    toThenable(val).then((x) => {
      ret = x;
      return createResolvedThenable(ret);
    }).catch((err) => {
      throw err;
    });
    return ret;
  }
  var KeepingTypeEmitter = class {
    constructor() {
      this.buffer = "";
    }
    write(html) {
      html = toValue(html);
      if (typeof html !== "string" && this.buffer === "") {
        this.buffer = html;
      } else {
        this.buffer = stringify(this.buffer) + stringify(html);
      }
    }
  };
  var Render = class {
    renderTemplatesToNodeStream(templates, ctx) {
      const emitter = new StreamedEmitter();
      Promise.resolve().then(() => toThenable(this.renderTemplates(templates, ctx, emitter))).then(() => emitter.end(), (err) => emitter.error(err));
      return emitter.stream;
    }
    *renderTemplates(templates, ctx, emitter) {
      if (!emitter) {
        emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
      }
      for (const tpl of templates) {
        try {
          const html = yield tpl.render(ctx, emitter);
          html && emitter.write(html);
          if (emitter["break"] || emitter["continue"])
            break;
        } catch (e) {
          const err = RenderError.is(e) ? e : new RenderError(e, tpl);
          throw err;
        }
      }
      return emitter.buffer;
    }
  };
  var TokenKind;
  (function(TokenKind2) {
    TokenKind2[TokenKind2["Number"] = 1] = "Number";
    TokenKind2[TokenKind2["Literal"] = 2] = "Literal";
    TokenKind2[TokenKind2["Tag"] = 4] = "Tag";
    TokenKind2[TokenKind2["Output"] = 8] = "Output";
    TokenKind2[TokenKind2["HTML"] = 16] = "HTML";
    TokenKind2[TokenKind2["Filter"] = 32] = "Filter";
    TokenKind2[TokenKind2["Hash"] = 64] = "Hash";
    TokenKind2[TokenKind2["PropertyAccess"] = 128] = "PropertyAccess";
    TokenKind2[TokenKind2["Word"] = 256] = "Word";
    TokenKind2[TokenKind2["Range"] = 512] = "Range";
    TokenKind2[TokenKind2["Quoted"] = 1024] = "Quoted";
    TokenKind2[TokenKind2["Operator"] = 2048] = "Operator";
    TokenKind2[TokenKind2["Delimited"] = 12] = "Delimited";
  })(TokenKind || (TokenKind = {}));
  function isDelimitedToken(val) {
    return !!(getKind(val) & TokenKind.Delimited);
  }
  function isOperatorToken(val) {
    return getKind(val) === TokenKind.Operator;
  }
  function isHTMLToken(val) {
    return getKind(val) === TokenKind.HTML;
  }
  function isOutputToken(val) {
    return getKind(val) === TokenKind.Output;
  }
  function isTagToken(val) {
    return getKind(val) === TokenKind.Tag;
  }
  function isQuotedToken(val) {
    return getKind(val) === TokenKind.Quoted;
  }
  function isLiteralToken(val) {
    return getKind(val) === TokenKind.Literal;
  }
  function isNumberToken(val) {
    return getKind(val) === TokenKind.Number;
  }
  function isPropertyAccessToken(val) {
    return getKind(val) === TokenKind.PropertyAccess;
  }
  function isWordToken(val) {
    return getKind(val) === TokenKind.Word;
  }
  function isRangeToken(val) {
    return getKind(val) === TokenKind.Range;
  }
  function getKind(val) {
    return val ? val.kind : -1;
  }
  var ParseStream = class {
    constructor(tokens, parseToken) {
      this.handlers = {};
      this.stopRequested = false;
      this.tokens = tokens;
      this.parseToken = parseToken;
    }
    on(name, cb) {
      this.handlers[name] = cb;
      return this;
    }
    trigger(event, arg) {
      const h = this.handlers[event];
      return h ? (h.call(this, arg), true) : false;
    }
    start() {
      this.trigger("start");
      let token;
      while (!this.stopRequested && (token = this.tokens.shift())) {
        if (this.trigger("token", token))
          continue;
        if (isTagToken(token) && this.trigger(`tag:${token.name}`, token)) {
          continue;
        }
        const template = this.parseToken(token, this.tokens);
        this.trigger("template", template);
      }
      if (!this.stopRequested)
        this.trigger("end");
      return this;
    }
    stop() {
      this.stopRequested = true;
      return this;
    }
  };
  var TemplateImpl = class {
    constructor(token) {
      this.token = token;
    }
  };
  function assert(predicate, message) {
    if (!predicate) {
      const msg = message ? message() : `expect ${predicate} to be true`;
      throw new AssertionError(msg);
    }
  }
  var NullDrop = class extends Drop {
    equals(value) {
      return isNil(toValue(value));
    }
    gt() {
      return false;
    }
    geq() {
      return false;
    }
    lt() {
      return false;
    }
    leq() {
      return false;
    }
    valueOf() {
      return null;
    }
  };
  var EmptyDrop = class extends Drop {
    equals(value) {
      if (value instanceof EmptyDrop)
        return false;
      value = toValue(value);
      if (isString(value) || isArray(value))
        return value.length === 0;
      if (isObject(value))
        return Object.keys(value).length === 0;
      return false;
    }
    gt() {
      return false;
    }
    geq() {
      return false;
    }
    lt() {
      return false;
    }
    leq() {
      return false;
    }
    valueOf() {
      return "";
    }
  };
  var BlankDrop = class extends EmptyDrop {
    equals(value) {
      if (value === false)
        return true;
      if (isNil(toValue(value)))
        return true;
      if (isString(value))
        return /^\s*$/.test(value);
      return super.equals(value);
    }
  };
  var nil = new NullDrop();
  var literalValues = {
    "true": true,
    "false": false,
    "nil": nil,
    "null": nil,
    "empty": new EmptyDrop(),
    "blank": new BlankDrop()
  };
  var rHex = /[\da-fA-F]/;
  var rOct = /[0-7]/;
  var escapeChar = {
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "	",
    v: "\v"
  };
  function hexVal(c) {
    const code = c.charCodeAt(0);
    if (code >= 97)
      return code - 87;
    if (code >= 65)
      return code - 55;
    return code - 48;
  }
  function parseStringLiteral(str) {
    let ret = "";
    for (let i = 1; i < str.length - 1; i++) {
      if (str[i] !== "\\") {
        ret += str[i];
        continue;
      }
      if (escapeChar[str[i + 1]] !== void 0) {
        ret += escapeChar[str[++i]];
      } else if (str[i + 1] === "u") {
        let val = 0;
        let j = i + 2;
        while (j <= i + 5 && rHex.test(str[j])) {
          val = val * 16 + hexVal(str[j++]);
        }
        i = j - 1;
        ret += String.fromCharCode(val);
      } else if (!rOct.test(str[i + 1])) {
        ret += str[++i];
      } else {
        let j = i + 1;
        let val = 0;
        while (j <= i + 3 && rOct.test(str[j])) {
          val = val * 8 + hexVal(str[j++]);
        }
        i = j - 1;
        ret += String.fromCharCode(val);
      }
    }
    return ret;
  }
  var Expression = class {
    constructor(tokens) {
      this.postfix = [...toPostfix(tokens)];
    }
    *evaluate(ctx, lenient) {
      assert(ctx, () => "unable to evaluate: context not defined");
      const operands = [];
      for (const token of this.postfix) {
        if (isOperatorToken(token)) {
          const r = yield operands.pop();
          const l = yield operands.pop();
          const result = evalOperatorToken(ctx.opts.operators, token, l, r, ctx);
          operands.push(result);
        } else {
          operands.push(yield evalToken(token, ctx, lenient && this.postfix.length === 1));
        }
      }
      return operands[0];
    }
  };
  function evalToken(token, ctx, lenient = false) {
    if (isPropertyAccessToken(token))
      return evalPropertyAccessToken(token, ctx, lenient);
    if (isRangeToken(token))
      return evalRangeToken(token, ctx);
    if (isLiteralToken(token))
      return evalLiteralToken(token);
    if (isNumberToken(token))
      return evalNumberToken(token);
    if (isWordToken(token))
      return token.getText();
    if (isQuotedToken(token))
      return evalQuotedToken(token);
  }
  function evalPropertyAccessToken(token, ctx, lenient) {
    const props = token.props.map((prop) => evalToken(prop, ctx, false));
    try {
      return ctx.get([token.propertyName, ...props]);
    } catch (e) {
      if (lenient && e.name === "InternalUndefinedVariableError")
        return null;
      throw new UndefinedVariableError(e, token);
    }
  }
  function evalNumberToken(token) {
    const str = token.whole.content + "." + (token.decimal ? token.decimal.content : "");
    return Number(str);
  }
  function evalQuotedToken(token) {
    return parseStringLiteral(token.getText());
  }
  function evalOperatorToken(operators, token, lhs, rhs, ctx) {
    const impl = operators[token.operator];
    return impl(lhs, rhs, ctx);
  }
  function evalLiteralToken(token) {
    return literalValues[token.literal];
  }
  function evalRangeToken(token, ctx) {
    const low = evalToken(token.lhs, ctx);
    const high = evalToken(token.rhs, ctx);
    return range(+low, +high + 1);
  }
  function* toPostfix(tokens) {
    const ops = [];
    for (const token of tokens) {
      if (isOperatorToken(token)) {
        while (ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence()) {
          yield ops.pop();
        }
        ops.push(token);
      } else
        yield token;
    }
    while (ops.length) {
      yield ops.pop();
    }
  }
  var Token = class {
    constructor(kind, input, begin, end, file) {
      this.kind = kind;
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
    }
    getText() {
      return this.input.slice(this.begin, this.end);
    }
    getPosition() {
      let [row, col] = [1, 1];
      for (let i = 0; i < this.begin; i++) {
        if (this.input[i] === "\n") {
          row++;
          col = 1;
        } else
          col++;
      }
      return [row, col];
    }
    size() {
      return this.end - this.begin;
    }
  };
  var DelimitedToken = class extends Token {
    constructor(kind, content, input, begin, end, trimLeft2, trimRight2, file) {
      super(kind, input, begin, end, file);
      this.trimLeft = false;
      this.trimRight = false;
      this.content = this.getText();
      const tl = content[0] === "-";
      const tr = last(content) === "-";
      this.content = content.slice(tl ? 1 : 0, tr ? -1 : content.length).trim();
      this.trimLeft = tl || trimLeft2;
      this.trimRight = tr || trimRight2;
    }
  };
  function whiteSpaceCtrl(tokens, options) {
    let inRaw = false;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!isDelimitedToken(token))
        continue;
      if (!inRaw && token.trimLeft) {
        trimLeft(tokens[i - 1], options.greedy);
      }
      if (isTagToken(token)) {
        if (token.name === "raw")
          inRaw = true;
        else if (token.name === "endraw")
          inRaw = false;
      }
      if (!inRaw && token.trimRight) {
        trimRight(tokens[i + 1], options.greedy);
      }
    }
  }
  function trimLeft(token, greedy) {
    if (!token || !isHTMLToken(token))
      return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
      token.trimRight++;
  }
  function trimRight(token, greedy) {
    if (!token || !isHTMLToken(token))
      return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
      token.trimLeft++;
    if (token.input.charAt(token.begin + token.trimLeft) === "\n")
      token.trimLeft++;
  }
  var NumberToken = class extends Token {
    constructor(whole, decimal) {
      super(TokenKind.Number, whole.input, whole.begin, decimal ? decimal.end : whole.end, whole.file);
      this.whole = whole;
      this.decimal = decimal;
    }
  };
  var IdentifierToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Word, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.content = this.getText();
    }
    isNumber(allowSign = false) {
      const begin = allowSign && TYPES[this.input.charCodeAt(this.begin)] & SIGN ? this.begin + 1 : this.begin;
      for (let i = begin; i < this.end; i++) {
        if (!(TYPES[this.input.charCodeAt(i)] & NUMBER))
          return false;
      }
      return true;
    }
  };
  var LiteralToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Literal, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.literal = this.getText();
    }
  };
  var precedence = {
    "==": 1,
    "!=": 1,
    ">": 1,
    "<": 1,
    ">=": 1,
    "<=": 1,
    "contains": 1,
    "and": 0,
    "or": 0
  };
  var OperatorToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Operator, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.operator = this.getText();
    }
    getPrecedence() {
      const key = this.getText();
      return key in precedence ? precedence[key] : 1;
    }
  };
  var PropertyAccessToken = class extends Token {
    constructor(variable, props, end) {
      super(TokenKind.PropertyAccess, variable.input, variable.begin, end, variable.file);
      this.variable = variable;
      this.props = props;
      this.propertyName = this.variable instanceof IdentifierToken ? this.variable.getText() : parseStringLiteral(this.variable.getText());
    }
  };
  var FilterToken = class extends Token {
    constructor(name, args, input, begin, end, file) {
      super(TokenKind.Filter, input, begin, end, file);
      this.name = name;
      this.args = args;
    }
  };
  var HashToken = class extends Token {
    constructor(input, begin, end, name, value, file) {
      super(TokenKind.Hash, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.name = name;
      this.value = value;
      this.file = file;
    }
  };
  var QuotedToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Quoted, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
    }
  };
  var HTMLToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.HTML, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.trimLeft = 0;
      this.trimRight = 0;
    }
    getContent() {
      return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    }
  };
  var RangeToken = class extends Token {
    constructor(input, begin, end, lhs, rhs, file) {
      super(TokenKind.Range, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.lhs = lhs;
      this.rhs = rhs;
      this.file = file;
    }
  };
  var OutputToken = class extends DelimitedToken {
    constructor(input, begin, end, options, file) {
      const { trimOutputLeft, trimOutputRight, outputDelimiterLeft, outputDelimiterRight } = options;
      const value = input.slice(begin + outputDelimiterLeft.length, end - outputDelimiterRight.length);
      super(TokenKind.Output, value, input, begin, end, trimOutputLeft, trimOutputRight, file);
    }
  };
  function matchOperator(str, begin, trie, end = str.length) {
    let node = trie;
    let i = begin;
    let info;
    while (node[str[i]] && i < end) {
      node = node[str[i++]];
      if (node["end"])
        info = node;
    }
    if (!info)
      return -1;
    if (info["needBoundary"] && TYPES[str.charCodeAt(i)] & IDENTIFIER)
      return -1;
    return i;
  }
  var Tokenizer = class {
    constructor(input, trie, file = "") {
      this.input = input;
      this.trie = trie;
      this.file = file;
      this.p = 0;
      this.rawBeginAt = -1;
      this.N = input.length;
    }
    readExpression() {
      return new Expression(this.readExpressionTokens());
    }
    *readExpressionTokens() {
      const operand = this.readValue();
      if (!operand)
        return;
      yield operand;
      while (this.p < this.N) {
        const operator = this.readOperator();
        if (!operator)
          return;
        const operand2 = this.readValue();
        if (!operand2)
          return;
        yield operator;
        yield operand2;
      }
    }
    readOperator() {
      this.skipBlank();
      const end = matchOperator(this.input, this.p, this.trie, this.p + 8);
      if (end === -1)
        return;
      return new OperatorToken(this.input, this.p, this.p = end, this.file);
    }
    readFilters() {
      const filters = [];
      while (true) {
        const filter = this.readFilter();
        if (!filter)
          return filters;
        filters.push(filter);
      }
    }
    readFilter() {
      this.skipBlank();
      if (this.end())
        return null;
      assert(this.peek() === "|", () => `unexpected token at ${this.snapshot()}`);
      this.p++;
      const begin = this.p;
      const name = this.readIdentifier();
      if (!name.size())
        return null;
      const args = [];
      this.skipBlank();
      if (this.peek() === ":") {
        do {
          ++this.p;
          const arg = this.readFilterArg();
          arg && args.push(arg);
          while (this.p < this.N && this.peek() !== "," && this.peek() !== "|")
            ++this.p;
        } while (this.peek() === ",");
      }
      return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
    }
    readFilterArg() {
      const key = this.readValue();
      if (!key)
        return;
      this.skipBlank();
      if (this.peek() !== ":")
        return key;
      ++this.p;
      const value = this.readValue();
      return [key.getText(), value];
    }
    readTopLevelTokens(options = defaultOptions) {
      const tokens = [];
      while (this.p < this.N) {
        const token = this.readTopLevelToken(options);
        tokens.push(token);
      }
      whiteSpaceCtrl(tokens, options);
      return tokens;
    }
    readTopLevelToken(options) {
      const { tagDelimiterLeft, outputDelimiterLeft } = options;
      if (this.rawBeginAt > -1)
        return this.readEndrawOrRawContent(options);
      if (this.match(tagDelimiterLeft))
        return this.readTagToken(options);
      if (this.match(outputDelimiterLeft))
        return this.readOutputToken(options);
      return this.readHTMLToken(options);
    }
    readHTMLToken(options) {
      const begin = this.p;
      while (this.p < this.N) {
        const { tagDelimiterLeft, outputDelimiterLeft } = options;
        if (this.match(tagDelimiterLeft))
          break;
        if (this.match(outputDelimiterLeft))
          break;
        ++this.p;
      }
      return new HTMLToken(this.input, begin, this.p, this.file);
    }
    readTagToken(options = defaultOptions) {
      const { file, input } = this;
      const begin = this.p;
      if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
        throw this.mkError(`tag ${this.snapshot(begin)} not closed`, begin);
      }
      const token = new TagToken(input, begin, this.p, options, file);
      if (token.name === "raw")
        this.rawBeginAt = begin;
      return token;
    }
    readToDelimiter(delimiter) {
      while (this.p < this.N) {
        if (this.peekType() & QUOTE) {
          this.readQuoted();
          continue;
        }
        ++this.p;
        if (this.rmatch(delimiter))
          return this.p;
      }
      return -1;
    }
    readOutputToken(options = defaultOptions) {
      const { file, input } = this;
      const { outputDelimiterRight } = options;
      const begin = this.p;
      if (this.readToDelimiter(outputDelimiterRight) === -1) {
        throw this.mkError(`output ${this.snapshot(begin)} not closed`, begin);
      }
      return new OutputToken(input, begin, this.p, options, file);
    }
    readEndrawOrRawContent(options) {
      const { tagDelimiterLeft, tagDelimiterRight } = options;
      const begin = this.p;
      let leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
      while (this.p < this.N) {
        if (this.readIdentifier().getText() !== "endraw") {
          leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
          continue;
        }
        while (this.p <= this.N) {
          if (this.rmatch(tagDelimiterRight)) {
            const end = this.p;
            if (begin === leftPos) {
              this.rawBeginAt = -1;
              return new TagToken(this.input, begin, end, options, this.file);
            } else {
              this.p = leftPos;
              return new HTMLToken(this.input, begin, leftPos, this.file);
            }
          }
          if (this.rmatch(tagDelimiterLeft))
            break;
          this.p++;
        }
      }
      throw this.mkError(`raw ${this.snapshot(this.rawBeginAt)} not closed`, begin);
    }
    mkError(msg, begin) {
      return new TokenizationError(msg, new IdentifierToken(this.input, begin, this.N, this.file));
    }
    snapshot(begin = this.p) {
      return JSON.stringify(ellipsis(this.input.slice(begin), 16));
    }
    readWord() {
      console.warn("Tokenizer#readWord() will be removed, use #readIdentifier instead");
      return this.readIdentifier();
    }
    readIdentifier() {
      this.skipBlank();
      const begin = this.p;
      while (this.peekType() & IDENTIFIER)
        ++this.p;
      return new IdentifierToken(this.input, begin, this.p, this.file);
    }
    readHashes() {
      const hashes = [];
      while (true) {
        const hash = this.readHash();
        if (!hash)
          return hashes;
        hashes.push(hash);
      }
    }
    readHash() {
      this.skipBlank();
      if (this.peek() === ",")
        ++this.p;
      const begin = this.p;
      const name = this.readIdentifier();
      if (!name.size())
        return;
      let value;
      this.skipBlank();
      if (this.peek() === ":") {
        ++this.p;
        value = this.readValue();
      }
      return new HashToken(this.input, begin, this.p, name, value, this.file);
    }
    remaining() {
      return this.input.slice(this.p);
    }
    advance(i = 1) {
      this.p += i;
    }
    end() {
      return this.p >= this.N;
    }
    readTo(end) {
      while (this.p < this.N) {
        ++this.p;
        if (this.rmatch(end))
          return this.p;
      }
      return -1;
    }
    readValue() {
      const value = this.readQuoted() || this.readRange();
      if (value)
        return value;
      if (this.peek() === "[") {
        this.p++;
        const prop = this.readQuoted();
        if (!prop)
          return;
        if (this.peek() !== "]")
          return;
        this.p++;
        return new PropertyAccessToken(prop, [], this.p);
      }
      const variable = this.readIdentifier();
      if (!variable.size())
        return;
      let isNumber2 = variable.isNumber(true);
      const props = [];
      while (true) {
        if (this.peek() === "[") {
          isNumber2 = false;
          this.p++;
          const prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
          this.readTo("]");
          props.push(prop);
        } else if (this.peek() === "." && this.peek(1) !== ".") {
          this.p++;
          const prop = this.readIdentifier();
          if (!prop.size())
            break;
          if (!prop.isNumber())
            isNumber2 = false;
          props.push(prop);
        } else
          break;
      }
      if (!props.length && literalValues.hasOwnProperty(variable.content)) {
        return new LiteralToken(this.input, variable.begin, variable.end, this.file);
      }
      if (isNumber2)
        return new NumberToken(variable, props[0]);
      return new PropertyAccessToken(variable, props, this.p);
    }
    readRange() {
      this.skipBlank();
      const begin = this.p;
      if (this.peek() !== "(")
        return;
      ++this.p;
      const lhs = this.readValueOrThrow();
      this.p += 2;
      const rhs = this.readValueOrThrow();
      ++this.p;
      return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
    }
    readValueOrThrow() {
      const value = this.readValue();
      assert(value, () => `unexpected token ${this.snapshot()}, value expected`);
      return value;
    }
    readQuoted() {
      this.skipBlank();
      const begin = this.p;
      if (!(this.peekType() & QUOTE))
        return;
      ++this.p;
      let escaped = false;
      while (this.p < this.N) {
        ++this.p;
        if (this.input[this.p - 1] === this.input[begin] && !escaped)
          break;
        if (escaped)
          escaped = false;
        else if (this.input[this.p - 1] === "\\")
          escaped = true;
      }
      return new QuotedToken(this.input, begin, this.p, this.file);
    }
    readFileName() {
      const begin = this.p;
      while (!(this.peekType() & BLANK) && this.peek() !== "," && this.p < this.N)
        this.p++;
      return new IdentifierToken(this.input, begin, this.p, this.file);
    }
    match(word) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== this.input[this.p + i])
          return false;
      }
      return true;
    }
    rmatch(pattern) {
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
          return false;
      }
      return true;
    }
    peekType(n = 0) {
      return TYPES[this.input.charCodeAt(this.p + n)];
    }
    peek(n = 0) {
      return this.input[this.p + n];
    }
    skipBlank() {
      while (this.peekType() & BLANK)
        ++this.p;
    }
  };
  var TagToken = class extends DelimitedToken {
    constructor(input, begin, end, options, file) {
      const { trimTagLeft, trimTagRight, tagDelimiterLeft, tagDelimiterRight } = options;
      const value = input.slice(begin + tagDelimiterLeft.length, end - tagDelimiterRight.length);
      super(TokenKind.Tag, value, input, begin, end, trimTagLeft, trimTagRight, file);
      const tokenizer = new Tokenizer(this.content, options.operatorsTrie);
      this.name = tokenizer.readIdentifier().getText();
      if (!this.name)
        throw new TokenizationError(`illegal tag syntax`, this);
      tokenizer.skipBlank();
      this.args = tokenizer.remaining();
    }
  };
  var Hash = class {
    constructor(markup) {
      this.hash = {};
      const tokenizer = new Tokenizer(markup, {});
      for (const hash of tokenizer.readHashes()) {
        this.hash[hash.name.content] = hash.value;
      }
    }
    *render(ctx) {
      const hash = {};
      for (const key of Object.keys(this.hash)) {
        hash[key] = this.hash[key] === void 0 ? true : yield evalToken(this.hash[key], ctx);
      }
      return hash;
    }
  };
  function isKeyValuePair(arr) {
    return isArray(arr);
  }
  var Filter = class {
    constructor(name, impl, args, liquid) {
      this.name = name;
      this.impl = impl || identify;
      this.args = args;
      this.liquid = liquid;
    }
    render(value, context) {
      const argv = [];
      for (const arg of this.args) {
        if (isKeyValuePair(arg))
          argv.push([arg[0], evalToken(arg[1], context)]);
        else
          argv.push(evalToken(arg, context));
      }
      return this.impl.apply({ context, liquid: this.liquid }, [value, ...argv]);
    }
  };
  var Value = class {
    constructor(str, liquid) {
      this.filters = [];
      const tokenizer = new Tokenizer(str, liquid.options.operatorsTrie);
      this.initial = tokenizer.readExpression();
      this.filters = tokenizer.readFilters().map(({ name, args }) => new Filter(name, liquid.filters.get(name), args, liquid));
    }
    *value(ctx, lenient) {
      lenient = lenient || ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === "default";
      let val = yield this.initial.evaluate(ctx, lenient);
      for (const filter of this.filters) {
        val = yield filter.render(val, ctx);
      }
      return val;
    }
  };
  var Tag = class extends TemplateImpl {
    constructor(token, tokens, liquid) {
      super(token);
      this.name = token.name;
      const impl = liquid.tags.get(token.name);
      this.impl = Object.create(impl);
      this.impl.liquid = liquid;
      if (this.impl.parse) {
        this.impl.parse(token, tokens);
      }
    }
    *render(ctx, emitter) {
      const hash = yield new Hash(this.token.args).render(ctx);
      const impl = this.impl;
      if (isFunction(impl.render))
        return yield impl.render(ctx, emitter, hash);
    }
  };
  var Output = class extends TemplateImpl {
    constructor(token, liquid) {
      super(token);
      this.value = new Value(token.content, liquid);
    }
    *render(ctx, emitter) {
      const val = yield this.value.value(ctx, false);
      emitter.write(val);
    }
  };
  var HTML = class extends TemplateImpl {
    constructor(token) {
      super(token);
      this.str = token.getContent();
    }
    *render(ctx, emitter) {
      emitter.write(this.str);
    }
  };
  var Parser = class {
    constructor(liquid) {
      this.liquid = liquid;
      this.cache = this.liquid.options.cache;
      this.fs = this.liquid.options.fs;
      this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
      this.loader = new Loader(this.liquid.options);
    }
    parse(html, filepath) {
      const tokenizer = new Tokenizer(html, this.liquid.options.operatorsTrie, filepath);
      const tokens = tokenizer.readTopLevelTokens(this.liquid.options);
      return this.parseTokens(tokens);
    }
    parseTokens(tokens) {
      let token;
      const templates = [];
      while (token = tokens.shift()) {
        templates.push(this.parseToken(token, tokens));
      }
      return templates;
    }
    parseToken(token, remainTokens) {
      try {
        if (isTagToken(token)) {
          return new Tag(token, remainTokens, this.liquid);
        }
        if (isOutputToken(token)) {
          return new Output(token, this.liquid);
        }
        return new HTML(token);
      } catch (e) {
        throw new ParseError(e, token);
      }
    }
    parseStream(tokens) {
      return new ParseStream(tokens, (token, tokens2) => this.parseToken(token, tokens2));
    }
    *_parseFileCached(file, sync, type = LookupType.Root, currentFile) {
      const key = this.loader.shouldLoadRelative(file) ? currentFile + "," + file : type + ":" + file;
      let templates = yield this.cache.read(key);
      if (templates)
        return templates;
      templates = yield this._parseFile(file, sync, type, currentFile);
      this.cache.write(key, templates);
      return templates;
    }
    *_parseFile(file, sync, type = LookupType.Root, currentFile) {
      const filepath = yield this.loader.lookup(file, type, sync, currentFile);
      return this.liquid.parse(sync ? this.fs.readFileSync(filepath) : yield this.fs.readFile(filepath), filepath);
    }
  };
  var assign = {
    parse: function(token) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      this.key = tokenizer.readIdentifier().content;
      tokenizer.skipBlank();
      assert(tokenizer.peek() === "=", () => `illegal token ${token.getText()}`);
      tokenizer.advance();
      this.value = tokenizer.remaining();
    },
    render: function* (ctx) {
      ctx.bottom()[this.key] = yield this.liquid._evalValue(this.value, ctx);
    }
  };
  function toEnumerable(val) {
    if (isArray(val))
      return val;
    if (isString(val) && val.length > 0)
      return [val];
    if (isObject(val))
      return Object.keys(val).map((key) => [key, val[key]]);
    return [];
  }
  function toArray(val) {
    if (isArray(val))
      return val;
    return [val];
  }
  var ForloopDrop = class extends Drop {
    constructor(length, collection, variable) {
      super();
      this.i = 0;
      this.length = length;
      this.name = `${variable}-${collection}`;
    }
    next() {
      this.i++;
    }
    index0() {
      return this.i;
    }
    index() {
      return this.i + 1;
    }
    first() {
      return this.i === 0;
    }
    last() {
      return this.i === this.length - 1;
    }
    rindex() {
      return this.length - this.i;
    }
    rindex0() {
      return this.length - this.i - 1;
    }
    valueOf() {
      return JSON.stringify(this);
    }
  };
  var MODIFIERS = ["offset", "limit", "reversed"];
  var For = {
    type: "block",
    parse: function(token, remainTokens) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      const variable = tokenizer.readIdentifier();
      const inStr = tokenizer.readIdentifier();
      const collection = tokenizer.readValue();
      assert(variable.size() && inStr.content === "in" && collection, () => `illegal tag: ${token.getText()}`);
      this.variable = variable.content;
      this.collection = collection;
      this.hash = new Hash(tokenizer.remaining());
      this.templates = [];
      this.elseTemplates = [];
      let p;
      const stream = this.liquid.parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:else", () => p = this.elseTemplates).on("tag:endfor", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${token.getText()} not closed`);
      });
      stream.start();
    },
    render: function* (ctx, emitter) {
      const r = this.liquid.renderer;
      let collection = toEnumerable(yield evalToken(this.collection, ctx));
      if (!collection.length) {
        yield r.renderTemplates(this.elseTemplates, ctx, emitter);
        return;
      }
      const hash = yield this.hash.render(ctx);
      const modifiers = this.liquid.options.orderedFilterParameters ? Object.keys(hash).filter((x) => MODIFIERS.includes(x)) : MODIFIERS.filter((x) => hash[x] !== void 0);
      collection = modifiers.reduce((collection2, modifier) => {
        if (modifier === "offset")
          return offset(collection2, hash["offset"]);
        if (modifier === "limit")
          return limit(collection2, hash["limit"]);
        return reversed(collection2);
      }, collection);
      const scope = { forloop: new ForloopDrop(collection.length, this.collection.getText(), this.variable) };
      ctx.push(scope);
      for (const item of collection) {
        scope[this.variable] = item;
        yield r.renderTemplates(this.templates, ctx, emitter);
        if (emitter["break"]) {
          emitter["break"] = false;
          break;
        }
        emitter["continue"] = false;
        scope.forloop.next();
      }
      ctx.pop();
    }
  };
  function reversed(arr) {
    return [...arr].reverse();
  }
  function offset(arr, count) {
    return arr.slice(count);
  }
  function limit(arr, count) {
    return arr.slice(0, count);
  }
  var capture = {
    parse: function(tagToken, remainTokens) {
      const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
      this.variable = readVariableName(tokenizer);
      assert(this.variable, () => `${tagToken.args} not valid identifier`);
      this.templates = [];
      const stream = this.liquid.parser.parseStream(remainTokens);
      stream.on("tag:endcapture", () => stream.stop()).on("template", (tpl) => this.templates.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    },
    render: function* (ctx) {
      const r = this.liquid.renderer;
      const html = yield r.renderTemplates(this.templates, ctx);
      ctx.bottom()[this.variable] = html;
    }
  };
  function readVariableName(tokenizer) {
    const word = tokenizer.readIdentifier().content;
    if (word)
      return word;
    const quoted = tokenizer.readQuoted();
    if (quoted)
      return evalQuotedToken(quoted);
  }
  var Case = {
    parse: function(tagToken, remainTokens) {
      this.cond = new Value(tagToken.args, this.liquid);
      this.cases = [];
      this.elseTemplates = [];
      let p = [];
      const stream = this.liquid.parser.parseStream(remainTokens).on("tag:when", (token) => {
        p = [];
        const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        while (!tokenizer.end()) {
          const value = tokenizer.readValue();
          this.cases.push({
            val: value,
            templates: p
          });
          tokenizer.readTo(",");
        }
      }).on("tag:else", () => p = this.elseTemplates).on("tag:endcase", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    },
    render: function* (ctx, emitter) {
      const r = this.liquid.renderer;
      const cond = toValue(yield this.cond.value(ctx, ctx.opts.lenientIf));
      for (const branch of this.cases) {
        const val = evalToken(branch.val, ctx, ctx.opts.lenientIf);
        if (val === cond) {
          yield r.renderTemplates(branch.templates, ctx, emitter);
          return;
        }
      }
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
  };
  var comment = {
    parse: function(tagToken, remainTokens) {
      const stream = this.liquid.parser.parseStream(remainTokens);
      stream.on("token", (token) => {
        if (token.name === "endcomment")
          stream.stop();
      }).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    }
  };
  var BlockMode;
  (function(BlockMode2) {
    BlockMode2[BlockMode2["OUTPUT"] = 0] = "OUTPUT";
    BlockMode2[BlockMode2["STORE"] = 1] = "STORE";
  })(BlockMode || (BlockMode = {}));
  var BlockMode$1 = BlockMode;
  var render = {
    parseFilePath,
    renderFilePath,
    parse: function(token) {
      const args = token.args;
      const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
      this["file"] = this.parseFilePath(tokenizer, this.liquid);
      this["currentFile"] = token.file;
      while (!tokenizer.end()) {
        tokenizer.skipBlank();
        const begin = tokenizer.p;
        const keyword = tokenizer.readIdentifier();
        if (keyword.content === "with" || keyword.content === "for") {
          tokenizer.skipBlank();
          if (tokenizer.peek() !== ":") {
            const value = tokenizer.readValue();
            if (value) {
              const beforeAs = tokenizer.p;
              const asStr = tokenizer.readIdentifier();
              let alias;
              if (asStr.content === "as")
                alias = tokenizer.readIdentifier();
              else
                tokenizer.p = beforeAs;
              this[keyword.content] = { value, alias: alias && alias.content };
              tokenizer.skipBlank();
              if (tokenizer.peek() === ",")
                tokenizer.advance();
              continue;
            }
          }
        }
        tokenizer.p = begin;
        break;
      }
      this.hash = new Hash(tokenizer.remaining());
    },
    render: function* (ctx, emitter) {
      const { liquid, hash } = this;
      const filepath = yield this.renderFilePath(this["file"], ctx, liquid);
      assert(filepath, () => `illegal filename "${filepath}"`);
      const childCtx = new Context({}, ctx.opts, ctx.sync);
      const scope = yield hash.render(ctx);
      if (this["with"]) {
        const { value, alias } = this["with"];
        scope[alias || filepath] = evalToken(value, ctx);
      }
      childCtx.push(scope);
      if (this["for"]) {
        const { value, alias } = this["for"];
        let collection = evalToken(value, ctx);
        collection = toEnumerable(collection);
        scope["forloop"] = new ForloopDrop(collection.length, value.getText(), alias);
        for (const item of collection) {
          scope[alias] = item;
          const templates = yield liquid._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
          yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
          scope.forloop.next();
        }
      } else {
        const templates = yield liquid._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
        yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
      }
    }
  };
  function parseFilePath(tokenizer, liquid) {
    if (liquid.options.dynamicPartials) {
      const file = tokenizer.readValue();
      if (file === void 0)
        throw new TypeError(`illegal argument "${tokenizer.input}"`);
      if (file.getText() === "none")
        return null;
      if (isQuotedToken(file)) {
        const tpls = liquid.parse(evalQuotedToken(file));
        if (tpls.length === 1 && isHTMLToken(tpls[0].token))
          return tpls[0].token.getContent();
        return tpls;
      }
      return file;
    }
    const filepath = tokenizer.readFileName().getText();
    return filepath === "none" ? null : filepath;
  }
  function renderFilePath(file, ctx, liquid) {
    if (typeof file === "string")
      return file;
    if (Array.isArray(file))
      return liquid.renderer.renderTemplates(file, ctx);
    return evalToken(file, ctx);
  }
  var include = {
    parseFilePath,
    renderFilePath,
    parse: function(token) {
      const args = token.args;
      const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
      this["file"] = this.parseFilePath(tokenizer, this.liquid);
      this["currentFile"] = token.file;
      const begin = tokenizer.p;
      const withStr = tokenizer.readIdentifier();
      if (withStr.content === "with") {
        tokenizer.skipBlank();
        if (tokenizer.peek() !== ":") {
          this.withVar = tokenizer.readValue();
        } else
          tokenizer.p = begin;
      } else
        tokenizer.p = begin;
      this.hash = new Hash(tokenizer.remaining());
    },
    render: function* (ctx, emitter) {
      const { liquid, hash, withVar } = this;
      const { renderer } = liquid;
      const filepath = yield this.renderFilePath(this["file"], ctx, liquid);
      assert(filepath, () => `illegal filename "${filepath}"`);
      const saved = ctx.saveRegister("blocks", "blockMode");
      ctx.setRegister("blocks", {});
      ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
      const scope = yield hash.render(ctx);
      if (withVar)
        scope[filepath] = evalToken(withVar, ctx);
      const templates = yield liquid._parsePartialFile(filepath, ctx.sync, this["currentFile"]);
      ctx.push(scope);
      yield renderer.renderTemplates(templates, ctx, emitter);
      ctx.pop();
      ctx.restoreRegister(saved);
    }
  };
  var decrement = {
    parse: function(token) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      this.variable = tokenizer.readIdentifier().content;
    },
    render: function(context, emitter) {
      const scope = context.environments;
      if (!isNumber(scope[this.variable])) {
        scope[this.variable] = 0;
      }
      emitter.write(stringify(--scope[this.variable]));
    }
  };
  var cycle = {
    parse: function(tagToken) {
      const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
      const group = tokenizer.readValue();
      tokenizer.skipBlank();
      this.candidates = [];
      if (group) {
        if (tokenizer.peek() === ":") {
          this.group = group;
          tokenizer.advance();
        } else
          this.candidates.push(group);
      }
      while (!tokenizer.end()) {
        const value = tokenizer.readValue();
        if (value)
          this.candidates.push(value);
        tokenizer.readTo(",");
      }
      assert(this.candidates.length, () => `empty candidates: ${tagToken.getText()}`);
    },
    render: function(ctx, emitter) {
      const group = evalToken(this.group, ctx);
      const fingerprint = `cycle:${group}:` + this.candidates.join(",");
      const groups = ctx.getRegister("cycle");
      let idx = groups[fingerprint];
      if (idx === void 0) {
        idx = groups[fingerprint] = 0;
      }
      const candidate = this.candidates[idx];
      idx = (idx + 1) % this.candidates.length;
      groups[fingerprint] = idx;
      const html = evalToken(candidate, ctx);
      emitter.write(html);
    }
  };
  var If = {
    parse: function(tagToken, remainTokens) {
      this.branches = [];
      this.elseTemplates = [];
      let p;
      this.liquid.parser.parseStream(remainTokens).on("start", () => this.branches.push({
        predicate: new Value(tagToken.args, this.liquid),
        templates: p = []
      })).on("tag:elsif", (token) => this.branches.push({
        predicate: new Value(token.args, this.liquid),
        templates: p = []
      })).on("tag:else", () => p = this.elseTemplates).on("tag:endif", function() {
        this.stop();
      }).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      }).start();
    },
    render: function* (ctx, emitter) {
      const r = this.liquid.renderer;
      for (const { predicate, templates } of this.branches) {
        const value = yield predicate.value(ctx, ctx.opts.lenientIf);
        if (isTruthy(value, ctx)) {
          yield r.renderTemplates(templates, ctx, emitter);
          return;
        }
      }
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
  };
  var increment = {
    parse: function(token) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      this.variable = tokenizer.readIdentifier().content;
    },
    render: function(context, emitter) {
      const scope = context.environments;
      if (!isNumber(scope[this.variable])) {
        scope[this.variable] = 0;
      }
      const val = scope[this.variable];
      scope[this.variable]++;
      emitter.write(stringify(val));
    }
  };
  var layout = {
    parseFilePath,
    renderFilePath,
    parse: function(token, remainTokens) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      this["file"] = this.parseFilePath(tokenizer, this.liquid);
      this["currentFile"] = token.file;
      this.hash = new Hash(tokenizer.remaining());
      this.tpls = this.liquid.parser.parseTokens(remainTokens);
    },
    render: function* (ctx, emitter) {
      const { liquid, hash, file } = this;
      const { renderer } = liquid;
      if (file === null) {
        ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
        yield renderer.renderTemplates(this.tpls, ctx, emitter);
        return;
      }
      const filepath = yield this.renderFilePath(this["file"], ctx, liquid);
      assert(filepath, () => `illegal filename "${filepath}"`);
      const templates = yield liquid._parseLayoutFile(filepath, ctx.sync, this["currentFile"]);
      ctx.setRegister("blockMode", BlockMode$1.STORE);
      const html = yield renderer.renderTemplates(this.tpls, ctx);
      const blocks = ctx.getRegister("blocks");
      if (blocks[""] === void 0)
        blocks[""] = (parent, emitter2) => emitter2.write(html);
      ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
      ctx.push(yield hash.render(ctx));
      yield renderer.renderTemplates(templates, ctx, emitter);
      ctx.pop();
    }
  };
  var BlockDrop = class extends Drop {
    constructor(superBlockRender = () => "") {
      super();
      this.superBlockRender = superBlockRender;
    }
    super() {
      return this.superBlockRender();
    }
  };
  var block = {
    parse(token, remainTokens) {
      const match = /\w+/.exec(token.args);
      this.block = match ? match[0] : "";
      this.tpls = [];
      this.liquid.parser.parseStream(remainTokens).on("tag:endblock", function() {
        this.stop();
      }).on("template", (tpl) => this.tpls.push(tpl)).on("end", () => {
        throw new Error(`tag ${token.getText()} not closed`);
      }).start();
    },
    *render(ctx, emitter) {
      const blockRender = this.getBlockRender(ctx);
      if (ctx.getRegister("blockMode") === BlockMode$1.STORE) {
        ctx.getRegister("blocks")[this.block] = blockRender;
      } else {
        yield blockRender(new BlockDrop(), emitter);
      }
    },
    getBlockRender(ctx) {
      const { liquid, tpls } = this;
      const renderChild = ctx.getRegister("blocks")[this.block];
      const renderCurrent = function* (superBlock, emitter) {
        ctx.push({ block: superBlock });
        yield liquid.renderer.renderTemplates(tpls, ctx, emitter);
        ctx.pop();
      };
      return renderChild ? (superBlock, emitter) => renderChild(new BlockDrop(() => renderCurrent(superBlock, emitter)), emitter) : renderCurrent;
    }
  };
  var raw = {
    parse: function(tagToken, remainTokens) {
      this.tokens = [];
      const stream = this.liquid.parser.parseStream(remainTokens);
      stream.on("token", (token) => {
        if (token.name === "endraw")
          stream.stop();
        else
          this.tokens.push(token);
      }).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    },
    render: function() {
      return this.tokens.map((token) => token.getText()).join("");
    }
  };
  var TablerowloopDrop = class extends ForloopDrop {
    constructor(length, cols, collection, variable) {
      super(length, collection, variable);
      this.length = length;
      this.cols = cols;
    }
    row() {
      return Math.floor(this.i / this.cols) + 1;
    }
    col0() {
      return this.i % this.cols;
    }
    col() {
      return this.col0() + 1;
    }
    col_first() {
      return this.col0() === 0;
    }
    col_last() {
      return this.col() === this.cols;
    }
  };
  var tablerow = {
    parse: function(tagToken, remainTokens) {
      const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
      const variable = tokenizer.readIdentifier();
      tokenizer.skipBlank();
      const tmp = tokenizer.readIdentifier();
      assert(tmp && tmp.content === "in", () => `illegal tag: ${tagToken.getText()}`);
      this.variable = variable.content;
      this.collection = tokenizer.readValue();
      this.hash = new Hash(tokenizer.remaining());
      this.templates = [];
      let p;
      const stream = this.liquid.parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:endtablerow", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    },
    render: function* (ctx, emitter) {
      let collection = toEnumerable(yield evalToken(this.collection, ctx));
      const hash = yield this.hash.render(ctx);
      const offset2 = hash.offset || 0;
      const limit2 = hash.limit === void 0 ? collection.length : hash.limit;
      collection = collection.slice(offset2, offset2 + limit2);
      const cols = hash.cols || collection.length;
      const r = this.liquid.renderer;
      const tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
      const scope = { tablerowloop };
      ctx.push(scope);
      for (let idx = 0; idx < collection.length; idx++, tablerowloop.next()) {
        scope[this.variable] = collection[idx];
        if (tablerowloop.col0() === 0) {
          if (tablerowloop.row() !== 1)
            emitter.write("</tr>");
          emitter.write(`<tr class="row${tablerowloop.row()}">`);
        }
        emitter.write(`<td class="col${tablerowloop.col()}">`);
        yield r.renderTemplates(this.templates, ctx, emitter);
        emitter.write("</td>");
      }
      if (collection.length)
        emitter.write("</tr>");
      ctx.pop();
    }
  };
  var unless = {
    parse: function(tagToken, remainTokens) {
      this.branches = [];
      this.elseTemplates = [];
      let p;
      this.liquid.parser.parseStream(remainTokens).on("start", () => this.branches.push({
        predicate: new Value(tagToken.args, this.liquid),
        test: isFalsy,
        templates: p = []
      })).on("tag:elsif", (token) => this.branches.push({
        predicate: new Value(token.args, this.liquid),
        test: isTruthy,
        templates: p = []
      })).on("tag:else", () => p = this.elseTemplates).on("tag:endunless", function() {
        this.stop();
      }).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      }).start();
    },
    render: function* (ctx, emitter) {
      const r = this.liquid.renderer;
      for (const { predicate, test, templates } of this.branches) {
        const value = yield predicate.value(ctx, ctx.opts.lenientIf);
        if (test(value, ctx)) {
          yield r.renderTemplates(templates, ctx, emitter);
          return;
        }
      }
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
  };
  var Break = {
    render: function(ctx, emitter) {
      emitter["break"] = true;
    }
  };
  var Continue = {
    render: function(ctx, emitter) {
      emitter["continue"] = true;
    }
  };
  var tags = {
    assign,
    "for": For,
    capture,
    "case": Case,
    comment,
    include,
    render,
    decrement,
    increment,
    cycle,
    "if": If,
    layout,
    block,
    raw,
    tablerow,
    unless,
    "break": Break,
    "continue": Continue
  };
  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  };
  var unescapeMap = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#34;": '"',
    "&#39;": "'"
  };
  function escape(str) {
    return stringify(str).replace(/&|<|>|"|'/g, (m) => escapeMap[m]);
  }
  function unescape(str) {
    return String(str).replace(/&(amp|lt|gt|#34|#39);/g, (m) => unescapeMap[m]);
  }
  function escapeOnce(str) {
    return escape(unescape(str));
  }
  function newlineToBr(v) {
    return v.replace(/\n/g, "<br />\n");
  }
  function stripHtml(v) {
    return v.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, "");
  }
  var abs = Math.abs;
  var atLeast = Math.max;
  var atMost = Math.min;
  var ceil = Math.ceil;
  var dividedBy = (v, arg) => v / arg;
  var floor = Math.floor;
  var minus = (v, arg) => v - arg;
  var modulo = (v, arg) => v % arg;
  var times = (v, arg) => v * arg;
  function round(v, arg = 0) {
    const amp = Math.pow(10, arg);
    return Math.round(v * amp) / amp;
  }
  function plus(v, arg) {
    return Number(v) + Number(arg);
  }
  function sortNatural(input, property) {
    if (!input || !input.sort)
      return [];
    if (property !== void 0) {
      return [...input].sort((lhs, rhs) => caseInsensitiveCompare(lhs[property], rhs[property]));
    }
    return [...input].sort(caseInsensitiveCompare);
  }
  var urlDecode = (x) => x.split("+").map(decodeURIComponent).join(" ");
  var urlEncode = (x) => x.split(" ").map(encodeURIComponent).join("+");
  var join = (v, arg) => v.join(arg === void 0 ? " " : arg);
  var last$1 = (v) => isArray(v) ? last(v) : "";
  var first = (v) => isArray(v) ? v[0] : "";
  var reverse = (v) => [...v].reverse();
  function sort(arr, property) {
    const getValue = (obj) => property ? this.context.getFromScope(obj, property.split(".")) : obj;
    return toArray(arr).sort((lhs, rhs) => {
      lhs = getValue(lhs);
      rhs = getValue(rhs);
      return lhs < rhs ? -1 : lhs > rhs ? 1 : 0;
    });
  }
  var size = (v) => v && v.length || 0;
  function map(arr, property) {
    return toArray(arr).map((obj) => this.context.getFromScope(obj, property.split(".")));
  }
  function compact(arr) {
    return toArray(arr).filter((x) => !isNil(x));
  }
  function concat(v, arg) {
    return toArray(v).concat(arg);
  }
  function slice(v, begin, length = 1) {
    begin = begin < 0 ? v.length + begin : begin;
    return v.slice(begin, begin + length);
  }
  function where(arr, property, expected) {
    return toArray(arr).filter((obj) => {
      const value = this.context.getFromScope(obj, String(property).split("."));
      return expected === void 0 ? isTruthy(value, this.context) : value === expected;
    });
  }
  function uniq(arr) {
    const u = {};
    return (arr || []).filter((val) => {
      if (u.hasOwnProperty(String(val)))
        return false;
      u[String(val)] = true;
      return true;
    });
  }
  var rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var monthNamesShort = monthNames.map(abbr);
  var dayNamesShort = dayNames.map(abbr);
  var suffixes = {
    1: "st",
    2: "nd",
    3: "rd",
    "default": "th"
  };
  function abbr(str) {
    return str.slice(0, 3);
  }
  function daysInMonth(d) {
    const feb = isLeapYear(d) ? 29 : 28;
    return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  function getDayOfYear(d) {
    let num = 0;
    for (let i = 0; i < d.getMonth(); ++i) {
      num += daysInMonth(d)[i];
    }
    return num + d.getDate();
  }
  function getWeekOfYear(d, startDay) {
    const now = getDayOfYear(d) + (startDay - d.getDay());
    const jan1 = new Date(d.getFullYear(), 0, 1);
    const then = 7 - jan1.getDay() + startDay;
    return String(Math.floor((now - then) / 7) + 1);
  }
  function isLeapYear(d) {
    const year = d.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
  }
  function getSuffix(d) {
    const str = d.getDate().toString();
    const index = parseInt(str.slice(-1));
    return suffixes[index] || suffixes["default"];
  }
  function century(d) {
    return parseInt(d.getFullYear().toString().substring(0, 2), 10);
  }
  var padWidths = {
    d: 2,
    e: 2,
    H: 2,
    I: 2,
    j: 3,
    k: 2,
    l: 2,
    L: 3,
    m: 2,
    M: 2,
    S: 2,
    U: 2,
    W: 2
  };
  var padChars = {
    a: " ",
    A: " ",
    b: " ",
    B: " ",
    c: " ",
    e: " ",
    k: " ",
    l: " ",
    p: " ",
    P: " "
  };
  var formatCodes = {
    a: (d) => dayNamesShort[d.getDay()],
    A: (d) => dayNames[d.getDay()],
    b: (d) => monthNamesShort[d.getMonth()],
    B: (d) => monthNames[d.getMonth()],
    c: (d) => d.toLocaleString(),
    C: (d) => century(d),
    d: (d) => d.getDate(),
    e: (d) => d.getDate(),
    H: (d) => d.getHours(),
    I: (d) => String(d.getHours() % 12 || 12),
    j: (d) => getDayOfYear(d),
    k: (d) => d.getHours(),
    l: (d) => String(d.getHours() % 12 || 12),
    L: (d) => d.getMilliseconds(),
    m: (d) => d.getMonth() + 1,
    M: (d) => d.getMinutes(),
    N: (d, opts) => {
      const width = Number(opts.width) || 9;
      const str = String(d.getMilliseconds()).substr(0, width);
      return padEnd(str, width, "0");
    },
    p: (d) => d.getHours() < 12 ? "AM" : "PM",
    P: (d) => d.getHours() < 12 ? "am" : "pm",
    q: (d) => getSuffix(d),
    s: (d) => Math.round(d.valueOf() / 1e3),
    S: (d) => d.getSeconds(),
    u: (d) => d.getDay() || 7,
    U: (d) => getWeekOfYear(d, 0),
    w: (d) => d.getDay(),
    W: (d) => getWeekOfYear(d, 1),
    x: (d) => d.toLocaleDateString(),
    X: (d) => d.toLocaleTimeString(),
    y: (d) => d.getFullYear().toString().substring(2, 4),
    Y: (d) => d.getFullYear(),
    z: (d, opts) => {
      const nOffset = Math.abs(d.getTimezoneOffset());
      const h = Math.floor(nOffset / 60);
      const m = nOffset % 60;
      return (d.getTimezoneOffset() > 0 ? "-" : "+") + padStart(h, 2, "0") + (opts.flags[":"] ? ":" : "") + padStart(m, 2, "0");
    },
    "t": () => "	",
    "n": () => "\n",
    "%": () => "%"
  };
  formatCodes.h = formatCodes.b;
  function strftime(d, formatStr) {
    let output = "";
    let remaining = formatStr;
    let match;
    while (match = rFormat.exec(remaining)) {
      output += remaining.slice(0, match.index);
      remaining = remaining.slice(match.index + match[0].length);
      output += format(d, match);
    }
    return output + remaining;
  }
  function format(d, match) {
    const [input, flagStr = "", width, modifier, conversion] = match;
    const convert = formatCodes[conversion];
    if (!convert)
      return input;
    const flags = {};
    for (const flag of flagStr)
      flags[flag] = true;
    let ret = String(convert(d, { flags, width, modifier }));
    let padChar = padChars[conversion] || "0";
    let padWidth = width || padWidths[conversion] || 0;
    if (flags["^"])
      ret = ret.toUpperCase();
    else if (flags["#"])
      ret = changeCase(ret);
    if (flags["_"])
      padChar = " ";
    else if (flags["0"])
      padChar = "0";
    if (flags["-"])
      padWidth = 0;
    return padStart(ret, padWidth, padChar);
  }
  var OneMinute = 6e4;
  var hostTimezoneOffset = new Date().getTimezoneOffset();
  var ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
  var TimezoneDate = class extends Date {
    constructor(init, timezoneOffset) {
      if (init instanceof TimezoneDate)
        return init;
      const diff = (hostTimezoneOffset - timezoneOffset) * OneMinute;
      const time = new Date(init).getTime() + diff;
      super(time);
      this.timezoneOffset = timezoneOffset;
    }
    getTimezoneOffset() {
      return this.timezoneOffset;
    }
    static createDateFixedToTimezone(dateString) {
      const m = dateString.match(ISO8601_TIMEZONE_PATTERN);
      if (m && m[1] === "Z") {
        return new TimezoneDate(+new Date(dateString), 0);
      }
      if (m && m[2] && m[3] && m[4]) {
        const [, , sign, hours, minutes] = m;
        const delta = (sign === "+" ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
        return new TimezoneDate(+new Date(dateString), delta);
      }
      return new Date(dateString);
    }
  };
  function date(v, arg) {
    const opts = this.context.opts;
    let date2;
    if (v === "now" || v === "today") {
      date2 = new Date();
    } else if (isNumber(v)) {
      date2 = new Date(v * 1e3);
    } else if (isString(v)) {
      if (/^\d+$/.test(v)) {
        date2 = new Date(+v * 1e3);
      } else if (opts.preserveTimezones) {
        date2 = TimezoneDate.createDateFixedToTimezone(v);
      } else {
        date2 = new Date(v);
      }
    } else {
      date2 = v;
    }
    if (!isValidDate(date2))
      return v;
    if (opts.hasOwnProperty("timezoneOffset")) {
      date2 = new TimezoneDate(date2, opts.timezoneOffset);
    }
    return strftime(date2, arg);
  }
  function isValidDate(date2) {
    return date2 instanceof Date && !isNaN(date2.getTime());
  }
  function Default(v, arg) {
    if (isArray(v) || isString(v))
      return v.length ? v : arg;
    return isFalsy(toValue(v), this.context) ? arg : v;
  }
  function json(v) {
    return JSON.stringify(v);
  }
  function append(v, arg) {
    assert(arguments.length === 2, () => "append expect 2 arguments");
    return stringify(v) + stringify(arg);
  }
  function prepend(v, arg) {
    assert(arguments.length === 2, () => "prepend expect 2 arguments");
    return stringify(arg) + stringify(v);
  }
  function lstrip(v) {
    return stringify(v).replace(/^\s+/, "");
  }
  function downcase(v) {
    return stringify(v).toLowerCase();
  }
  function upcase(str) {
    return stringify(str).toUpperCase();
  }
  function remove(v, arg) {
    return stringify(v).split(String(arg)).join("");
  }
  function removeFirst(v, l) {
    return stringify(v).replace(String(l), "");
  }
  function rstrip(str) {
    return stringify(str).replace(/\s+$/, "");
  }
  function split(v, arg) {
    return stringify(v).split(String(arg));
  }
  function strip(v) {
    return stringify(v).trim();
  }
  function stripNewlines(v) {
    return stringify(v).replace(/\n/g, "");
  }
  function capitalize(str) {
    str = stringify(str);
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  function replace(v, pattern, replacement) {
    return stringify(v).split(String(pattern)).join(replacement);
  }
  function replaceFirst(v, arg1, arg2) {
    return stringify(v).replace(String(arg1), arg2);
  }
  function truncate(v, l = 50, o = "...") {
    v = stringify(v);
    if (v.length <= l)
      return v;
    return v.substr(0, l - o.length) + o;
  }
  function truncatewords(v, l = 15, o = "...") {
    const arr = v.split(/\s+/);
    let ret = arr.slice(0, l).join(" ");
    if (arr.length >= l)
      ret += o;
    return ret;
  }
  var builtinFilters = /* @__PURE__ */ Object.freeze({
    escape,
    escapeOnce,
    newlineToBr,
    stripHtml,
    abs,
    atLeast,
    atMost,
    ceil,
    dividedBy,
    floor,
    minus,
    modulo,
    times,
    round,
    plus,
    sortNatural,
    urlDecode,
    urlEncode,
    join,
    last: last$1,
    first,
    reverse,
    sort,
    size,
    map,
    compact,
    concat,
    slice,
    where,
    uniq,
    date,
    Default,
    json,
    append,
    prepend,
    lstrip,
    downcase,
    upcase,
    remove,
    removeFirst,
    rstrip,
    split,
    strip,
    stripNewlines,
    capitalize,
    replace,
    replaceFirst,
    truncate,
    truncatewords
  });
  var TagMap = class {
    constructor() {
      this.impls = {};
    }
    get(name) {
      const impl = this.impls[name];
      assert(impl, () => `tag "${name}" not found`);
      return impl;
    }
    set(name, impl) {
      this.impls[name] = impl;
    }
  };
  var FilterMap = class {
    constructor(strictFilters, liquid) {
      this.strictFilters = strictFilters;
      this.liquid = liquid;
      this.impls = {};
    }
    get(name) {
      const impl = this.impls[name];
      assert(impl || !this.strictFilters, () => `undefined filter: ${name}`);
      return impl;
    }
    set(name, impl) {
      this.impls[name] = impl;
    }
    create(name, args) {
      return new Filter(name, this.get(name), args, this.liquid);
    }
  };
  var Liquid = class {
    constructor(opts = {}) {
      this.options = applyDefault(normalize(opts));
      this.parser = new Parser(this);
      this.renderer = new Render();
      this.filters = new FilterMap(this.options.strictFilters, this);
      this.tags = new TagMap();
      forOwn(tags, (conf, name) => this.registerTag(snakeCase(name), conf));
      forOwn(builtinFilters, (handler, name) => this.registerFilter(snakeCase(name), handler));
    }
    parse(html, filepath) {
      return this.parser.parse(html, filepath);
    }
    _render(tpl, scope, sync) {
      const ctx = new Context(scope, this.options, sync);
      return this.renderer.renderTemplates(tpl, ctx);
    }
    async render(tpl, scope) {
      return toPromise(this._render(tpl, scope, false));
    }
    renderSync(tpl, scope) {
      return toValue$1(this._render(tpl, scope, true));
    }
    renderToNodeStream(tpl, scope) {
      const ctx = new Context(scope, this.options);
      return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
    }
    _parseAndRender(html, scope, sync) {
      const tpl = this.parse(html);
      return this._render(tpl, scope, sync);
    }
    async parseAndRender(html, scope) {
      return toPromise(this._parseAndRender(html, scope, false));
    }
    parseAndRenderSync(html, scope) {
      return toValue$1(this._parseAndRender(html, scope, true));
    }
    _parsePartialFile(file, sync, currentFile) {
      return this.parser.parseFile(file, sync, LookupType.Partials, currentFile);
    }
    _parseLayoutFile(file, sync, currentFile) {
      return this.parser.parseFile(file, sync, LookupType.Layouts, currentFile);
    }
    async parseFile(file) {
      return toPromise(this.parser.parseFile(file, false));
    }
    parseFileSync(file) {
      return toValue$1(this.parser.parseFile(file, true));
    }
    async renderFile(file, ctx) {
      const templates = await this.parseFile(file);
      return this.render(templates, ctx);
    }
    renderFileSync(file, ctx) {
      const templates = this.parseFileSync(file);
      return this.renderSync(templates, ctx);
    }
    async renderFileToNodeStream(file, scope) {
      const templates = await this.parseFile(file);
      return this.renderToNodeStream(templates, scope);
    }
    _evalValue(str, ctx) {
      const value = new Value(str, this);
      return value.value(ctx, false);
    }
    async evalValue(str, ctx) {
      return toPromise(this._evalValue(str, ctx));
    }
    evalValueSync(str, ctx) {
      return toValue$1(this._evalValue(str, ctx));
    }
    registerFilter(name, filter) {
      this.filters.set(name, filter);
    }
    registerTag(name, tag) {
      this.tags.set(name, tag);
    }
    plugin(plugin) {
      return plugin.call(this, Liquid);
    }
    express() {
      const self = this;
      let firstCall = true;
      return function(filePath, ctx, callback) {
        if (firstCall) {
          firstCall = false;
          self.options.root.unshift(...normalizeDirectoryList(this.root));
        }
        self.renderFile(filePath, ctx).then((html) => callback(null, html), callback);
      };
    }
  };

  // node_modules/@bookshop/jekyll-engine/lib/translateLiquid.js
  var rewriteTag = function(token, src, liveMarkup) {
    let raw2 = token.getText();
    if (token.kind === 16)
      return src;
    if (token.name && token.name.match(/^end/))
      return src;
    if (token.name && token.name === "include_cached")
      raw2 = raw2.replace(/include_cached/, "include");
    if (liveMarkup && token.name && token.name === "for") {
      raw2 = `${raw2}{% loop_context ${token.args} %}`;
    }
    if (liveMarkup && token.name && (token.name === "assign" || token.name === "local")) {
      let identifier = token.args.split("=").shift().trim();
      raw2 = `${raw2}<!--bookshop-live context(${identifier}="{{${identifier}}}")-->`;
    }
    if (token.name && token.name === "bookshop_include") {
      let componentName;
      token.name = "include";
      raw2 = raw2.replace(/bookshop_include (\S+)/, (_, component) => {
        componentName = component;
        return `include _bookshop_include_${component}`;
      });
      if (liveMarkup) {
        let params = token.args.split(" ");
        params.shift();
        raw2 = `<!--bookshop-live name(${componentName}) params(${params.join(" ").replace(/\binclude\./g, "")})-->${raw2}<!--bookshop-live end-->`;
      }
    }
    if (token.name && token.name === "bookshop") {
      let componentName;
      token.name = "include";
      raw2 = raw2.replace(/bookshop (\S+)/, (_, component) => {
        componentName = component;
        return `include _bookshop_${component}`;
      });
      if (liveMarkup) {
        let params = token.args.split(" ");
        params.shift();
        raw2 = `<!--bookshop-live name(${componentName}) params(${params.join(" ").replace(/\binclude\./g, "")})-->${raw2}<!--bookshop-live end-->`;
      }
    }
    if (token.name && token.name.match(/^include/)) {
      raw2 = raw2.replace(/=/g, ": ");
      raw2 = raw2.replace(/\%\s+?include\s([^"'][^\s]+)/gi, '% include "$1"');
    }
    return [
      src.substr(0, token.begin),
      raw2,
      src.substr(token.end)
    ].join("");
  };
  function translateLiquid_default(text, opts) {
    opts = {
      isInclude: false,
      expandBindSyntax: true,
      liveMarkup: true,
      ...opts
    };
    text = text.toString();
    const tokenizer = new Tokenizer(text);
    const output = tokenizer.readTopLevelTokens();
    output.reverse().forEach((tag) => {
      text = rewriteTag(tag, text, opts.liveMarkup);
    });
    const emulateJekyllIncludes = opts.isInclude ? "{% emulate_jekyll %}" : "";
    const unbind = opts.expandBindSyntax ? "{% unbind %}" : "";
    return `${unbind}${emulateJekyllIncludes}${text}`;
  }

  // node_modules/@bookshop/helpers/lib/plugins/liquid/highlight.js
  var escapeHtml = (input) => {
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  };
  var liquidHighlight = function(Liquid2) {
    this.registerTag("highlight", {
      parse: function(token, remainingTokens) {
        this.lang = token.args.split(" ")[0];
        this.contents = [];
        const stream = this.liquid.parser.parseStream(remainingTokens).on("tag:endhighlight", () => stream.stop()).on("template", (tpl) => this.contents.push(tpl)).on("end", () => {
          throw new Error(`tag ${token.raw} not closed`);
        });
        stream.start();
      },
      render: function* (ctx, hash) {
        const r = this.liquid.renderer;
        const html = yield r.renderTemplates(this.contents, ctx);
        const langAttrs = this.lang ? ` class="language-${this.lang}" data-lang="${this.lang}"` : "";
        return `<figure class="highlight">
    <pre>
        <code${langAttrs}>
            ${escapeHtml(html)}
        </code>
    </pre>
</figure>`;
      }
    });
  };

  // node_modules/@bookshop/jekyll-engine/lib/plugins/jsonify.js
  function jsonify_default(Liquid2) {
    this.registerFilter("jsonify", (classname) => {
      return JSON.stringify(classname);
    });
  }

  // node_modules/@bookshop/jekyll-engine/lib/plugins/slugify-plugin.js
  var import_slugify = __toModule(require_slugify());
  function slugify_plugin_default(Liquid2) {
    this.registerFilter("slugify", (text) => {
      if (text && typeof text === "string")
        return (0, import_slugify.default)(text).toLowerCase();
      return text;
    });
  }

  // node_modules/@bookshop/jekyll-engine/lib/plugins/unbind.js
  function unbind_default(Liquid2) {
    this.registerTag("unbind", {
      parse: function(token) {
      },
      render: function(ctx, hash) {
        const lastScope = ctx.scopes.length - 1;
        if (typeof ctx.scopes[lastScope].bind === "object") {
          ctx.scopes[lastScope] = {
            ...ctx.scopes[lastScope].bind,
            ...ctx.scopes[lastScope],
            bind: null
          };
        }
        return ``;
      }
    });
  }

  // node_modules/@bookshop/jekyll-engine/lib/plugins/loop_context.js
  function loop_context_default(Liquid2) {
    this.registerTag("loop_context", {
      parse: function(token) {
        this.args = token.args;
      },
      render: function(ctx, hash) {
        const argsString = this.args.replace(/\binclude\./g, "").replace(/\s+in\s+/, "=").split(" ")[0];
        return `<!--bookshop-live context(${argsString}[${ctx.get(["forloop", "index0"])}])-->`;
      }
    });
  }

  // node_modules/@bookshop/jekyll-engine/lib/plugins/emulate-jekyll.js
  function emulate_jekyll_default(Liquid2) {
    this.registerTag("emulate_jekyll", {
      parse: function(token) {
      },
      render: function(ctx, hash) {
        const lastScope = ctx.scopes.length - 1;
        ctx.scopes[lastScope] = {
          include: ctx.scopes[lastScope]
        };
        return ``;
      }
    });
  }

  // node_modules/@bookshop/jekyll-engine/lib/plugins/local.js
  function local_default(Liquid2) {
    this.registerTag("local", {
      parse: function(token) {
        const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.key = tokenizer.readIdentifier().content;
        tokenizer.skipBlank();
        assert(tokenizer.peek() === "=", () => `illegal token ${token.getText()}`);
        tokenizer.advance();
        this.value = tokenizer.remaining();
      },
      render: function(ctx) {
        ctx.scopes[ctx.scopes.length - 1][this.key] = this.liquid.evalValueSync(this.value, ctx);
      }
    });
  }

  // node_modules/@bookshop/jekyll-engine/lib/engine.js
  var Engine = class {
    constructor(options) {
      options = {
        name: "Jekyll",
        files: {},
        ...options
      };
      this.key = "jekyll";
      this.name = options.name;
      this.files = options.files;
      this.plugins = options.plugins || [];
      this.plugins.push(jsonify_default, slugify_plugin_default, unbind_default, emulate_jekyll_default, local_default, liquidHighlight, loop_context_default);
      this.initializeLiquid();
      this.applyLiquidPlugins();
    }
    initializeLiquid() {
      const je = this;
      this.liquid = new Liquid({
        fs: {
          readFileSync(file) {
            return "LiquidJS readFileSync unimplemented";
          },
          async readFile(file) {
            return await je.retrieveInclude(file);
          },
          existsSync() {
            return true;
          },
          async exists() {
            return true;
          },
          resolve(root, file, ext) {
            return `${root}${file}`;
          }
        }
      });
    }
    async retrieveInclude(file) {
      let content;
      if (/_bookshop_include_/.test(file)) {
        content = this.getShared(file.replace(/^.*_bookshop_include_/, ""));
      } else if (/_bookshop_/.test(file)) {
        content = this.getComponent(file.replace(/^.*_bookshop_/, ""));
      } else {
        content = this.files?.[file];
      }
      if (!content && content !== "") {
        console.warn(`[jekyll-engine] No file found for ${file}`);
        return "";
      }
      return translateLiquid_default(content, { isInclude: true });
    }
    applyLiquidPlugins() {
      this.plugins.forEach((plugin) => {
        this.liquid.plugin(plugin);
      });
    }
    getShared(name) {
      const key = `shared/jekyll/${name}.jekyll.html`;
      return this.files?.[key];
    }
    getComponentKey(name) {
      const base = name.split("/").reverse()[0];
      return `components/${name}/${base}.jekyll.html`;
    }
    getComponent(name) {
      const key = this.getComponentKey(name);
      return this.files?.[key];
    }
    hasComponent(name) {
      const key = this.getComponentKey(name);
      return !!this.files?.[key];
    }
    resolveComponentType(name) {
      if (this.getComponent(name))
        return "component";
      if (this.getShared(name))
        return "shared";
      return false;
    }
    async render(target, name, props, globals) {
      let source = this.getComponent(name);
      if (!source)
        source = this.getShared(name);
      if (!source) {
        console.warn(`[jekyll-engine] No component found for ${name}`);
        return "";
      }
      source = translateLiquid_default(source, {});
      if (!globals || typeof globals !== "object")
        globals = {};
      props = { ...globals, include: props };
      target.innerHTML = await this.liquid.parseAndRender(source || "", props);
    }
    async eval(str, props = [{}]) {
      try {
        const ctx = new Context();
        if (Array.isArray(props)) {
          props.forEach((p) => ctx.push(p));
        } else {
          ctx.push(props);
        }
        const [, value, index] = str.match(/^(.*?)(?:\[(\d+)\])?$/);
        let result = await this.liquid.evalValue(value, ctx);
        if (index && typeof result === "object" && !Array.isArray(result)) {
          result = Object.entries(result);
        }
        return index ? result?.[index] : result;
      } catch (e) {
        console.error(`Error evaluating ${str}`, e);
        return "";
      }
    }
    loader() {
    }
  };

  // components/components/blog-card/blog-card.jekyll.html
  var blog_card_jekyll_default = '{% assign c = "c-blog-card" %}\n<div class="{{c}} col col-4 col-d-6 col-t-12">\n  <div class="{{c}}__inner">\n\n    {% if include.post.image %}\n    <div class="{{c}}__image-wrap">\n      <a class="{{c}}__image" href="{{ include.post.url }}">\n        <img loading="lazy" src="{{ include.post.image }}" alt="{{ include.post.title }}">\n      </a>\n    </div>\n    {% endif %}\n\n    <div class="{{c}}__content">\n\n      {% if include.post.tags.size >= 1 %}\n      <div class="{{c}}__tags-box">\n        {% for tag in include.post.tags %}\n        <a href="{{ site.baseurl }}/tag/{{ tag | downcase }}" class="{{c}}__tag">{{ tag }}</a>\n        {% endfor %}\n      </div>\n      {% endif %}\n\n      <h2 class="{{c}}__title">\n        <a href="{{ include.post.url }}">{{ include.post.title }}</a>\n      </h2>\n\n      <p class="{{c}}__excerpt">\n        {% if include.post.description %}{{ include.post.description }}{% else %}{{ include.post.content | strip_html | truncate: 120 }}{% endif\n        %}\n      </p>\n\n      <div class="{{c}}__meta">\n        <div class="{{c}}__author-image">\n          <img loading="lazy" src="{{ site.data.author.author_image }}" alt="{{ site.data.author.author_name }}">\n        </div>\n        <div class="{{c}}__info">\n          <div class="{{c}}__author-name">{{ site.data.author.author_name }}</div>\n          <span class="{{c}}__date"><time datetime="{{ include.post.date | date_to_xmlschema }}">{{ include.post.date | date_to_string\n              }}</time></span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>';

  // bookshop-import-file:components/blog-card/blog-card.jekyll.html__bookshop_file__
  var blog_card_jekyll_default2 = blog_card_jekyll_default;

  // components/components/blog-section/blog-section.jekyll.html
  var blog_section_jekyll_default = '<!-- begin blog -->\n<section class="section blog">\n  <div class="container">\n    <div class="row">\n      <div class="col col-12">\n        <div class="contaniner__inner animate">\n\n          <div class="section__info">\n            <div class="section__head">\n              <h2 class="section__title">{{ include.title }}</h2>\n              <a class="section__link" href="{{ include.link_url | relative_url }}">View all <i class="ion ion-md-arrow-forward"></i></a>\n            </div>\n            <div class="section__description">{{ include.description_html }} </div>\n          </div>\n\n          {% if include.show_posts %}\n          <div class="row">\n            {% if site.posts.size > 0 %}\n              {% for post in site.posts offset:0 limit:3 %}\n                {% bookshop blog-card post=post %}\n              {% endfor %}\n            {% endif %}\n          </div>\n          {% endif %}\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end blog -->';

  // bookshop-import-file:components/blog-section/blog-section.jekyll.html__bookshop_file__
  var blog_section_jekyll_default2 = blog_section_jekyll_default;

  // components/components/button/button.jekyll.html
  var button_jekyll_default = `<a class="c-button c-button--{{include.type | slugify}} c-button--{{include.width | slugify | default: 'small'}}"
   href="{{ include.link_url }}"
   {% if include.open_in_new_tab %}
        target="_blank"
    {% endif %}>
    {{ include.label }}
</a>
`;

  // bookshop-import-file:components/button/button.jekyll.html__bookshop_file__
  var button_jekyll_default2 = button_jekyll_default;

  // components/components/contact-form/contact-form.jekyll.html
  var contact_form_jekyll_default = '<!-- begin contact -->\n{% assign c = "c-contact-form" %}\n<div class="{{c}}" id="contact">\n  <div class="container">\n    <div class="row">\n      <div class="col col-12">\n\n        <div class="{{c}}__form-box">\n          <div class="{{c}}__contact-head">\n            <h2 class="{{c}}__contact-title">{{ include.form_title }}</h2>\n            <p class="{{c}}__contact-description">{{ include.form_description }}</p>\n          </div>\n          <form class="{{c}}__form"\n            action="{{include.form_success_page}}"\n            method="POST">\n            <input type="hidden" name="_to" value="{{include.form_submission_email}}">\n            <div class="{{c}}__form-group">\n              <label class="{{c}}__form-label screen-reader-text" for="form-name">Your Name</label>\n              <input class="{{c}}__form-input" id="form-name" type="text" name="name" placeholder="Your name..." required>\n            </div>\n            <div class="{{c}}__form-group">\n              <label class="{{c}}__form-label screen-reader-text" for="form-email">Your Email</label>\n              <input class="{{c}}__form-input" id="form-email" type="email" name="_replyto" placeholder="Your email..."\n                required>\n            </div>\n            <div class="{{c}}__form-group">\n              <label class="{{c}}__form-label screen-reader-text" for="form-text">Your Message</label>\n              <textarea class="{{c}}__form-input" id="form-text" name="text" rows="9" placeholder="Your message..."\n                required></textarea>\n            </div>\n            <div class="{{c}}__form-group {{c}}__form-group--button">\n              <button class="c-button c-button--primary c-button--large" type="submit">{{ include.form_button_text }}</button>\n            </div>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end contact -->';

  // bookshop-import-file:components/contact-form/contact-form.jekyll.html__bookshop_file__
  var contact_form_jekyll_default2 = contact_form_jekyll_default;

  // components/components/content/content.jekyll.html
  var content_jekyll_default = '<div class="container">\n  <div class="page animate">\n    {{include.content_html }}\n  </div>\n</div>';

  // bookshop-import-file:components/content/content.jekyll.html__bookshop_file__
  var content_jekyll_default2 = content_jekyll_default;

  // components/components/hero/hero.jekyll.html
  var hero_jekyll_default = '<!-- begin hero -->\n{% assign c = "c-hero" %}\n<section class="{{c}} animate">\n  <div class="container">\n    <div class="row">\n      <div class="col col-12">\n        <div class="{{c}}__inner">\n\n          <div class="{{c}}__left">\n            <h1 class="{{c}}__title">{{ include.title }}</h1>\n            <div class="{{c}}__description">{{ include.description_html }}</div>\n            <div class="{{c}}__btn">\n              <a href="{{ include.cta_button_link }}" class="cta-button c-button c-button--primary c-button--small">{{ include.cta_button }}</a>\n              <a class="works-button c-button c-button--secondary c-button--small" href="{{ include.works_button_link }}">\n                <span class="circle-bg"><i class="ion ion-md-arrow-down button-arrow"></i></span> {{ include.works_button }}\n              </a>\n            </div>\n          </div>\n\n          <div class="{{c}}__right">\n            <div class="{{c}}__image">\n              <img loading="lazy" src="{{ include.image }}" alt="{{ include.hero_image_alt }}">\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end hero -->';

  // bookshop-import-file:components/hero/hero.jekyll.html__bookshop_file__
  var hero_jekyll_default2 = hero_jekyll_default;

  // components/components/newsletter/newsletter.jekyll.html
  var newsletter_jekyll_default = `<!-- begin subscribe -->
{% assign c = "c-subscribe" %}
<section class="{{c}} section">
  <div class="container">
    <div class="row">
      <div class="col col-12">

        <div class="{{c}}__inner">
          <div class="{{c}}__info">
            <h3 class="{{c}}__title">{{ include.newsletter_title }}</h3>
            <div class="{{c}}__subtitle">
              <span id="ityped"></span>
            </div>
          </div>

          <form class="{{c}}__form validate" action="//{{ include.newsletter_identifier }}"
            method="POST" id="membedded-subscribe-form" name="membedded-subscribe-form" target="_blank" novalidate>
            <label class="screen-reader-text" for="mce-EMAIL">Email address</label>
            <input class="{{c}}__form-email required email" id="mce-EMAIL" type="text" name="EMAIL" placeholder="Your email address">
            <button class="c-button c-button--primary c-button--large" id="membedded-subscribe" type="submit" name="subscribe">{{ include.newsletter_button }}</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</section>
<!-- end subscribe -->

<script>
  var itype_text = ['{{ include.newsletter_description }}'];
<\/script>`;

  // bookshop-import-file:components/newsletter/newsletter.jekyll.html__bookshop_file__
  var newsletter_jekyll_default2 = newsletter_jekyll_default;

  // components/components/page-heading/page-heading.jekyll.html
  var page_heading_jekyll_default = '{% assign c = "c-page-heading" %}\n<div class="container">\n  <div class="{{c}}">\n    <h1 class="{{c}}__title">{{ include.title }}</h1>\n    {% if include.description %}\n      <p class="{{c}}__description">{{ include.description }}</p>\n    {% endif %}\n  </div>\n</div>';

  // bookshop-import-file:components/page-heading/page-heading.jekyll.html__bookshop_file__
  var page_heading_jekyll_default2 = page_heading_jekyll_default;

  // components/components/page-image/page-image.jekyll.html
  var page_image_jekyll_default = '{% assign c = "c-page-image" %}\n<div class="container">\n  <div class="row">\n    <div class="col col-12">\n      <div class="{{c}} animate">\n        <img loading="lazy" src="{{ include.image }}" alt="{{ include.image_alt }}">\n      </div>\n    </div>\n  </div>\n</div>';

  // bookshop-import-file:components/page-image/page-image.jekyll.html__bookshop_file__
  var page_image_jekyll_default2 = page_image_jekyll_default;

  // components/components/posts-list/posts-list.jekyll.html
  var posts_list_jekyll_default = '{% if include.show_posts %}\n<div class="container animate">\n  <div class="row" data-pagebreak="6">\n    {% for post in site.posts %}\n      {% bookshop blog-card post=post %}\n    {% endfor %}\n  </div>\n</div>\n\n{% bookshop_include pagination %}\n{% endif %}';

  // bookshop-import-file:components/posts-list/posts-list.jekyll.html__bookshop_file__
  var posts_list_jekyll_default2 = posts_list_jekyll_default;

  // components/components/project-card/project-card.jekyll.html
  var project_card_jekyll_default = '{% assign c = "c-project-card" %}\n<article class="{{c}} col col-4 col-d-6 col-t-12">\n  <div class="{{c}}__content">\n    <a href="{{ include.project.url }}" class="{{c}}__image">\n      <img loading="lazy" src="{{ include.project.image }}" alt="{{ include.project.title }}">\n    </a>\n    <div class="{{c}}__info">\n      <div class="{{c}}__info-wrap">\n        <h3 class="{{c}}__title">{{ include.project.title }}</h3>\n      </div>\n      <div class="{{c}}__info-wrap">\n        {% if include.project.subtitle %}\n        <div class="{{c}}__subtitle">{{ include.project.subtitle }}</div>\n        {% endif %}\n      </div>\n    </div>\n  </div>\n</article>';

  // bookshop-import-file:components/project-card/project-card.jekyll.html__bookshop_file__
  var project_card_jekyll_default2 = project_card_jekyll_default;

  // components/components/projects-list/projects-list.jekyll.html
  var projects_list_jekyll_default = '{% if include.show_projects %}\n<div class="container animate">\n  <div class="row">\n    {% for project in site.projects %}\n      {% bookshop project-card project=project %}\n    {% endfor %}\n  </div>\n</div>\n{% endif %}';

  // bookshop-import-file:components/projects-list/projects-list.jekyll.html__bookshop_file__
  var projects_list_jekyll_default2 = projects_list_jekyll_default;

  // components/components/projects-section/projects-section.jekyll.html
  var projects_section_jekyll_default = '<!-- begin projects -->\n<section class="section projects" id="projects">\n  <div class="container">\n    <div class="row">\n      <div class="col col-12">\n        <div class="contaniner__inner animate">\n\n          <div class="section__info">\n            <div class="section__head">\n              <h2 class="section__title">{{ include.title }}</h2>\n              <a class="section__link" href="{{ include.link_url }}">View all <i class="ion ion-md-arrow-forward"></i></a>\n            </div>\n            <div class="section__description">{{ include.description_html }}</div>\n          </div>\n\n          {% if include.show_projects %}\n          <div class="row">\n            {% for project in site.projects %}\n              {% if forloop.index <= 6 %}\n                {% bookshop project-card project=project %}\n              {% endif %}\n            {% endfor %}\n          </div>\n          {% endif %}\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end projects -->';

  // bookshop-import-file:components/projects-section/projects-section.jekyll.html__bookshop_file__
  var projects_section_jekyll_default2 = projects_section_jekyll_default;

  // components/components/testimonial-card/testimonial-card.jekyll.html
  var testimonial_card_jekyll_default = '{% assign c = "c-testimonial-card" %}\n<div class="{{c}}">\n  <div class="{{c}}__content">\n    <div class="{{c}}__client-meta">\n      {% if include.testimonial-item.image %}\n        <div class="{{c}}__image-container">\n          <img class="{{c}}__client-avatar" src="{{ include.testimonial-item.image }}" alt="{{ include.testimonial-item.name }}">\n        </div>\n      {% endif %}\n      <div class="{{c}}__client-info">\n        {% if include.testimonial-item.name %}\n          <h3 class="{{c}}__client-name">{{ include.testimonial-item.name }}</h3>\n        {% endif %}\n        {% if include.testimonial-item.position %}\n          <p class="{{c}}__client-position">{{ include.testimonial-item.position }}</p>\n        {% endif %}\n      </div>\n    </div>\n    {% if include.testimonial-item.blurb %}\n      <p class="{{c}}__client-text">{{ include.testimonial-item.blurb }}</p>\n    {% endif %}\n  </div>\n</div>';

  // bookshop-import-file:components/testimonial-card/testimonial-card.jekyll.html__bookshop_file__
  var testimonial_card_jekyll_default2 = testimonial_card_jekyll_default;

  // components/components/testimonials-section/testimonials-section.jekyll.html
  var testimonials_section_jekyll_default = '<!-- begin testimonials -->\n<section class="section testimonials animate">\n  <div class="container">\n    <div class="row">\n      <div class="col col-12">\n\n        <div class="section__info">\n          <div class="section__head">\n            <h2 class="section__title">{{ include.title }}</h2>\n            <ul class="controls list-reset" id="customize-controls" aria-label="Slider Navigation" tabindex="0">\n              <li class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">\n                <i class="ion ion-ios-arrow-back"></i>\n              </li>\n              <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">\n                <i class="ion ion-ios-arrow-forward"></i>\n              </li>\n            </ul>\n          </div>\n          <div class="section__description">{{ include.description_html }}</div>\n        </div>\n\n        {% if include.show_testimonials %}\n        <div class="testimonials__slider my-slider">\n          {% for testimonial-item in site.testimonials %}\n            {% bookshop testimonial-card testimonial-item=testimonial-item %}\n          {% endfor %}\n        </div>\n        {% endif %}\n\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end testimonials -->';

  // bookshop-import-file:components/testimonials-section/testimonials-section.jekyll.html__bookshop_file__
  var testimonials_section_jekyll_default2 = testimonials_section_jekyll_default;

  // components/shared/jekyll/page.jekyll.html
  var page_jekyll_default = '{% if include.content_blocks.size > 0 %}\n<div class="c-page">\n\n{% for block in include.content_blocks %}\n    {% bookshop {{block._bookshop_name}} bind=block %}\n{% endfor %}\n\n</div>\n{% endif %}';

  // bookshop-import-file:shared/jekyll/page.jekyll.html__bookshop_file__
  var page_jekyll_default2 = page_jekyll_default;

  // components/shared/jekyll/pagination.jekyll.html
  var pagination_jekyll_default = '<!-- begin pagination -->\n<nav class="pagination">\n  <div class="container">\n    <div class="pagination__inner">\n\n      <div class="pagination__list">\n        {% capture prev_text %}<i class="ion ion-ios-arrow-back"></i> Prev{% endcapture %}\n        <a data-pagebreak-control="prev" href="." class="pagination__prev">{{prev_text}}</a>\n        <span data-pagebreak-control="!prev" class="pagination__prev disabled">{{prev_text}}</span>\n\n        <div class="pagination__count">\n          Page <span data-pagebreak-label="current">1</span>\n          of <span data-pagebreak-label="total">1</span>\n        </div>\n\n        {% capture next_text %}Next <i class="ion ion-ios-arrow-forward"></i>{% endcapture %}\n        <a data-pagebreak-control="next" href="." class="pagination__next">{{next_text}}</a>\n        <span data-pagebreak-control="!next" class="pagination__next disabled">{{next_text}}</span>\n      </div>\n\n    </div>\n  </div>\n</nav>\n<!-- end pagination -->\n';

  // bookshop-import-file:shared/jekyll/pagination.jekyll.html__bookshop_file__
  var pagination_jekyll_default2 = pagination_jekyll_default;

  // components/shared/jekyll/social-link.jekyll.html
  var social_link_jekyll_default = '{% if site.data.social_links.social %}\n<div class="social">\n  <ul class="social__list list-reset">\n    {% for social in site.data.social_links.social %}\n    <li class="social__item">\n      <a class="social__link" href="{{social.link}}" target="_blank" rel="noopener" aria-label="{{social.icon | downcase}} icon"><i class="ion ion-logo-{{social.icon | downcase}}"></i></a>\n    </li>\n    {% endfor %}\n  </ul>\n</div>\n{% endif %}';

  // bookshop-import-file:shared/jekyll/social-link.jekyll.html__bookshop_file__
  var social_link_jekyll_default2 = social_link_jekyll_default;

  // bookshop-import-glob:(.jekyll.html)
  var files = {};
  files["components/blog-card/blog-card.jekyll.html"] = blog_card_jekyll_default2;
  files["components/blog-section/blog-section.jekyll.html"] = blog_section_jekyll_default2;
  files["components/button/button.jekyll.html"] = button_jekyll_default2;
  files["components/contact-form/contact-form.jekyll.html"] = contact_form_jekyll_default2;
  files["components/content/content.jekyll.html"] = content_jekyll_default2;
  files["components/hero/hero.jekyll.html"] = hero_jekyll_default2;
  files["components/newsletter/newsletter.jekyll.html"] = newsletter_jekyll_default2;
  files["components/page-heading/page-heading.jekyll.html"] = page_heading_jekyll_default2;
  files["components/page-image/page-image.jekyll.html"] = page_image_jekyll_default2;
  files["components/posts-list/posts-list.jekyll.html"] = posts_list_jekyll_default2;
  files["components/project-card/project-card.jekyll.html"] = project_card_jekyll_default2;
  files["components/projects-list/projects-list.jekyll.html"] = projects_list_jekyll_default2;
  files["components/projects-section/projects-section.jekyll.html"] = projects_section_jekyll_default2;
  files["components/testimonial-card/testimonial-card.jekyll.html"] = testimonial_card_jekyll_default2;
  files["components/testimonials-section/testimonials-section.jekyll.html"] = testimonials_section_jekyll_default2;
  files["shared/jekyll/page.jekyll.html"] = page_jekyll_default2;
  files["shared/jekyll/pagination.jekyll.html"] = pagination_jekyll_default2;
  files["shared/jekyll/social-link.jekyll.html"] = social_link_jekyll_default2;
  var jekyll_default = files;

  // bookshop-import-config:bookshop.config.js
  var engines = [];
  var Engine0Plugins = [];
  engines.push(new Engine({
    ...{ "plugins": [] },
    files: jekyll_default,
    plugins: Engine0Plugins
  }));
  var bookshop_config_default = engines;

  // node_modules/@bookshop/live/lib/app/app.js
  window.BookshopLive = getLive(bookshop_config_default);
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
